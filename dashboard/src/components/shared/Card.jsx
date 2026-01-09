import React from 'react'
import './Card.css'

export function Card({ children, className = '', glow = false, level }) {
  const getLevelClass = () => {
    if (!level) return ''
    if (level >= 1000) return 'card-level-1000'
    if (level >= 100) return 'card-level-100'
    if (level >= 99) return 'card-level-99'
    return 'card-level-65'
  }

  return (
    <div className={`qsn-card ${className} ${glow ? 'glow' : ''} ${getLevelClass()}`}>
      {children}
    </div>
  )
}

export function CardHeader({ title, subtitle, icon: Icon, action }) {
  return (
    <div className="card-header">
      <div className="card-header-content">
        {Icon && <Icon className="card-icon" size={20} />}
        <div className="card-titles">
          <h3 className="card-title">{title}</h3>
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      </div>
      {action && <div className="card-action">{action}</div>}
    </div>
  )
}

export function CardBody({ children, className = '' }) {
  return (
    <div className={`card-body ${className}`}>
      {children}
    </div>
  )
}

export function StatusIndicator({ status, label, value, icon: Icon }) {
  const getStatusClass = () => {
    switch (status) {
      case 'secure':
      case 'active':
      case 'online':
        return 'status-secure'
      case 'warning':
      case 'medium':
        return 'status-warning'
      case 'danger':
      case 'critical':
      case 'offline':
        return 'status-danger'
      default:
        return 'status-info'
    }
  }

  return (
    <div className={`status-indicator-row ${getStatusClass()}`}>
      <div className="status-left">
        {Icon && <Icon size={16} />}
        <span className="status-label">{label}</span>
      </div>
      <div className="status-right">
        <span className="status-value">{value}</span>
        <div className={`status-dot ${getStatusClass()}`} />
      </div>
    </div>
  )
}

export function MetricCard({ title, value, unit, change, icon: Icon, color = 'cyan' }) {
  return (
    <div className={`metric-card metric-${color}`}>
      <div className="metric-header">
        {Icon && <Icon size={24} className="metric-icon" />}
      </div>
      <div className="metric-value">
        <span className="value">{value}</span>
        {unit && <span className="unit">{unit}</span>}
      </div>
      <div className="metric-label">{title}</div>
      {change !== undefined && (
        <div className={`metric-change ${change >= 0 ? 'positive' : 'negative'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </div>
      )}
    </div>
  )
}

export function ProgressBar({ value, max = 100, label, color = 'cyan', showValue = true }) {
  const percentage = (value / max) * 100

  return (
    <div className="progress-container">
      {label && (
        <div className="progress-header">
          <span className="progress-label">{label}</span>
          {showValue && <span className="progress-value">{value}/{max}</span>}
        </div>
      )}
      <div className="progress-track">
        <div
          className={`progress-fill progress-${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
