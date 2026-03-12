export type Corner = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export type BadgeContent = 'dot' | number;

export interface MaskGeometry {
  /** Центр иконки по X (px) */
  iconCx: number
  /** Центр иконки по Y (px) */
  iconCy: number
  /** Радиус иконки (px) */
  iconR: number
  /** Центр вырезаемой области (cutout) по X — совпадает с badgeX */
  cutoutX: number
  /** Центр вырезаемой области (cutout) по Y — совпадает с badgeY */
  cutoutY: number
  /** Радиус вырезаемой области = badgeRadius + gap */
  cutoutR: number
  /** Центр первой junction-окружности по X */
  jx1: number
  /** Центр первой junction-окружности по Y */
  jy1: number
  /** Центр второй junction-окружности по X */
  jx2: number
  /** Центр второй junction-окружности по Y */
  jy2: number
  /** Радиус junction-окружностей (одинаковый для обеих) */
  jr: number
  /** Центр badge по X (точка на периметре иконки в выбранном corner) */
  badgeX: number
  /** Центр badge по Y */
  badgeY: number
  /** Левый край квадрата 4×4, центрирован в junction 1 */
  sq1X: number
  sq1Y: number
  /** Левый край квадрата 4×4, центрирован в junction 2 */
  sq2X: number
  sq2Y: number
}

/**
 * Угол (в радианах) от центра иконки до центра badge.
 * Ось X → вправо, ось Y → вниз (экранные координаты),
 * угол отсчитывается от оси X против часовой стрелки.
 *
 * top-right    →  π/4   (45°)  — badge в правом верхнем углу
 * top-left     → 3π/4  (135°)  — badge в левом верхнем углу
 * bottom-right → −π/4  (−45°)  — badge в правом нижнем углу
 * bottom-left  → −3π/4 (−135°) — badge в левом нижнем углу
 */
const CORNER_ANGLES: Record<Corner, number> = {
  'top-right': Math.PI / 4,
  'top-left': (3 * Math.PI) / 4,
  'bottom-right': -Math.PI / 4,
  'bottom-left': (-3 * Math.PI) / 4,
}

/**
 * Центр окружности радиуса r, касательной к двум заданным.
 * Ищется пересечение окружностей (O, r1) и (B, r2).
 *
 * @param ox, oy — центр первой окружности
 * @param r1 — радиус первой (расстояние от искомого центра до O)
 * @param bx, by — центр второй окружности
 * @param r2 — радиус второй (расстояние от искомого центра до B)
 * @returns два центра [j1, j2] или пусто, если окружности не пересекаются
 */
const findCircleCentersAtIntersection = (
  ox: number,
  oy: number,
  r1: number,
  bx: number,
  by: number,
  r2: number,
): [x1: number, y1: number, x2: number, y2: number] | null => {
  const dx = bx - ox
  const dy = by - oy
  const d = Math.sqrt(dx * dx + dy * dy)

  if (d === 0) return null

  const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d)
  const hSq = r1 * r1 - a * a
  if (hSq < 0) return null

  const h = Math.sqrt(hSq)
  const mx = ox + (a * dx) / d
  const my = oy + (a * dy) / d
  const perpX = -dy / d
  const perpY = dx / d

  return [
    mx + h * perpX,
    my + h * perpY,
    mx - h * perpX,
    my - h * perpY,
  ]
}

/**
 * Расчёт геометрии маски для круглой иконки (задача Аполлония).
 *
 * Junction-окружности строятся так, чтобы быть:
 *  - внутренне касательными к icon (расстояние от O до центра = R − jr)
 *  - внешне касательными к cutout  (расстояние от B до центра = cutoutR + jr)
 *
 * Это даёт гладкий вогнутый переход от дуги иконки к дуге badge-выреза.
 *
 * Управление позицией junction-центров:
 *  - junctionRadius (jr) ↑ → центры сдвигаются внутрь иконки, дуги крупнее
 *  - junctionRadius (jr) ↓ → центры ближе к краю иконки, дуги мельче
 *  - gap ↑ → cutoutR растёт → вырез шире → junction-центры раздвигаются
 *  - badgeRadius ↑ → аналогично gap
 *
 * Маска: (icon ∩ cutout_inverted) ∪ junction1 ∪ junction2
 */
export const calculateCircleMask = (
  iconSize: number,
  badgeRadius: number,
  gap: number,
  junctionRadius: number,
  corner: Corner,
): MaskGeometry => {
  const R = iconSize / 2
  const cx = R
  const cy = R
  const jr = junctionRadius

  const angle = CORNER_ANGLES[corner]
  const badgeX = cx + R * Math.cos(angle)
  const badgeY = cy - R * Math.sin(angle)

  const cutoutR = badgeRadius + gap

  // Аполлоний: каждая junction-окружность касается в двух точках —
  // 1) чёрная (icon) — внутренняя касательная: |J − O| = R − jr
  // 2) внешний радиус красной (cutout, где обрезка) — внешняя касательная: |J − B| = cutoutR + jr
  const r1 = R - jr
  const r2 = cutoutR + jr
  const centers = findCircleCentersAtIntersection(cx, cy, r1, badgeX, badgeY, r2)

  const jx1 = centers![0]
  const jy1 = centers![1]
  const jx2 = centers![2]
  const jy2 = centers![3]

  /** Квадраты 4×4: нижний левый угол в центре junction — угол «выходит» из центра окружности */
  const SQ_SIZE = 4

  return {
    iconCx: cx,
    iconCy: cy,
    iconR: R,
    cutoutX: badgeX,
    cutoutY: badgeY,
    cutoutR,
    jx1,
    jy1,
    jx2,
    jy2,
    jr,
    badgeX,
    badgeY,
    sq1X: jx1,
    sq1Y: jy1 - SQ_SIZE,
    sq2X: jx2,
    sq2Y: jy2 - SQ_SIZE,
  }
}

// TODO: calculateSquircleMask для desktop-варианта
