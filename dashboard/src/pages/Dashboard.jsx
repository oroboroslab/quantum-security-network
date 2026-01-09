import React, { useState, useEffect } from 'react'
import {
  Shield,
  Lock,
  Activity,
  Cpu,
  Network,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  Eye,
  Server,
  Database
} from 'lucide-react'
import { Card, CardHeader, CardBody, StatusIndicator, MetricCard, ProgressBar } from '../components/shared/Card'
import './Dashboard.css'

function Dashboard({ systemStatus, currentLevel }) {
  const [metrics, setMetrics] = useState({
    quantumEntropy: 94.7,
    networkHealth: 99.2,
    threatScore: 12,
    encryptionStrength: 256,
    activeConnections: 847,
    dataProcessed: 2.4
  })

  const [realtimeData, setRealtimeData] = useState({
    packetsAnalyzed: 0,
    threatsBlocked: 0,
    apiRequests: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRealtimeData(prev => ({
        packetsAnalyzed: prev.packetsAnalyzed + Math.floor(Math.random() * 100),
        threatsBlocked: prev.threatsBlocked + (Math.random() > 0.9 ? 1 : 0),
        apiRequests: prev.apiRequests + Math.floor(Math.random() * 50)
      }))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const getLevelFeatures = () => {
    if (currentLevel >= 1000) return { quantum: true, temporal: true, strata: true, consciousness: true, noir: true }
    if (currentLevel >= 100) return { quantum: true, temporal: true, strata: true, consciousness: false, noir: true }
    if (currentLevel >= 99) return { quantum: true, temporal: true, strata: false, consciousness: false, noir: false }
    return { quantum: true, temporal: false, strata: false, consciousness: false, noir: false }
  }

  const features = getLevelFeatures()

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Security Dashboard</h1>
        <p className="page-subtitle">QSN Quantum Security Network - Real-time Monitoring</p>
      </div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        <MetricCard
          title="Quantum Entropy"
          value={metrics.quantumEntropy}
          unit="%"
          icon={Zap}
          color="cyan"
          change={2.3}
        />
        <MetricCard
          title="Network Health"
          value={metrics.networkHealth}
          unit="%"
          icon={Network}
          color="green"
          change={0.5}
        />
        <MetricCard
          title="Threat Score"
          value={metrics.threatScore}
          unit="/100"
          icon={Shield}
          color="orange"
          change={-5}
        />
        <MetricCard
          title="Encryption"
          value={metrics.encryptionStrength}
          unit="bit"
          icon={Lock}
          color="purple"
        />
      </div>

      {/* Main Grid */}
      <div className="dashboard-grid">
        {/* System Status */}
        <Card className="span-2" level={currentLevel}>
          <CardHeader
            title="System Status"
            subtitle="Core security systems monitoring"
            icon={Cpu}
          />
          <CardBody>
            <div className="status-grid">
              <StatusIndicator
                status="secure"
                label="Quantum Core"
                value="OPERATIONAL"
                icon={Cpu}
              />
              <StatusIndicator
                status="secure"
                label="Network Security"
                value="ACTIVE"
                icon={Network}
              />
              <StatusIndicator
                status="secure"
                label="API Security"
                value="PROTECTED"
                icon={Server}
              />
              <StatusIndicator
                status={features.temporal ? 'secure' : 'warning'}
                label="Temporal Monitor"
                value={features.temporal ? 'ACTIVE' : 'LEVEL 99+'}
                icon={Clock}
              />
              <StatusIndicator
                status={features.strata ? 'secure' : 'warning'}
                label="Strata Security"
                value={features.strata ? 'LAYERED' : 'LEVEL 100+'}
                icon={Database}
              />
              <StatusIndicator
                status={features.noir ? 'secure' : 'warning'}
                label="NOIR Systems"
                value={features.noir ? 'ACTIVE' : 'LEVEL 100+'}
                icon={Eye}
              />
            </div>
          </CardBody>
        </Card>

        {/* Threat Intelligence */}
        <Card level={currentLevel}>
          <CardHeader
            title="Threat Intelligence"
            subtitle="Real-time threat analysis"
            icon={AlertTriangle}
          />
          <CardBody>
            <div className="threat-summary">
              <div className="threat-stat">
                <span className="threat-label">Threats Blocked</span>
                <span className="threat-value text-green">{realtimeData.threatsBlocked}</span>
              </div>
              <div className="threat-stat">
                <span className="threat-label">Active Scans</span>
                <span className="threat-value text-cyan">24/7</span>
              </div>
              <div className="threat-stat">
                <span className="threat-label">Last Incident</span>
                <span className="threat-value text-muted">None</span>
              </div>
            </div>
            <div className="threat-bars">
              <ProgressBar value={12} max={100} label="SQL Injection" color="green" />
              <ProgressBar value={8} max={100} label="XSS Attempts" color="green" />
              <ProgressBar value={3} max={100} label="DDoS Risk" color="green" />
            </div>
          </CardBody>
        </Card>

        {/* Quantum Encryption */}
        <Card level={currentLevel}>
          <CardHeader
            title="Quantum Encryption"
            subtitle="Metatron's Cube encoding"
            icon={Lock}
          />
          <CardBody>
            <div className="encryption-visual">
              <div className="cube-animation">
                <div className="cube-ring ring-1"></div>
                <div className="cube-ring ring-2"></div>
                <div className="cube-ring ring-3"></div>
                <div className="cube-center">
                  <Lock size={24} />
                </div>
              </div>
            </div>
            <div className="encryption-stats">
              <div className="enc-stat">
                <span className="enc-label">Vertices</span>
                <span className="enc-value">13</span>
              </div>
              <div className="enc-stat">
                <span className="enc-label">Golden Ratio</span>
                <span className="enc-value">1.618</span>
              </div>
              <div className="enc-stat">
                <span className="enc-label">Phi Harmonic</span>
                <span className="enc-value">7.8Hz</span>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Real-time Activity */}
        <Card className="span-2" level={currentLevel}>
          <CardHeader
            title="Real-time Activity"
            subtitle="Live system metrics"
            icon={Activity}
          />
          <CardBody>
            <div className="activity-grid">
              <div className="activity-stat">
                <Activity size={32} className="text-cyan" />
                <div className="activity-info">
                  <span className="activity-value">{realtimeData.packetsAnalyzed.toLocaleString()}</span>
                  <span className="activity-label">Packets Analyzed</span>
                </div>
              </div>
              <div className="activity-stat">
                <Shield size={32} className="text-green" />
                <div className="activity-info">
                  <span className="activity-value">{realtimeData.threatsBlocked}</span>
                  <span className="activity-label">Threats Blocked</span>
                </div>
              </div>
              <div className="activity-stat">
                <Server size={32} className="text-purple" />
                <div className="activity-info">
                  <span className="activity-value">{realtimeData.apiRequests.toLocaleString()}</span>
                  <span className="activity-label">API Requests</span>
                </div>
              </div>
              <div className="activity-stat">
                <CheckCircle size={32} className="text-green" />
                <div className="activity-info">
                  <span className="activity-value">100%</span>
                  <span className="activity-label">Uptime</span>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Security Level Info */}
        <Card glow level={currentLevel}>
          <CardHeader
            title={`Level ${currentLevel} Active`}
            subtitle="Current security tier"
            icon={Shield}
          />
          <CardBody>
            <div className="level-features">
              <div className={`feature ${features.quantum ? 'active' : ''}`}>
                <CheckCircle size={16} />
                <span>Quantum Encryption</span>
              </div>
              <div className={`feature ${features.temporal ? 'active' : ''}`}>
                {features.temporal ? <CheckCircle size={16} /> : <Clock size={16} />}
                <span>Temporal Monitoring</span>
              </div>
              <div className={`feature ${features.strata ? 'active' : ''}`}>
                {features.strata ? <CheckCircle size={16} /> : <Database size={16} />}
                <span>Strata Security</span>
              </div>
              <div className={`feature ${features.consciousness ? 'active' : ''}`}>
                {features.consciousness ? <CheckCircle size={16} /> : <Cpu size={16} />}
                <span>Consciousness Integration</span>
              </div>
              <div className={`feature ${features.noir ? 'active' : ''}`}>
                {features.noir ? <CheckCircle size={16} /> : <Eye size={16} />}
                <span>NOIR Systems</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
