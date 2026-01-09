import React, { useState, useEffect } from 'react'
import {
  Moon,
  Eye,
  Shield,
  Lock,
  Radar,
  Fingerprint,
  Scan,
  Activity,
  AlertCircle,
  CheckCircle,
  Server,
  Network,
  Cpu
} from 'lucide-react'
import { Card, CardHeader, CardBody, StatusIndicator, ProgressBar } from '../components/shared/Card'
import './NoirPanel.css'

// NOIR Level 100 Configuration - No Mirrors, No Reflections
const noirSystems = {
  sentinel: {
    name: 'NOIR Sentinel',
    description: 'Advanced threat detection and prevention',
    status: 'ACTIVE',
    level: 100,
    capabilities: [
      'Zero-day threat detection',
      'Behavioral analysis',
      'Pattern recognition',
      'Autonomous response'
    ]
  },
  phantom: {
    name: 'NOIR Phantom',
    description: 'Stealth network operations',
    status: 'ACTIVE',
    level: 100,
    capabilities: [
      'Traffic obfuscation',
      'Identity masking',
      'Trace elimination',
      'Covert channels'
    ]
  },
  oracle: {
    name: 'NOIR Oracle',
    description: 'Predictive security intelligence',
    status: 'ACTIVE',
    level: 100,
    capabilities: [
      'Threat prediction',
      'Risk assessment',
      'Vulnerability forecasting',
      'Attack simulation'
    ]
  },
  guardian: {
    name: 'NOIR Guardian',
    description: 'Perimeter defense system',
    status: 'ACTIVE',
    level: 100,
    capabilities: [
      'Intrusion prevention',
      'Access control',
      'Authentication enforcement',
      'Boundary protection'
    ]
  }
}

function NoirPanel({ currentLevel }) {
  const [noirMetrics, setNoirMetrics] = useState({
    threatsNeutralized: 0,
    scansCompleted: 0,
    anomaliesDetected: 0,
    systemIntegrity: 100
  })

  const [activeScans, setActiveScans] = useState([])

  const isAuthorized = currentLevel >= 100

  useEffect(() => {
    if (!isAuthorized) return

    const interval = setInterval(() => {
      setNoirMetrics(prev => ({
        threatsNeutralized: prev.threatsNeutralized + (Math.random() > 0.95 ? 1 : 0),
        scansCompleted: prev.scansCompleted + Math.floor(Math.random() * 10),
        anomaliesDetected: prev.anomaliesDetected + (Math.random() > 0.98 ? 1 : 0),
        systemIntegrity: Math.min(100, 98 + Math.random() * 2)
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [isAuthorized])

  if (!isAuthorized) {
    return (
      <div className="noir-page">
        <div className="noir-restricted">
          <Moon size={64} className="restricted-icon" />
          <h2>NOIR Systems</h2>
          <p>Access Restricted</p>
          <div className="restricted-message">
            <AlertCircle size={20} />
            <span>Level 100+ authorization required to access NOIR systems</span>
          </div>
          <div className="required-level">
            <span>Your Level: {currentLevel}</span>
            <span>Required: 100+</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="noir-page">
      <div className="page-header">
        <div className="noir-title">
          <Moon className="noir-icon" />
          <div>
            <h1>NOIR Systems</h1>
            <p className="page-subtitle">Level 100 Security Operations - No Mirrors</p>
          </div>
        </div>
        <div className="noir-status">
          <div className="status-pulse" />
          <span>All Systems Operational</span>
        </div>
      </div>

      {/* NOIR Metrics */}
      <div className="noir-metrics">
        <div className="noir-metric">
          <Shield size={24} />
          <div className="metric-data">
            <span className="metric-value">{noirMetrics.threatsNeutralized}</span>
            <span className="metric-label">Threats Neutralized</span>
          </div>
        </div>
        <div className="noir-metric">
          <Scan size={24} />
          <div className="metric-data">
            <span className="metric-value">{noirMetrics.scansCompleted.toLocaleString()}</span>
            <span className="metric-label">Scans Completed</span>
          </div>
        </div>
        <div className="noir-metric">
          <AlertCircle size={24} />
          <div className="metric-data">
            <span className="metric-value">{noirMetrics.anomaliesDetected}</span>
            <span className="metric-label">Anomalies Detected</span>
          </div>
        </div>
        <div className="noir-metric">
          <CheckCircle size={24} />
          <div className="metric-data">
            <span className="metric-value">{noirMetrics.systemIntegrity.toFixed(1)}%</span>
            <span className="metric-label">System Integrity</span>
          </div>
        </div>
      </div>

      {/* NOIR Systems Grid */}
      <div className="noir-systems-grid">
        {Object.entries(noirSystems).map(([key, system]) => (
          <Card key={key} className="noir-system-card" level={100}>
            <CardHeader
              title={system.name}
              subtitle={system.description}
              icon={key === 'sentinel' ? Eye : key === 'phantom' ? Moon : key === 'oracle' ? Radar : Shield}
              action={
                <div className={`system-status-badge ${system.status.toLowerCase()}`}>
                  {system.status}
                </div>
              }
            />
            <CardBody>
              <div className="system-level">
                <span>Security Level</span>
                <span className="level-value">{system.level}</span>
              </div>
              <div className="system-capabilities">
                <h5>Capabilities</h5>
                <ul>
                  {system.capabilities.map((cap, idx) => (
                    <li key={idx}>
                      <CheckCircle size={12} />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ProgressBar
                value={95 + Math.random() * 5}
                max={100}
                label="Operational Efficiency"
                color="purple"
              />
            </CardBody>
          </Card>
        ))}
      </div>

      {/* NOIR Command Console */}
      <Card className="noir-console" level={100}>
        <CardHeader
          title="NOIR Command Console"
          subtitle="Level 100 operations interface"
          icon={Cpu}
        />
        <CardBody>
          <div className="console-output">
            <div className="console-line">[NOIR] System initialized at Level 100</div>
            <div className="console-line">[NOIR] No mirrors configuration: ACTIVE</div>
            <div className="console-line">[NOIR] No reflections protocol: ENGAGED</div>
            <div className="console-line">[SENTINEL] Threat detection: MONITORING</div>
            <div className="console-line">[PHANTOM] Stealth protocols: ENABLED</div>
            <div className="console-line">[ORACLE] Predictive analysis: RUNNING</div>
            <div className="console-line">[GUARDIAN] Perimeter defense: SECURED</div>
            <div className="console-line success">[NOIR] All systems nominal</div>
          </div>
          <div className="console-input">
            <span className="prompt">NOIR://</span>
            <input type="text" placeholder="Enter command..." disabled />
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default NoirPanel
