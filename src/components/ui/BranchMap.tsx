'use client'
import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { BRANCHES } from '@/data/church'

type Branch = typeof BRANCHES[number]

function createIcon(isHQ: boolean, isActive: boolean) {
  const size = isHQ ? 48 : 40
  const color = isActive ? '#F5C518' : isHQ ? '#D4A017' : '#0D2B6B'
  const shadow = isActive ? '0 0 20px rgba(245,197,24,0.6)' : '0 4px 12px rgba(0,0,0,0.3)'
  return L.divIcon({
    html: `<div style="
      width:${size}px;height:${size}px;
      background:${color};
      border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);
      display:flex;align-items:center;justify-content:center;
      box-shadow:${shadow};
      border:3px solid ${isActive ? '#fff' : 'rgba(255,255,255,0.4)'};
    ">
      <span style="transform:rotate(45deg);font-size:${isHQ ? 22 : 18}px;">✝</span>
    </div>`,
    className: '',
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -(size + 4)],
  })
}

function FlyTo({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap()
  useEffect(() => {
    map.flyTo([lat, lng], 15, { duration: 1.2 })
  }, [lat, lng, map])
  return null
}

export default function BranchMap({
  branches,
  active,
  onSelect,
}: {
  branches: Branch[]
  active: Branch
  onSelect: (b: Branch) => void
}) {
  return (
    <MapContainer
      center={[active.lat, active.lng]}
      zoom={13}
      style={{ width: '100%', height: '100%' }}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FlyTo lat={active.lat} lng={active.lng} />
      {branches.map((branch) => (
        <Marker
          key={branch.id}
          position={[branch.lat, branch.lng]}
          icon={createIcon(branch.type === 'HQ', active.id === branch.id)}
          eventHandlers={{ click: () => onSelect(branch) }}
        >
          <Popup>
            <div style={{ fontFamily: 'Outfit, sans-serif', padding: '4px', minWidth: '180px' }}>
              <div style={{ fontWeight: 700, color: '#071A47', fontSize: '0.9rem', marginBottom: '4px', lineHeight: 1.3 }}>
                {branch.name}
              </div>
              <div style={{ color: '#64748b', fontSize: '0.78rem', marginBottom: '6px' }}>{branch.address}</div>
              <div style={{ color: '#D4A017', fontSize: '0.78rem', fontWeight: 600 }}>⏰ {branch.time}</div>
              <div style={{ marginTop: '8px' }}>
                <a
                  href={`https://maps.google.com/?q=${branch.lat},${branch.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg,#F5C518,#D4A017)',
                    color: '#071A47',
                    padding: '5px 12px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                  }}
                >
                  GET DIRECTIONS ↗
                </a>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
