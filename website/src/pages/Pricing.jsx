import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Shield,
  Zap,
  Star,
  Crown,
  CheckCircle,
  ArrowRight,
  CreditCard
} from 'lucide-react'
import './Pricing.css'

const plans = [
  {
    id: 'free',
    level: 65,
    name: 'Free/Public',
    icon: Shield,
    price: 0,
    period: 'forever',
    color: '#00ff88',
    description: 'Perfect for individuals and small projects',
    features: [
      'Basic quantum encryption (256-bit)',
      'Standard monitoring',
      '60 API requests/min',
      'Community support',
      'Basic threat detection',
      'Single deployment'
    ],
    cta: 'Get Started Free',
    popular: false
  },
  {
    id: 'business',
    level: 99,
    name: 'Business',
    icon: Zap,
    price: 299,
    period: 'month',
    color: '#00d4ff',
    description: 'For growing businesses needing advanced security',
    features: [
      'Advanced quantum encryption (320-bit)',
      'Temporal monitoring',
      '600 API requests/min',
      'Priority support',
      'Advanced threat intelligence',
      'Traffic analysis',
      'Multiple deployments',
      '99.9% uptime SLA'
    ],
    cta: 'Start 14-Day Trial',
    popular: true
  },
  {
    id: 'government',
    level: 100,
    name: 'Government',
    icon: Star,
    price: null,
    period: 'custom',
    color: '#ffa500',
    description: 'Military-grade security for government organizations',
    features: [
      'Military-grade encryption (384-bit)',
      'Full temporal monitoring',
      'Strata security layers',
      'NOIR systems access',
      '6,000 API requests/min',
      'Quantum duel coding',
      'Dedicated support',
      '24/7 monitoring',
      'Custom deployment'
    ],
    cta: 'Contact Sales',
    popular: false
  },
  {
    id: 'developer',
    level: 1000,
    name: 'Developer',
    icon: Crown,
    price: null,
    period: 'enterprise',
    color: '#9370db',
    description: 'Full quantum capabilities for enterprise needs',
    features: [
      'Developer-grade encryption (512-bit)',
      'Multi-dimensional monitoring',
      'Advanced strata security',
      'Full NOIR integration',
      '60,000 API requests/min',
      'Consciousness integration',
      'No mirrors architecture',
      'Developer-grade support',
      'Custom infrastructure'
    ],
    cta: 'Contact Sales',
    popular: false
  }
]

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [showPayment, setShowPayment] = useState(false)

  const handleSelectPlan = (plan) => {
    if (plan.price === null) {
      // Redirect to contact for custom pricing
      window.location.href = '/contact'
    } else if (plan.price === 0) {
      // Free plan - direct to demo
      window.location.href = '/demo'
    } else {
      setSelectedPlan(plan)
      setShowPayment(true)
    }
  }

  return (
    <div className="pricing-page">
      {/* Hero */}
      <section className="pricing-hero">
        <div className="container">
          <h1>
            Simple, Transparent
            <span className="text-gradient"> Pricing</span>
          </h1>
          <p>
            Choose the security level that fits your needs.
            Start free and scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                style={{ '--plan-color': plan.color }}
              >
                {plan.popular && <div className="popular-badge">Most Popular</div>}

                <div className="plan-header">
                  <plan.icon size={32} className="plan-icon" />
                  <span className="plan-level">Level {plan.level}</span>
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-desc">{plan.description}</p>
                </div>

                <div className="plan-price">
                  {plan.price === null ? (
                    <span className="price-custom">Custom Pricing</span>
                  ) : plan.price === 0 ? (
                    <span className="price-free">Free</span>
                  ) : (
                    <>
                      <span className="price-currency">$</span>
                      <span className="price-amount">{plan.price}</span>
                      <span className="price-period">/{plan.period}</span>
                    </>
                  )}
                </div>

                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`plan-cta ${plan.popular ? 'primary' : 'secondary'}`}
                  onClick={() => handleSelectPlan(plan)}
                >
                  {plan.cta}
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPayment && selectedPlan && (
        <div className="payment-modal-overlay" onClick={() => setShowPayment(false)}>
          <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPayment(false)}>
              &times;
            </button>

            <div className="payment-header">
              <h3>Complete Your Purchase</h3>
              <p>You're subscribing to {selectedPlan.name} - Level {selectedPlan.level}</p>
            </div>

            <div className="payment-summary">
              <div className="summary-row">
                <span>Plan</span>
                <span>{selectedPlan.name}</span>
              </div>
              <div className="summary-row">
                <span>Price</span>
                <span>${selectedPlan.price}/month</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${selectedPlan.price}/month</span>
              </div>
            </div>

            <div className="payment-options">
              <h4>Select Payment Method</h4>

              {/* PayPal Button */}
              <div className="paypal-container">
                <a
                  href={`https://www.paypal.com/paypalme/qsnsecurity/${selectedPlan.price}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paypal-button"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.1A.859.859 0 0 1 5.79 1.4h7.025c2.34 0 4.053.595 5.099 1.77.897 1.006 1.233 2.305 1.001 3.864-.373 2.492-1.727 4.348-4.027 5.52-1.073.548-2.29.82-3.625.82H8.976a.857.857 0 0 0-.845.714l-.963 6.113a.641.641 0 0 1-.633.54l-.46-.004zm6.688-12.49c-.266.002-.53.008-.793.02-.513 1.48-1.267 2.533-2.263 3.157-.996.624-2.265.937-3.808.937H5.83l-.75 4.76h2.003c.143 0 .267-.104.29-.245l.023-.122.44-2.79.028-.154c.023-.141.147-.245.29-.245h.182c1.18 0 2.104-.24 2.774-.718.67-.478 1.13-1.156 1.38-2.033.177-.618.244-1.176.2-1.673-.029-.322-.1-.602-.213-.848-.058-.127-.13-.247-.213-.358a1.87 1.87 0 0 0-.5-.388z"/>
                  </svg>
                  Pay with PayPal
                </a>
                <p className="paypal-note">
                  You'll be redirected to PayPal to complete payment.
                  After payment, send your transaction ID to activate your account.
                </p>
              </div>

              {/* Alternative Contact */}
              <div className="payment-alt">
                <p>Or contact us for other payment options:</p>
                <Link to="/contact" className="btn btn-secondary">
                  <CreditCard size={18} />
                  Contact for Payment Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked <span className="text-gradient">Questions</span></h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item card">
              <h4>Can I upgrade my plan later?</h4>
              <p>Yes, you can upgrade at any time. Your new features will be available immediately, and billing will be prorated.</p>
            </div>
            <div className="faq-item card">
              <h4>What payment methods do you accept?</h4>
              <p>We currently accept PayPal for easy and secure payments. Contact us for alternative payment options.</p>
            </div>
            <div className="faq-item card">
              <h4>Is there a free trial?</h4>
              <p>Yes! The Business plan includes a 14-day free trial. No credit card required to start.</p>
            </div>
            <div className="faq-item card">
              <h4>What's included in custom pricing?</h4>
              <p>Government and Developer tiers include dedicated infrastructure, custom deployment, and specialized support tailored to your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
