import React, { useState, useEffect } from 'react'
import {
  Network,
  Wifi,
  Server,
  Activity,
  Globe,
  Clock,
  Shield,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'
import { Card, CardHeader, CardBody, ProgressBar, StatusIndicator } from '../components/shared/Card'
import './NetworkMonitor.css'

function NetworkMonitor({ currentLevel }) {
  const [networkStats, setNetworkStats] = useState({
    connections: 0,
    trafficMb: 0,
    activePorts: 0,
    bandwidth: 0
  })

  const [temporalStatus, setTemporalStatus] = useState({
    stability: 'STABLE',
    anomalies: 0,
    causality: 'NORMAL'
  })

  const [stealthMode, setStealthMode] = useState({
    enabled: currentLevel >= 99,
    level: currentLevel >= 1000 ? 'DEVELOPER' : currentLevel >= 100 ? 'GOVERNMENT' : currentLevel >= 99 ? 'ADVANCED' : 'BASIC'
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkStats(prev => ({
        connections: Math.max(0, prev.connections + Math.floor(Math.random() * 20) - 10),
        trafficMb: prev.trafficMb + Math.random() * 10,
        activePorts: Math.max(1, prev.activePorts + Math.floor(Math.random() * 5) - 2),
        bandwidth: Math.random() * 100
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const hasTemporalMonitoring = currentLevel >= 99
  const hasStrataSecurityy = currentLevel >= 100

  return (
    <div className="network-monitor-page">
      <div className="page-header">
        <h1>Network Monitor</h1>
        <p className="page-subtitle">Real-time network security and traffic analysis</p>
      </div>

      {/* Network Stats */}
      <div className="network-stats-grid">
        <Card level={currentLevel}>
          <CardBody>
            <div className="stat-large">
              <Network size={32} className="text-cyan" />
              <div className="stat-data">
                <span className="stat-value">{networkStats.connections}</span>
                <span className="stat-label">Active Connections</span>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card level={currentLevel}>
          <CardBody>
            <div className="stat-large">
              <Activity size={32} className="text-green" />
              <div className="stat-data">
                <span className="stat-value">{networkStats.trafficMb.toFixed(1)}</span>
                <span className="stat-label">Traffic (MB)</span>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card level={currentLevel}>
          <CardBody>
            <div className="stat-large">
              <Server size={32} className="text-orange" />
              <div className="stat-data">
                <span className="stat-value">{networkStats.activePorts}</span>
                <span className="stat-label">Active Ports</span>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card level={currentLevel}>
          <CardBody>
            <div className="stat-large">
              <Wifi size={32} className="text-purple" />
              <div className="stat-data">
                <span className="stat-value">{networkStats.bandwidth.toFixed(0)}%</span>
                <span className="stat-label">Bandwidth</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="monitor-grid">
        {/* Network Status */}
        <Card level={currentLevel}>
          <CardHeader
            title="Network Security Status"
            subtitle="Layer protection overview"
            icon={Shield}
          />
          <CardBody>
            <StatusIndicator
              status="secure"
              label="Firewall"
              value="ACTIVE"
              icon={Shield}
            />
            <StatusIndicator
              status="secure"
              label="Intrusion Detection"
              value="MONITORING"
              icon={Activity}
            />
            <StatusIndicator
              status="secure"
              label="Traffic Analysis"
              value="SCANNING"
              icon={Network}
            />
            <StatusIndicator
              status={stealthMode.enabled ? 'secure' : 'warning'}
              label="Stealth Mode"
              value={stealthMode.enabled ? stealthMode.level : 'DISABLED'}
              icon={Globe}
            />
          </CardBody>
        </Card>

        {/* Temporal Monitoring */}
        <Card level={currentLevel} className={!hasTemporalMonitoring ? 'locked-card' : ''}>
          <CardHeader
            title="Temporal Monitoring"
            subtitle={hasTemporalMonitoring ? 'Timeline anomaly detection' : 'Requires Level 99+'}
            icon={Clock}
          />
          <CardBody>
            {hasTemporalMonitoring ? (
              <>
                <StatusIndicator
                  status={temporalStatus.stability === 'STABLE' ? 'secure' : 'warning'}
                  label="Timeline Stability"
                  value={temporalStatus.stability}
                  icon={Clock}
                />
                <StatusIndicator
                  status={temporalStatus.anomalies === 0 ? 'secure' : 'warning'}
                  label="Anomalies Detected"
                  value={temporalStatus.anomalies}
                  icon={AlertTriangle}
                />
                <StatusIndicator
                  status="secure"
                  label="Causality Check"
                  value={temporalStatus.causality}
                  icon={Activity}
                />
                <div className="temporal-visual">
                  <div className="timeline">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="timeline-point" style={{ '--delay': i * 0.1 }} />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="locked-content">
                <AlertTriangle size={32} />
                <p>Temporal monitoring requires Level 99 or higher</p>
              </div>
            )}
          </CardBody>
        </Card>

        {/* Strata Security */}
        <Card level={currentLevel} className={!hasStrataSecurityy ? 'locked-card' : ''}>
          <CardHeader
            title="Strata Security"
            subtitle={hasStrataSecurityy ? 'Multi-layer protection' : 'Requires Level 100+'}
            icon={Server}
          />
          <CardBody>
            {hasStrataSecurityy ? (
              <div className="strata-layers">
                <div className="strata-layer active">
                  <div className="layer-indicator" />
                  <span>Layer 1: Perimeter</span>
                  <CheckCircle size={16} className="text-green" />
                </div>
                <div className="strata-layer active">
                  <div className="layer-indicator" />
                  <span>Layer 2: Network</span>
                  <CheckCircle size={16} className="text-green" />
                </div>
                <div className="strata-layer active">
                  <div className="layer-indicator" />
                  <span>Layer 3: Application</span>
                  <CheckCircle size={16} className="text-green" />
                </div>
                <div className="strata-layer active">
                  <div className="layer-indicator" />
                  <span>Layer 4: Data</span>
                  <CheckCircle size={16} className="text-green" />
                </div>
                <div className={`strata-layer ${currentLevel >= 1000 ? 'active' : ''}`}>
                  <div className="layer-indicator" />
                  <span>Layer 5: Quantum</span>
                  {currentLevel >= 1000 ? (
                    <CheckCircle size={16} className="text-green" />
                  ) : (
                    <span className="text-muted">L1000</span>
                  )}
                </div>
              </div>
            ) : (
              <div className="locked-content">
                <Server size={32} />
                <p>Strata security requires Level 100 or higher</p>
              </div>
            )}
          </CardBody>
        </Card>
      </div>

      {/* Bandwidth Usage */}
      <Card level={currentLevel}>
        <CardHeader
          title="Resource Utilization"
          subtitle="System resource monitoring"
          icon={Activity}
        />
        <CardBody>
          <div className="resource-bars">
            <ProgressBar
              value={networkStats.bandwidth}
              max={100}
              label="Network Bandwidth"
              color="cyan"
            />
            <ProgressBar
              value={65}
              max={100}
              label="CPU Usage"
              color="green"
            />
            <ProgressBar
              value={48}
              max={100}
              label="Memory Usage"
              color="purple"
            />
            <ProgressBar
              value={23}
              max={100}
              label="Disk I/O"
              color="orange"
            />
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default NetworkMonitor
