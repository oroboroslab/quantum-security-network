import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Shield,
  Lock,
  Activity,
  Network,
  Clock,
  Eye,
  AlertTriangle,
  CheckCircle,
  Play,
  RefreshCw,
  Zap
} from 'lucide-react'
import './Demo.css'

function Demo() {
  const [isRunning, setIsRunning] = useState(false)
  const [demoStep, setDemoStep] = useState(0)
  const [metrics, setMetrics] = useState({
    encryptedPackets: 0,
    threatsBlocked: 0,
    quantumEntropy: 0,
    securityScore: 0
  })

  const demoSteps = [
    { title: 'Initializing Quantum Core', desc: 'Loading Metatron\'s Cube encoding...' },
    { title: 'Applying Golden Ratio', desc: 'Scaling vectors with φ = 1.618...' },
    { title: 'Quantum Phase Shift', desc: 'Applying security-level phase encoding...' },
    { title: 'Mapping to Vertices', desc: 'Distributing data across 13 vertices...' },
    { title: 'Consciousness Alignment', desc: 'Optimizing at 46% threshold...' },
    { title: 'Encryption Complete', desc: 'Data secured with QSN protocol!' }
  ]

  const runDemo = () => {
    setIsRunning(true)
    setDemoStep(0)
    setMetrics({ encryptedPackets: 0, threatsBlocked: 0, quantumEntropy: 0, securityScore: 0 })

    let step = 0
    const stepInterval = setInterval(() => {
      step++
      if (step < demoSteps.length) {
        setDemoStep(step)
      } else {
        clearInterval(stepInterval)
      }
    }, 1500)

    const metricsInterval = setInterval(() => {
      setMetrics(prev => ({
        encryptedPackets: Math.min(prev.encryptedPackets + Math.floor(Math.random() * 50), 1000),
        threatsBlocked: Math.min(prev.threatsBlocked + Math.floor(Math.random() * 3), 24),
        quantumEntropy: Math.min(prev.quantumEntropy + Math.random() * 10, 94.7),
        securityScore: Math.min(prev.securityScore + Math.random() * 12, 100)
      }))
    }, 500)

    setTimeout(() => {
      clearInterval(metricsInterval)
      setIsRunning(false)
    }, 9000)
  }

  return (
    <div className="demo-page">
      {/* Hero */}
      <section className="demo-hero">
        <div className="container">
          <h1>
            Live Security
            <span className="text-gradient"> Demo</span>
          </h1>
          <p>
            Experience the power of QSN's quantum encryption in real-time.
            Watch as data is secured using our proprietary Metatron's Cube encoding.
          </p>
        </div>
      </section>

      {/* Demo Section */}
      <section className="section demo-section">
        <div className="container">
          <div className="demo-container">
            {/* Demo Controls */}
            <div className="demo-controls">
              <button
                className={`demo-button ${isRunning ? 'running' : ''}`}
                onClick={runDemo}
                disabled={isRunning}
              >
                {isRunning ? (
                  <>
                    <RefreshCw size={24} className="spin" />
                    Running Demo...
                  </>
                ) : (
                  <>
                    <Play size={24} />
                    Start Demo
                  </>
                )}
              </button>
            </div>

            {/* Demo Visualization */}
            <div className="demo-visual">
              <div className="visual-grid">
                {/* Quantum Core Visual */}
                <div className="visual-card core-visual">
                  <div className="visual-header">
                    <Lock size={20} />
                    <span>Quantum Core</span>
                  </div>
                  <div className="quantum-animation">
                    <div className={`quantum-ring ring-1 ${isRunning ? 'active' : ''}`}>
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="quantum-node" style={{ '--i': i }} />
                      ))}
                    </div>
                    <div className={`quantum-ring ring-2 ${isRunning ? 'active' : ''}`}>
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="quantum-node" style={{ '--i': i }} />
                      ))}
                    </div>
                    <div className="quantum-center">
                      <Zap size={32} className={isRunning ? 'pulse' : ''} />
                    </div>
                  </div>
                </div>

                {/* Process Steps */}
                <div className="visual-card steps-visual">
                  <div className="visual-header">
                    <Activity size={20} />
                    <span>Encoding Process</span>
                  </div>
                  <div className="demo-steps">
                    {demoSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className={`demo-step ${demoStep >= idx ? 'active' : ''} ${demoStep === idx && isRunning ? 'current' : ''}`}
                      >
                        <div className="step-indicator">
                          {demoStep > idx ? (
                            <CheckCircle size={16} />
                          ) : (
                            <span>{idx + 1}</span>
                          )}
                        </div>
                        <div className="step-content">
                          <span className="step-title">{step.title}</span>
                          <span className="step-desc">{step.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="demo-metrics">
                <div className="metric-card">
                  <Shield size={24} />
                  <div className="metric-value">{metrics.encryptedPackets.toLocaleString()}</div>
                  <div className="metric-label">Packets Encrypted</div>
                </div>
                <div className="metric-card">
                  <AlertTriangle size={24} />
                  <div className="metric-value">{metrics.threatsBlocked}</div>
                  <div className="metric-label">Threats Blocked</div>
                </div>
                <div className="metric-card">
                  <Activity size={24} />
                  <div className="metric-value">{metrics.quantumEntropy.toFixed(1)}%</div>
                  <div className="metric-label">Quantum Entropy</div>
                </div>
                <div className="metric-card">
                  <CheckCircle size={24} />
                  <div className="metric-value">{metrics.securityScore.toFixed(0)}%</div>
                  <div className="metric-label">Security Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Demo */}
      <section className="section features-demo">
        <div className="container">
          <div className="section-header">
            <h2>See It <span className="text-gradient">In Action</span></h2>
            <p>Explore the key components of QSN security</p>
          </div>

          <div className="features-demo-grid">
            <div className="feature-demo-card card">
              <div className="feature-demo-icon">
                <Lock size={32} />
              </div>
              <h3>Metatron's Cube Encryption</h3>
              <p>Watch data transform through our 13-vertex geometric encoding pattern</p>
              <div className="feature-demo-visual">
                <div className="encryption-bars">
                  {[...Array(13)].map((_, i) => (
                    <div
                      key={i}
                      className="enc-bar"
                      style={{
                        '--delay': i * 0.1,
                        '--height': 30 + Math.random() * 70
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="feature-demo-card card">
              <div className="feature-demo-icon">
                <Network size={32} />
              </div>
              <h3>Network Protection</h3>
              <p>Real-time monitoring of all network traffic with quantum analysis</p>
              <div className="feature-demo-visual">
                <div className="network-nodes">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="network-node" style={{ '--i': i }}>
                      <div className="node-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="feature-demo-card card">
              <div className="feature-demo-icon">
                <Eye size={32} />
              </div>
              <h3>Threat Detection</h3>
              <p>AI-powered threat analysis identifies and neutralizes attacks</p>
              <div className="feature-demo-visual">
                <div className="scan-visual">
                  <div className="scan-line" />
                  <div className="threat-markers">
                    <div className="threat-marker blocked" />
                    <div className="threat-marker blocked" />
                    <div className="threat-marker blocked" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section demo-cta">
        <div className="container">
          <div className="cta-content card">
            <h2>Ready to Secure Your Systems?</h2>
            <p>Start your free trial today and experience enterprise-grade quantum security</p>
            <div className="cta-buttons">
              <Link to="/pricing" className="btn btn-primary">
                View Pricing
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Demo
