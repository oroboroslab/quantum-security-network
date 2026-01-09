import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Shield,
  Lock,
  AlertTriangle,
  Network,
  Moon,
  Settings,
  ChevronLeft,
  ChevronRight,
  Hexagon
} from 'lucide-react'
import './Sidebar.css'

const navItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/security-levels', icon: Shield, label: 'Security Levels' },
  { path: '/quantum-encryption', icon: Lock, label: 'Quantum Encryption' },
  { path: '/threat-intelligence', icon: AlertTriangle, label: 'Threat Intel' },
  { path: '/network-monitor', icon: Network, label: 'Network Monitor' },
  { path: '/noir', icon: Moon, label: 'NOIR Systems' },
  { path: '/settings', icon: Settings, label: 'Settings' }
]

function Sidebar({ isOpen, currentLevel, onToggle }) {
  const getLevelColor = () => {
    if (currentLevel >= 1000) return 'var(--level-1000)'
    if (currentLevel >= 100) return 'var(--level-100)'
    if (currentLevel >= 99) return 'var(--level-99)'
    return 'var(--level-65)'
  }

  return (
    <aside className={`qsn-sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Hexagon className="logo-icon" style={{ color: getLevelColor() }} />
          {isOpen && (
            <div className="logo-text">
              <span className="logo-title">QSN</span>
              <span className="logo-subtitle">Quantum Security</span>
            </div>
          )}
        </div>
        <button className="sidebar-toggle" onClick={onToggle}>
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
            title={!isOpen ? item.label : undefined}
          >
            <item.icon className="nav-icon" size={20} />
            {isOpen && <span className="nav-label">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        {isOpen && (
          <div className="security-badge">
            <div className="badge-indicator" style={{ background: getLevelColor() }} />
            <span className="badge-text">Level {currentLevel}</span>
          </div>
        )}
      </div>
    </aside>
  )
}

export default Sidebar
