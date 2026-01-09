import React from 'react'
import {
  Shield,
  Lock,
  Clock,
  Database,
  Eye,
  Zap,
  CheckCircle,
  Star,
  Crown
} from 'lucide-react'
import { Card, CardHeader, CardBody } from '../components/shared/Card'
import './SecurityLevels.css'

const securityTiers = [
  {
    level: 65,
    name: 'Free/Public',
    color: 'var(--level-65)',
    icon: Shield,
    price: 'Free',
    features: [
      'Basic quantum encryption',
      'Standard monitoring',
      'Community support',
      '60 API requests/min',
      'Basic threat detection'
    ],
    limitations: ['No temporal monitoring', 'No strata security', 'No NOIR systems']
  },
  {
    level: 99,
    name: 'Business',
    color: 'var(--level-99)',
    icon: Zap,
    price: '$299/mo',
    features: [
      'Advanced quantum encryption',
      'Temporal monitoring',
      'Priority support',
      '600 API requests/min',
      'Advanced threat intelligence',
      'Traffic analysis'
    ],
    limitations: ['No strata security', 'No NOIR systems']
  },
  {
    level: 100,
    name: 'Government',
    color: 'var(--level-100)',
    icon: Star,
    price: 'Custom',
    features: [
      'Military-grade encryption',
      'Full temporal monitoring',
      'Strata security layers',
      'NOIR Systems access',
      '6,000 API requests/min',
      'Quantum duel coding',
      'Dedicated support',
      '24/7 monitoring'
    ],
    limitations: ['Contact for deployment']
  },
  {
    level: 1000,
    name: 'Developer',
    color: 'var(--level-1000)',
    icon: Crown,
    price: 'Enterprise',
    features: [
      'Full quantum capabilities',
      'Multi-dimensional monitoring',
      'Advanced strata security',
      'Full NOIR integration',
      '60,000 API requests/min',
      'Consciousness integration',
      'No mirrors architecture',
      'Developer-grade support',
      'Custom deployment'
    ],
    limitations: []
  }
]

function SecurityLevels({ currentLevel, onLevelChange }) {
  return (
    <div className="security-levels-page">
      <div className="page-header">
        <h1>Security Levels</h1>
        <p className="page-subtitle">Choose your quantum security tier</p>
      </div>

      <div className="tiers-grid">
        {securityTiers.map(tier => (
          <Card
            key={tier.level}
            className={`tier-card ${currentLevel === tier.level ? 'active' : ''}`}
            level={tier.level}
          >
            <div className="tier-header" style={{ borderColor: tier.color }}>
              <tier.icon size={32} style={{ color: tier.color }} />
              <div className="tier-badge" style={{ background: tier.color }}>
                Level {tier.level}
              </div>
            </div>

            <CardBody>
              <h3 className="tier-name">{tier.name}</h3>
              <div className="tier-price">{tier.price}</div>

              <div className="tier-features">
                <h4>Features</h4>
                <ul>
                  {tier.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} className="text-green" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {tier.limitations.length > 0 && (
                <div className="tier-limitations">
                  {tier.limitations.map((limit, idx) => (
                    <span key={idx} className="limitation-tag">{limit}</span>
                  ))}
                </div>
              )}

              <button
                className={`tier-button ${currentLevel === tier.level ? 'active' : ''}`}
                onClick={() => onLevelChange(tier.level)}
                style={{
                  '--btn-color': tier.color
                }}
              >
                {currentLevel === tier.level ? 'Current Tier' : 'Select Tier'}
              </button>
            </CardBody>
          </Card>
        ))}
      </div>

      <Card className="comparison-card">
        <CardHeader
          title="Tier Comparison"
          subtitle="Feature availability by security level"
          icon={Shield}
        />
        <CardBody>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Level 65</th>
                <th>Level 99</th>
                <th>Level 100</th>
                <th>Level 1000</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Lock size={14} /> Quantum Encryption</td>
                <td><CheckCircle className="text-green" size={16} /></td>
                <td><CheckCircle className="text-green" size={16} /></td>
                <td><CheckCircle className="text-green" size={16} /></td>
                <td><CheckCircle className="text-green" size={16} /></td>
              </tr>
              <tr>
                <td><Clock size={14} /> Temporal Monitoring</td>
                <td className="text-muted">-</td>
                <td><CheckCircle className="text-green" size={16} /></td>
                <td><CheckCircle className="text-green" size={16} /></td>
                <td><CheckCircle className="text-green" size={16} /></td>
              </tr>
              <tr>
                <td><Database size={14} /> Strata Security</td>
                <td className="text-muted">-</td>
                <td className="text-muted">-</td>
                <td><CheckCircle className="text-green" size={16} /></td>
                <td><CheckCircle className="text-green" size={16} /></td>
              </tr>
              <tr>
                <td><Eye size={14} /> NOIR Systems</td>
                <td className="text-muted">-</td>
                <td className="text-muted">-</td>
                <td><CheckCircle className="text-green" size={16} /></td>
                <td><CheckCircle className="text-green" size={16} /></td>
              </tr>
              <tr>
                <td><Zap size={14} /> Consciousness Integration</td>
                <td className="text-muted">-</td>
                <td className="text-muted">-</td>
                <td className="text-muted">-</td>
                <td><CheckCircle className="text-green" size={16} /></td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  )
}

export default SecurityLevels
