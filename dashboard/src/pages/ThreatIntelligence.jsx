import React, { useState, useEffect } from 'react'
import {
  AlertTriangle,
  Shield,
  Eye,
  Activity,
  Target,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react'
import { Card, CardHeader, CardBody, ProgressBar } from '../components/shared/Card'
import './ThreatIntelligence.css'

const threatTypes = [
  { id: 'sql', name: 'SQL Injection', severity: 'HIGH', blocked: true },
  { id: 'xss', name: 'XSS Attempts', severity: 'HIGH', blocked: true },
  { id: 'ddos', name: 'DDoS Patterns', severity: 'MEDIUM', blocked: true },
  { id: 'brute', name: 'Brute Force', severity: 'MEDIUM', blocked: true },
  { id: 'phish', name: 'Phishing', severity: 'LOW', blocked: true }
]

function ThreatIntelligence({ currentLevel }) {
  const [threats, setThreats] = useState({
    total: 0,
    blocked: 0,
    active: 0,
    riskScore: 12
  })

  const [recentAlerts, setRecentAlerts] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      setThreats(prev => ({
        total: prev.total + Math.floor(Math.random() * 3),
        blocked: prev.blocked + Math.floor(Math.random() * 3),
        active: Math.floor(Math.random() * 3),
        riskScore: Math.max(0, Math.min(100, prev.riskScore + (Math.random() - 0.5) * 5))
      }))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const alertInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newAlert = {
          id: Date.now(),
          type: threatTypes[Math.floor(Math.random() * threatTypes.length)].name,
          time: new Date().toLocaleTimeString(),
          status: 'BLOCKED',
          ip: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`
        }
        setRecentAlerts(prev => [newAlert, ...prev.slice(0, 9)])
      }
    }, 5000)

    return () => clearInterval(alertInterval)
  }, [])

  const getRiskLevel = () => {
    if (threats.riskScore < 20) return { level: 'LOW', color: 'var(--status-secure)' }
    if (threats.riskScore < 50) return { level: 'MEDIUM', color: 'var(--status-warning)' }
    return { level: 'HIGH', color: 'var(--status-danger)' }
  }

  const risk = getRiskLevel()

  return (
    <div className="threat-intel-page">
      <div className="page-header">
        <h1>Threat Intelligence</h1>
        <p className="page-subtitle">Real-time threat detection and analysis</p>
      </div>

      {/* Threat Overview */}
      <div className="threat-overview">
        <Card level={currentLevel} glow>
          <CardBody>
            <div className="risk-display">
              <div className="risk-circle" style={{ '--risk-color': risk.color }}>
                <span className="risk-value">{Math.round(threats.riskScore)}</span>
                <span className="risk-label">Risk Score</span>
              </div>
              <div className="risk-info">
                <div className="risk-level" style={{ color: risk.color }}>
                  {risk.level} RISK
                </div>
                <p>Current threat assessment</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card level={currentLevel}>
          <CardHeader title="Threat Statistics" icon={Activity} />
          <CardBody>
            <div className="threat-stats">
              <div className="stat">
                <span className="stat-value">{threats.total}</span>
                <span className="stat-label">Total Detected</span>
              </div>
              <div className="stat">
                <span className="stat-value text-green">{threats.blocked}</span>
                <span className="stat-label">Blocked</span>
              </div>
              <div className="stat">
                <span className="stat-value text-orange">{threats.active}</span>
                <span className="stat-label">Active</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Threat Types */}
      <Card level={currentLevel}>
        <CardHeader
          title="Threat Detection Matrix"
          subtitle="Active threat monitoring by category"
          icon={Target}
        />
        <CardBody>
          <div className="threat-matrix">
            {threatTypes.map(threat => (
              <div key={threat.id} className="threat-row">
                <div className="threat-info">
                  <div className={`severity-badge ${threat.severity.toLowerCase()}`}>
                    {threat.severity}
                  </div>
                  <span className="threat-name">{threat.name}</span>
                </div>
                <div className="threat-status">
                  <ProgressBar
                    value={Math.random() * 30}
                    max={100}
                    color={threat.severity === 'HIGH' ? 'red' : threat.severity === 'MEDIUM' ? 'orange' : 'green'}
                    showValue={false}
                  />
                </div>
                <div className={`status-icon ${threat.blocked ? 'blocked' : 'active'}`}>
                  {threat.blocked ? <Shield size={18} /> : <AlertCircle size={18} />}
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Recent Alerts */}
      <Card level={currentLevel}>
        <CardHeader
          title="Recent Security Alerts"
          subtitle="Live threat feed"
          icon={AlertTriangle}
        />
        <CardBody>
          <div className="alerts-list">
            {recentAlerts.length === 0 ? (
              <div className="no-alerts">
                <CheckCircle size={24} className="text-green" />
                <span>No recent alerts - System secure</span>
              </div>
            ) : (
              recentAlerts.map(alert => (
                <div key={alert.id} className="alert-item">
                  <div className="alert-icon">
                    <Shield size={16} className="text-green" />
                  </div>
                  <div className="alert-details">
                    <span className="alert-type">{alert.type}</span>
                    <span className="alert-ip">from {alert.ip}</span>
                  </div>
                  <div className="alert-time">
                    <Clock size={12} />
                    <span>{alert.time}</span>
                  </div>
                  <div className="alert-status blocked">
                    {alert.status}
                  </div>
                </div>
              ))
            )}
          </div>
        </CardBody>
      </Card>

      {/* Detection Capabilities */}
      <div className="detection-grid">
        <Card level={currentLevel}>
          <CardHeader title="Pattern Analysis" icon={Eye} />
          <CardBody>
            <p className="capability-desc">
              Advanced behavioral analysis using quantum pattern recognition
            </p>
            <div className="capability-status active">
              <CheckCircle size={16} />
              <span>Active</span>
            </div>
          </CardBody>
        </Card>

        <Card level={currentLevel}>
          <CardHeader title="Zero-Day Detection" icon={Target} />
          <CardBody>
            <p className="capability-desc">
              Proactive threat detection for unknown vulnerabilities
            </p>
            <div className={`capability-status ${currentLevel >= 100 ? 'active' : 'locked'}`}>
              {currentLevel >= 100 ? (
                <>
                  <CheckCircle size={16} />
                  <span>Active</span>
                </>
              ) : (
                <>
                  <XCircle size={16} />
                  <span>Level 100+</span>
                </>
              )}
            </div>
          </CardBody>
        </Card>

        <Card level={currentLevel}>
          <CardHeader title="AI Threat Prediction" icon={Activity} />
          <CardBody>
            <p className="capability-desc">
              Machine learning powered threat forecasting
            </p>
            <div className={`capability-status ${currentLevel >= 99 ? 'active' : 'locked'}`}>
              {currentLevel >= 99 ? (
                <>
                  <CheckCircle size={16} />
                  <span>Active</span>
                </>
              ) : (
                <>
                  <XCircle size={16} />
                  <span>Level 99+</span>
                </>
              )}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default ThreatIntelligence
