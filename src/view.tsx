import React from 'react'
import { BadgeIcon } from './badge-icon/BadgeIcon'

const DiamondLogo = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 2,
    transform: 'rotate(45deg)',
    width: '35%',
    height: '35%',
  }}>
    {[0, 1, 2, 3].map((i) => (
      <div
        key={i}
        style={{
          background: '#fff',
          borderRadius: 1,
          aspectRatio: '1',
        }}
      />
    ))}
  </div>
)

const sectionStyle: React.CSSProperties = {
  padding: 24,
  borderRadius: 12,
  display: 'flex',
  gap: 24,
  alignItems: 'center',
  flexWrap: 'wrap',
}

export const View = () => {
  return (
    <div style={{ padding: 40, fontFamily: '-apple-system, sans-serif' }}>
      <h2 style={{ marginBottom: 24 }}>Badge Cutout Icon Demo</h2>

      {/* DEBUG: ×8 scale для проверки junction-касательности */}
      <h3>DEBUG — 40px ×8</h3>
      <div style={{ ...sectionStyle, background: '#f0f0f0', height: 400, alignItems: 'flex-start', paddingTop: 40, paddingLeft: 60, overflow: 'visible' }}>
        <div style={{ transform: 'scale(8)', transformOrigin: 'top left', overflow: 'visible' }}>
          <BadgeIcon size={40} variant="mobile" corner="top-right" badge={1}>
            <DiamondLogo />
          </BadgeIcon>
        </div>
      </div>

      {/* 40px — основной размер */}
      <h3 style={{ marginTop: 32 }}>40px — mobile</h3>
      <div style={{ ...sectionStyle, background: '#f0f0f0' }}>
        <BadgeIcon size={40} badge={null}>
          <DiamondLogo />
        </BadgeIcon>
        <BadgeIcon size={40} badge="dot">
          <DiamondLogo />
        </BadgeIcon>
        <BadgeIcon size={40} badge={1}>
          <DiamondLogo />
        </BadgeIcon>
        <BadgeIcon size={40} badge={99}>
          <DiamondLogo />
        </BadgeIcon>
      </div>

      {/* 32px — компактный размер */}
      <h3 style={{ marginTop: 32 }}>32px — mobile</h3>
      <div style={{ ...sectionStyle, background: '#f0f0f0' }}>
        <BadgeIcon size={32} badge={null}>
          <DiamondLogo />
        </BadgeIcon>
        <BadgeIcon size={32} badge="dot">
          <DiamondLogo />
        </BadgeIcon>
        <BadgeIcon size={32} badge={1}>
          <DiamondLogo />
        </BadgeIcon>
        <BadgeIcon size={32} badge={99}>
          <DiamondLogo />
        </BadgeIcon>
      </div>

      {/* Все 4 угла */}
      <h3 style={{ marginTop: 32 }}>Все углы — 40px, dot</h3>
      <div style={{ ...sectionStyle, background: '#f0f0f0' }}>
        <BadgeIcon size={40} corner="top-right" badge="dot">
          <DiamondLogo />
        </BadgeIcon>
        <BadgeIcon size={40} corner="top-left" badge="dot">
          <DiamondLogo />
        </BadgeIcon>
        <BadgeIcon size={40} corner="bottom-right" badge="dot">
          <DiamondLogo />
        </BadgeIcon>
        <BadgeIcon size={40} corner="bottom-left" badge="dot">
          <DiamondLogo />
        </BadgeIcon>
      </div>

      {/* Прозрачность cutout — разные фоны */}
      <h3 style={{ marginTop: 32 }}>Прозрачность cutout</h3>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ ...sectionStyle, background: '#ffffff' }}>
          <BadgeIcon size={40} badge={1}>
            <DiamondLogo />
          </BadgeIcon>
        </div>
        <div style={{ ...sectionStyle, background: '#e0e0e0' }}>
          <BadgeIcon size={40} badge={1}>
            <DiamondLogo />
          </BadgeIcon>
        </div>
        <div style={{
          ...sectionStyle,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}>
          <BadgeIcon size={40} badge={1}>
            <DiamondLogo />
          </BadgeIcon>
        </div>
      </div>

      {/* Оба размера рядом */}
      <h3 style={{ marginTop: 32 }}>32px vs 40px</h3>
      <div style={{ ...sectionStyle, background: '#f0f0f0' }}>
        <BadgeIcon size={32} badge={1}>
          <DiamondLogo />
        </BadgeIcon>
        <BadgeIcon size={40} badge={1}>
          <DiamondLogo />
        </BadgeIcon>
      </div>
    </div>
  )
}
