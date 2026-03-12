import React, { useMemo } from 'react'
import { calculateCircleMask, Corner, BadgeContent } from './geometry'
import './badge-icon.css'

const BADGE_DOT_RADIUS = 5
const BADGE_NUMBER_RADIUS = 8
const DEFAULT_GAP = 3
const DEFAULT_JUNCTION_RADIUS = 2

interface BadgeIconProps {
  size?: number
  variant?: 'desktop' | 'mobile'
  corner?: Corner
  badge?: BadgeContent | null
  gap?: number
  junctionRadius?: number
  iconBg?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

const getBadgeRadius = (badge: BadgeContent | null | undefined): number => {
  if (badge === null || badge === undefined) return 0
  if (badge === 'dot') return BADGE_DOT_RADIUS
  return BADGE_NUMBER_RADIUS
}

export const BadgeIcon: React.FC<BadgeIconProps> = ({
  size = 40,
  variant = 'mobile',
  corner = 'top-right',
  badge = null,
  gap = DEFAULT_GAP,
  junctionRadius = DEFAULT_JUNCTION_RADIUS,
  iconBg,
  className = '',
  style,
  children,
}) => {
  const badgeRadius = getBadgeRadius(badge)

  const mask = useMemo(() => {
    if (badge === null || badge === undefined) return null

    // TODO: variant === 'desktop' → calculateSquircleMask
    return calculateCircleMask(size, badgeRadius, gap, junctionRadius, corner)
  }, [size, badgeRadius, gap, junctionRadius, corner, badge, variant])

  const hasBadge = mask !== null

  const iconRadius = variant === 'mobile' ? '50%' : `${Math.round(size * 0.22)}px`

  const cssVars: Record<string, string> = {
    '--icon-size': `${size}px`,
    '--icon-radius': iconRadius,
    ...(iconBg ? { '--icon-bg': iconBg } : {}),
  }

  if (hasBadge && mask) {
    Object.assign(cssVars, {
      '--icon-cx': `${mask.iconCx}px`,
      '--icon-cy': `${mask.iconCy}px`,
      '--icon-r': `${mask.iconR}px`,
      '--cutout-x': `${mask.cutoutX}px`,
      '--cutout-y': `${mask.cutoutY}px`,
      '--cutout-r': `${mask.cutoutR}px`,
      '--jx1': `${mask.jx1}px`,
      '--jy1': `${mask.jy1}px`,
      '--jx2': `${mask.jx2}px`,
      '--jy2': `${mask.jy2}px`,
      '--jr': `${mask.jr}px`,
      '--badge-x': `${mask.badgeX}px`,
      '--badge-y': `${mask.badgeY}px`,
      '--sq1-x': `${mask.sq1X}px`,
      '--sq1-y': `${mask.sq1Y}px`,
      '--sq2-x': `${mask.sq2X}px`,
      '--sq2-y': `${mask.sq2Y}px`,
    })
  }

  const shapeClassName = [
    'badge-icon__shape',
    hasBadge && 'badge-icon__shape--has-badge',
  ].filter(Boolean).join(' ')

  const badgeClassName = [
    'badge-icon__badge',
    badge === 'dot' ? 'badge-icon__badge--dot' : 'badge-icon__badge--number',
  ].join(' ')

  return (
    <div
      className={`badge-icon ${className}`.trim()}
      style={{ ...cssVars, ...style } as React.CSSProperties}
    >
      <div className={shapeClassName}>
        {children}
      </div>
      {hasBadge && (
        <>
          <div className="badge-icon__debug-j1" />
          <div className="badge-icon__debug-j2" />
          <div className="badge-icon__debug-center-1" />
          <div className="badge-icon__debug-center-2" />
          <div className="badge-icon__debug-cutout" />
          <div className="badge-icon__sq1" />
          <div className="badge-icon__sq2" />
          <div className={badgeClassName} aria-label={badge === 'dot' ? 'Есть уведомления' : `${badge} уведомлений`}>
            {badge !== 'dot' ? badge : null}
          </div>
        </>
      )}
    </div>
  )
}
