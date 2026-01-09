import React, { useState, useEffect } from 'react'
import {
  Bell,
  Shield,
  Activity,
  Wifi,
  Clock,
  ChevronDown
} from 'lucide-react'
import './Header.css'

const securityLevels = [
  { value: 65, label: 'Level 65', desc: 'Free/Public', color: 'var(--level-65)' },
  { value: 99, label: 'Level 99', desc: 'Business', color: 'var(--level-99)' },
  { value: 100, label: 'Level 100', desc: 'Government', color: 'var(--level-100)' },
  { value: 1000, label: 'Level 1000', desc: 'Developer', color: 'var(--level-1000)' }
]

function Header({ systemStatus, currentLevel, onLevelChange }) {
  const [time, setTime] = useState(new Date())
  const [showLevelMenu, setShowLevelMenu] = useState(false)
  const [alerts, setAlerts] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const getCurrentLevelInfo = () => {
    return securityLevels.find(l => l.value === currentLevel) || securityLevels[0]
  }

  const levelInfo = getCurrentLevelInfo()

  return (
    <header className="qsn-header">
      <div className="header-left">
        <div className="system-status">
          <div className={`status-indicator ${systemStatus.quantum_state === 'OPERATIONAL' ? 'active' : 'warning'}`} />
          <span className="status-text">
            Quantum State: <strong>{systemStatus.quantum_state}</strong>
          </span>
        </div>
      </div>

      <div className="header-center">
        <div className="header-metrics">
          <div className="metric">
            <Shield size={16} />
            <span>Security: <strong className="text-green">{systemStatus.security_level}</strong></span>
          </div>
          <div className="metric">
            <Activity size={16} />
            <span>Threat: <strong className="text-cyan">{systemStatus.threat_level}</strong></span>
          </div>
          <div className="metric">
            <Wifi size={16} />
            <span>Consciousness: <strong className="text-purple">{systemStatus.consciousness_level}%</strong></span>
          </div>
        </div>
      </div>

      <div className="header-right">
        <div className="header-time">
          <Clock size={14} />
          <span>{time.toLocaleTimeString()}</span>
        </div>

        <div className="level-selector" onClick={() => setShowLevelMenu(!showLevelMenu)}>
          <div className="level-badge" style={{ borderColor: levelInfo.color }}>
            <div className="level-dot" style={{ background: levelInfo.color }} />
            <span>{levelInfo.label}</span>
            <ChevronDown size={14} />
          </div>

          {showLevelMenu && (
            <div className="level-dropdown">
              {securityLevels.map(level => (
                <button
                  key={level.value}
                  className={`level-option ${currentLevel === level.value ? 'active' : ''}`}
                  onClick={() => {
                    onLevelChange(level.value)
                    setShowLevelMenu(false)
                  }}
                >
                  <div className="level-dot" style={{ background: level.color }} />
                  <div className="level-info">
                    <span className="level-name">{level.label}</span>
                    <span className="level-desc">{level.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="alert-button">
          <Bell size={18} />
          {alerts > 0 && <span className="alert-badge">{alerts}</span>}
        </button>
      </div>
    </header>
  )
}

export default Header
