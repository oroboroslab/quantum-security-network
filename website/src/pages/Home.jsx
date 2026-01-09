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
        <div className="container hero-content">
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
