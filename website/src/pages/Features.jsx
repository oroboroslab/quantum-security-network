import React from 'react'
import {
  Shield,
  Lock,
  Zap,
  Eye,
  Network,
  Clock,
  Server,
  Database,
  Activity,
  AlertTriangle,
  CheckCircle,
  Cpu
} from 'lucide-react'
import './Features.css'

const mainFeatures = [
  {
    icon: Lock,
    title: "Metatron's Cube Quantum Encryption",
    description: "Our proprietary encryption uses a 13-vertex geometric pattern based on sacred geometry. Data is converted to quantum state vectors, scaled using the golden ratio (φ = 1.618), and mapped to Metatron's Cube for unbreakable security.",
    specs: [
      "13 quantum vertices",
      "Golden ratio scaling",
      "7.8Hz phi harmonic frequency",
      "256-512 bit encryption"
    ]
  },
  {
    icon: Shield,
    title: "AI-Powered Threat Detection",
    description: "Advanced machine learning algorithms continuously analyze network traffic, API requests, and system behavior to detect and neutralize threats before they can cause harm.",
    specs: [
      "Zero-day detection",
      "Behavioral analysis",
      "Pattern recognition",
      "Autonomous response"
    ]
  },
  {
    icon: Clock,
    title: "Temporal Monitoring System",
    description: "Our revolutionary temporal monitoring detects timeline anomalies and causality violations, providing an additional dimension of security not available in traditional systems.",
    specs: [
      "Timeline stability tracking",
      "Causality verification",
      "Anomaly detection",
      "Predictive analysis"
    ]
  },
  {
    icon: Server,
    title: "Strata Security Layers",
    description: "Multi-layer protection architecture with five distinct security strata: Perimeter, Network, Application, Data, and Quantum - each providing independent protection.",
    specs: [
      "5 security layers",
      "Independent protection",
      "Quantum layer (Level 1000)",
      "Zero-trust architecture"
    ]
  },
  {
    icon: Eye,
    title: "NOIR Security Operations",
    description: "Level 100+ advanced security operations with No Mirrors, No Reflections architecture. Includes Sentinel, Phantom, Oracle, and Guardian subsystems.",
    specs: [
      "NOIR Sentinel - Threat detection",
      "NOIR Phantom - Stealth ops",
      "NOIR Oracle - Prediction",
      "NOIR Guardian - Perimeter"
    ]
  },
  {
    icon: Network,
    title: "Quantum Stealth Protocols",
    description: "Advanced traffic obfuscation and identity masking capabilities that make your network traffic virtually undetectable and untraceable.",
    specs: [
      "Traffic obfuscation",
      "Identity masking",
      "Covert channels",
      "Trace elimination"
    ]
  }
]

const additionalFeatures = [
  { icon: Cpu, title: "Consciousness Integration", desc: "46% optimal consciousness threshold alignment" },
  { icon: Database, title: "Quantum Duel Coding", desc: "Dual-path encryption for maximum security" },
  { icon: Activity, title: "Real-time Monitoring", desc: "24/7 continuous system surveillance" },
  { icon: AlertTriangle, title: "Threat Intelligence", desc: "Global threat database integration" },
  { icon: Zap, title: "API Security", desc: "Rate limiting and quantum authentication" },
  { icon: CheckCircle, title: "Compliance Ready", desc: "Meets government security standards" }
]

function Features() {
  return (
    <div className="features-page">
      {/* Hero */}
      <section className="features-hero">
        <div className="container">
          <h1>
            Advanced Security
            <span className="text-gradient"> Features</span>
          </h1>
          <p>
            Discover the comprehensive security capabilities of QSN's
            quantum-powered protection system.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="section main-features">
        <div className="container">
          {mainFeatures.map((feature, idx) => (
            <div key={idx} className={`feature-row ${idx % 2 === 1 ? 'reverse' : ''}`}>
              <div className="feature-content">
                <div className="feature-icon-large">
                  <feature.icon size={32} />
                </div>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
                <ul className="feature-specs">
                  {feature.specs.map((spec, i) => (
                    <li key={i}>
                      <CheckCircle size={16} />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feature-visual">
                <div className="visual-card">
                  <feature.icon size={80} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features */}
      <section className="section additional-features">
        <div className="container">
          <div className="section-header">
            <h2>And <span className="text-gradient">More</span></h2>
            <p>Additional capabilities included in every QSN deployment</p>
          </div>
          <div className="additional-grid">
            {additionalFeatures.map((feature, idx) => (
              <div key={idx} className="additional-card card">
                <feature.icon size={24} className="text-cyan" />
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="section tech-specs">
        <div className="container">
          <div className="section-header">
            <h2>Technical <span className="text-gradient">Specifications</span></h2>
          </div>
          <div className="specs-table card">
            <table>
              <thead>
                <tr>
                  <th>Specification</th>
                  <th>Level 65</th>
                  <th>Level 99</th>
                  <th>Level 100</th>
                  <th>Level 1000</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Encryption Strength</td>
                  <td>256-bit</td>
                  <td>320-bit</td>
                  <td>384-bit</td>
                  <td>512-bit</td>
                </tr>
                <tr>
                  <td>API Requests/min</td>
                  <td>60</td>
                  <td>600</td>
                  <td>6,000</td>
                  <td>60,000</td>
                </tr>
                <tr>
                  <td>Phase Shift</td>
                  <td>π/4</td>
                  <td>π/2</td>
                  <td>π</td>
                  <td>2π</td>
                </tr>
                <tr>
                  <td>Quantum Entropy</td>
                  <td>Low</td>
                  <td>Medium</td>
                  <td>High</td>
                  <td>Maximum</td>
                </tr>
                <tr>
                  <td>Temporal Monitoring</td>
                  <td>-</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Strata Security</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>NOIR Systems</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Consciousness Integration</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Full</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
