import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Building,
  User,
  CheckCircle
} from 'lucide-react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    plan: 'business'
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>
            Get In
            <span className="text-gradient"> Touch</span>
          </h1>
          <p>
            Have questions about QSN? Our team is here to help you
            find the right security solution for your needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Let's Talk Security</h2>
              <p>
                Whether you need enterprise deployment, have technical questions,
                or want to discuss custom solutions, we're here to help.
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email Us</h4>
                    <p>sales@qsn-security.com</p>
                    <p>support@qsn-security.com</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+1 (888) QSN-SAFE</p>
                    <p>Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4>Live Chat</h4>
                    <p>Available 24/7</p>
                    <p>Typical response: 5 mins</p>
                  </div>
                </div>
              </div>

              <div className="enterprise-cta">
                <h3>Enterprise Solutions</h3>
                <p>
                  For Government and Developer tier inquiries, our enterprise
                  team will work with you to design a custom security solution.
                </p>
                <div className="enterprise-features">
                  <div className="ef-item">
                    <CheckCircle size={16} />
                    <span>Custom deployment</span>
                  </div>
                  <div className="ef-item">
                    <CheckCircle size={16} />
                    <span>Dedicated support</span>
                  </div>
                  <div className="ef-item">
                    <CheckCircle size={16} />
                    <span>SLA guarantees</span>
                  </div>
                  <div className="ef-item">
                    <CheckCircle size={16} />
                    <span>On-premises options</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="form-success card">
                  <CheckCircle size={64} className="text-green" />
                  <h3>Message Sent!</h3>
                  <p>
                    Thank you for contacting us. Our team will get back to you
                    within 24 hours.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form card" onSubmit={handleSubmit}>
                  <h3>Send Us a Message</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        <User size={16} />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        <Mail size={16} />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">
                        <Building size={16} />
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="plan">Interested In</label>
                      <select
                        id="plan"
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                      >
                        <option value="free">Level 65 - Free</option>
                        <option value="business">Level 99 - Business</option>
                        <option value="government">Level 100 - Government</option>
                        <option value="developer">Level 1000 - Developer</option>
                        <option value="other">Other / Custom</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      <MessageSquare size={16} />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your security needs..."
                      rows={5}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Existing Site Link */}
      <section className="section existing-site">
        <div className="container">
          <div className="existing-content card">
            <h3>Visit Our Main Site</h3>
            <p>
              QSN is part of our larger security ecosystem. Visit our main website
              for more products and services.
            </p>
            <a
              href="https://oroboros.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Visit Oroboros.ai
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
