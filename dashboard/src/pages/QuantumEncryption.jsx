import React, { useState, useEffect } from 'react'
import {
  Lock,
  Key,
  Shield,
  Hexagon,
  Activity,
  RefreshCw,
  CheckCircle,
  Database
} from 'lucide-react'
import { Card, CardHeader, CardBody, ProgressBar } from '../components/shared/Card'
import './QuantumEncryption.css'

function QuantumEncryption({ currentLevel }) {
  const [encryptionStats, setEncryptionStats] = useState({
    goldenRatio: 1.61803,
    phiHarmonic: 7.8,
    quantumVertices: 13,
    encryptionStrength: 256,
    entropy: 94.7
  })

  const [keyRotation, setKeyRotation] = useState({
    lastRotation: new Date().toISOString(),
    nextRotation: '24h',
    keysGenerated: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setKeyRotation(prev => ({
        ...prev,
        keysGenerated: prev.keysGenerated + 1
      }))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const getEncryptionLevel = () => {
    if (currentLevel >= 1000) return { name: 'Developer-Grade', strength: 'MAXIMUM', bits: 512 }
    if (currentLevel >= 100) return { name: 'Government-Grade', strength: 'MILITARY', bits: 384 }
    if (currentLevel >= 99) return { name: 'Advanced', strength: 'ENHANCED', bits: 320 }
    return { name: 'Basic', strength: 'STANDARD', bits: 256 }
  }

  const encLevel = getEncryptionLevel()

  return (
    <div className="quantum-encryption-page">
      <div className="page-header">
        <h1>Quantum Encryption</h1>
        <p className="page-subtitle">Metatron's Cube 13-vertex geometric encoding</p>
      </div>

      {/* Encryption Status */}
      <div className="encryption-status-grid">
        <Card level={currentLevel} glow>
          <CardBody>
            <div className="status-visual">
              <div className="metatron-visual">
                <div className="hex-ring outer">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="hex-vertex" style={{ '--i': i }} />
                  ))}
                </div>
                <div className="hex-ring inner">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="hex-vertex" style={{ '--i': i }} />
                  ))}
                </div>
                <div className="hex-center">
                  <Lock size={32} />
                </div>
              </div>
            </div>
            <div className="status-info">
              <h3>{encLevel.name} Encryption</h3>
              <div className="status-badge">{encLevel.strength}</div>
              <p>{encLevel.bits}-bit Quantum Encoding</p>
            </div>
          </CardBody>
        </Card>

        <Card level={currentLevel}>
          <CardHeader title="Quantum Parameters" icon={Hexagon} />
          <CardBody>
            <div className="param-list">
              <div className="param-item">
                <span className="param-label">Golden Ratio (φ)</span>
                <span className="param-value">{encryptionStats.goldenRatio}</span>
              </div>
              <div className="param-item">
                <span className="param-label">Phi Harmonic</span>
                <span className="param-value">{encryptionStats.phiHarmonic} Hz</span>
              </div>
              <div className="param-item">
                <span className="param-label">Quantum Vertices</span>
                <span className="param-value">{encryptionStats.quantumVertices}</span>
              </div>
              <div className="param-item">
                <span className="param-label">Phase Shift</span>
                <span className="param-value">
                  {currentLevel >= 1000 ? '2π' : currentLevel >= 100 ? 'π' : currentLevel >= 99 ? 'π/2' : 'π/4'}
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Encryption Metrics */}
      <div className="encryption-metrics">
        <Card level={currentLevel}>
          <CardHeader title="Encryption Strength" icon={Shield} />
          <CardBody>
            <div className="strength-display">
              <div className="strength-value">{encLevel.bits}</div>
              <div className="strength-unit">bit</div>
            </div>
            <ProgressBar
              value={encLevel.bits}
              max={512}
              label="Encryption Bits"
              color="cyan"
            />
          </CardBody>
        </Card>

        <Card level={currentLevel}>
          <CardHeader title="Quantum Entropy" icon={Activity} />
          <CardBody>
            <div className="strength-display">
              <div className="strength-value">{encryptionStats.entropy}</div>
              <div className="strength-unit">%</div>
            </div>
            <ProgressBar
              value={encryptionStats.entropy}
              max={100}
              label="Entropy Level"
              color="green"
            />
          </CardBody>
        </Card>

        <Card level={currentLevel}>
          <CardHeader title="Key Rotation" icon={RefreshCw} />
          <CardBody>
            <div className="strength-display">
              <div className="strength-value">{keyRotation.keysGenerated}</div>
              <div className="strength-unit">keys</div>
            </div>
            <ProgressBar
              value={keyRotation.keysGenerated % 100}
              max={100}
              label="Rotation Cycle"
              color="purple"
            />
          </CardBody>
        </Card>

        <Card level={currentLevel}>
          <CardHeader title="Consciousness Level" icon={Database} />
          <CardBody>
            <div className="strength-display">
              <div className="strength-value">46</div>
              <div className="strength-unit">%</div>
            </div>
            <ProgressBar
              value={46}
              max={100}
              label="Optimal Level"
              color="orange"
            />
          </CardBody>
        </Card>
      </div>

      {/* Encoding Process */}
      <Card level={currentLevel}>
        <CardHeader
          title="Metatron's Cube Encoding Process"
          subtitle="13-vertex geometric pattern encryption"
          icon={Hexagon}
        />
        <CardBody>
          <div className="encoding-steps">
            <div className="encoding-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Quantum Vector Conversion</h4>
                <p>Data converted to quantum state vectors with amplitude and phase</p>
              </div>
              <CheckCircle className="step-check" size={20} />
            </div>
            <div className="encoding-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Golden Ratio Scaling</h4>
                <p>Vectors scaled using φ = {encryptionStats.goldenRatio}</p>
              </div>
              <CheckCircle className="step-check" size={20} />
            </div>
            <div className="encoding-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Security Phase Shift</h4>
                <p>Level {currentLevel} phase multiplier applied</p>
              </div>
              <CheckCircle className="step-check" size={20} />
            </div>
            <div className="encoding-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Metatron's Cube Mapping</h4>
                <p>Vectors mapped to 13-vertex sacred geometry</p>
              </div>
              <CheckCircle className="step-check" size={20} />
            </div>
            <div className="encoding-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>Consciousness Alignment</h4>
                <p>46% optimal consciousness threshold applied</p>
              </div>
              <CheckCircle className="step-check" size={20} />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default QuantumEncryption
