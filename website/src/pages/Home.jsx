import React from 'react'
import { Link } from 'react-router-dom'
import {
  Shield,
  Lock,
  Zap,
  Eye,
  Network,
  Clock,
  Server,
  CheckCircle,
  ArrowRight,
  Hexagon
} from 'lucide-react'
import './Home.css'

// Metatron's Cube SVG Component
function MetatronsCube() {
  const size = 400
  const center = size / 2
  const outerRadius = 160
  const innerRadius = 80

  // 6 outer vertices (hexagon)
  const outerVertices = []
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60 - 90) * (Math.PI / 180)
    outerVertices.push({
      x: center + outerRadius * Math.cos(angle),
      y: center + outerRadius * Math.sin(angle)
    })
  }

  // 6 inner vertices (inner hexagon)
  const innerVertices = []
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60 - 60) * (Math.PI / 180)
    innerVertices.push({
      x: center + innerRadius * Math.cos(angle),
      y: center + innerRadius * Math.sin(angle)
    })
  }

  // Center vertex
  const centerVertex = { x: center, y: center }

  // All 13 vertices
  const allVertices = [...outerVertices, ...innerVertices, centerVertex]

  // Generate all connecting lines
  const lines = []
  for (let i = 0; i < allVertices.length; i++) {
    for (let j = i + 1; j < allVertices.length; j++) {
      lines.push({ from: allVertices[i], to: allVertices[j] })
    }
  }

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="metatrons-cube"
      style={{ width: '100%', height: '100%', maxWidth: '500px' }}
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#00ff88" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00ff88" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <circle cx={center} cy={center} r={outerRadius + 40} fill="url(#centerGlow)" />

      {/* All connecting lines */}
      {lines.map((line, idx) => (
        <line
          key={idx}
          x1={line.from.x}
          y1={line.from.y}
          x2={line.to.x}
          y2={line.to.y}
          stroke="url(#lineGradient)"
          strokeWidth="1"
          opacity="0.4"
          filter="url(#glow)"
        />
      ))}

      {/* Outer hexagon */}
      <polygon
        points={outerVertices.map(v => `${v.x},${v.y}`).join(' ')}
        fill="none"
        stroke="#00d4ff"
        strokeWidth="2"
        filter="url(#glow)"
      />

      {/* Inner hexagon */}
      <polygon
        points={innerVertices.map(v => `${v.x},${v.y}`).join(' ')}
        fill="none"
        stroke="#00ff88"
        strokeWidth="2"
        filter="url(#glow)"
      />

      {/* Vertex circles - outer */}
      {outerVertices.map((v, idx) => (
        <g key={`outer-${idx}`}>
          <circle cx={v.x} cy={v.y} r="12" fill="#0a1628" stroke="#00d4ff" strokeWidth="2" filter="url(#glow)" />
          <circle cx={v.x} cy={v.y} r="5" fill="#00d4ff" />
        </g>
      ))}

      {/* Vertex circles - inner */}
      {innerVertices.map((v, idx) => (
        <g key={`inner-${idx}`}>
          <circle cx={v.x} cy={v.y} r="10" fill="#0a1628" stroke="#00ff88" strokeWidth="2" filter="url(#glow)" />
          <circle cx={v.x} cy={v.y} r="4" fill="#00ff88" />
        </g>
      ))}

      {/* Center vertex */}
      <circle cx={center} cy={center} r="18" fill="#0a1628" stroke="#9370db" strokeWidth="3" filter="url(#glow)" />
      <circle cx={center} cy={center} r="8" fill="#9370db" />

      {/* Animated pulse rings */}
      <circle cx={center} cy={center} r={outerRadius} fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.3" className="pulse-ring" />
      <circle cx={center} cy={center} r={outerRadius + 30} fill="none" stroke="#00ff88" strokeWidth="1" opacity="0.2" className="pulse-ring-delayed" />
    </svg>
  )
}

const features = [
  {
    icon: Lock,
    title: "Quantum Encryption",
    description: "Metatron's Cube 13-vertex geometric pattern encoding with golden ratio scaling"
  },
  {
    icon: Shield,
    title: "AI Threat Detection",
    description: "Advanced machine learning powered threat prediction and real-time protection"
  },
  {
    icon: Clock,
    title: "Temporal Monitoring",
    description: "Timeline anomaly detection and causality verification systems"
  },
  {
    icon: Server,
    title: "Strata Security",
    description: "Multi-layer protection with perimeter, network, application, and data security"
  },
  {
    icon: Eye,
    title: "NOIR Systems",
    description: "Level 100 advanced security operations - No Mirrors, No Reflections"
  },
  {
    icon: Network,
    title: "Quantum Stealth",
    description: "Traffic obfuscation, identity masking, and covert channel protection"
  }
]

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "13", label: "Quantum Vertices" },
  { value: "256-512", label: "Bit Encryption" },
  { value: "24/7", label: "Monitoring" }
]

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-glow" />
          <div className="hero-grid" />
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Hexagon size={16} />
              <span>Quantum AI Security Net</span>
            </div>
            <h1>
              <span className="text-gradient">Quantum Security</span>
              <br />
              Network Protocol
            </h1>
            <p className="hero-subtitle">
              Next-generation cybersecurity powered by quantum encryption,
              AI threat detection, and Metatron's Cube geometric encoding.
            </p>
            <div className="hero-actions">
              <Link to="/demo" className="btn btn-primary">
                Try Live Demo
                <ArrowRight size={18} />
              </Link>
              <Link to="/features" className="btn btn-secondary">
                Explore Features
              </Link>
            </div>
            <div className="hero-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-graphic">
            <MetatronsCube />
            <div className="graphic-label">Metatron's Cube Encryption</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <h2>Advanced Security <span className="text-gradient">Features</span></h2>
            <p>
              Enterprise-grade quantum security with multi-dimensional protection
              layers and AI-powered threat intelligence.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card card">
                <div className="feature-icon">
                  <feature.icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How <span className="text-gradient">QSN Works</span></h2>
            <p>
              Our quantum encryption process uses sacred geometry patterns
              to create unbreakable security.
            </p>
          </div>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Quantum Vector Conversion</h4>
              <p>Data is converted to quantum state vectors with unique amplitude and phase values</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Golden Ratio Scaling</h4>
              <p>Vectors are scaled using the golden ratio (φ = 1.618) for harmonic alignment</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Metatron's Cube Mapping</h4>
              <p>Data is mapped to our 13-vertex sacred geometry encryption pattern</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Consciousness Alignment</h4>
              <p>Final encoding with 46% optimal consciousness threshold for security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Levels */}
      <section className="section levels-section">
        <div className="container">
          <div className="section-header">
            <h2>Security <span className="text-gradient">Tiers</span></h2>
            <p>Choose the protection level that fits your organization's needs.</p>
          </div>
          <div className="levels-grid">
            <div className="level-card">
              <div className="level-header level-65">
                <span className="level-badge">Level 65</span>
                <h3>Free/Public</h3>
              </div>
              <ul>
                <li><CheckCircle size={16} /> Basic quantum encryption</li>
                <li><CheckCircle size={16} /> Standard monitoring</li>
                <li><CheckCircle size={16} /> 60 API requests/min</li>
                <li><CheckCircle size={16} /> Community support</li>
              </ul>
              <Link to="/pricing" className="btn btn-secondary">Get Started Free</Link>
            </div>
            <div className="level-card featured">
              <div className="level-header level-99">
                <span className="level-badge">Level 99</span>
                <h3>Business</h3>
                <span className="popular-tag">Most Popular</span>
              </div>
              <ul>
                <li><CheckCircle size={16} /> Advanced quantum encryption</li>
                <li><CheckCircle size={16} /> Temporal monitoring</li>
                <li><CheckCircle size={16} /> 600 API requests/min</li>
                <li><CheckCircle size={16} /> Priority support</li>
              </ul>
              <Link to="/pricing" className="btn btn-primary">Start Trial</Link>
            </div>
            <div className="level-card">
              <div className="level-header level-100">
                <span className="level-badge">Level 100</span>
                <h3>Government</h3>
              </div>
              <ul>
                <li><CheckCircle size={16} /> Military-grade encryption</li>
                <li><CheckCircle size={16} /> Strata security layers</li>
                <li><CheckCircle size={16} /> NOIR systems access</li>
                <li><CheckCircle size={16} /> Dedicated support</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Secure Your <span className="text-gradient">Future</span>?</h2>
            <p>
              Join organizations worldwide using QSN's quantum security
              to protect their most valuable assets.
            </p>
            <div className="cta-actions">
              <Link to="/demo" className="btn btn-primary">
                Start Free Demo
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
