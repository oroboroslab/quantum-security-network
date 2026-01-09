import React, { useState } from 'react'
import {
  Settings as SettingsIcon,
  Shield,
  Bell,
  Monitor,
  Lock,
  Key,
  Save,
  RefreshCw
} from 'lucide-react'
import { Card, CardHeader, CardBody } from '../components/shared/Card'
import './Settings.css'

function Settings({ currentLevel }) {
  const [settings, setSettings] = useState({
    autoUpdate: true,
    notifications: true,
    darkMode: true,
    twoFactor: true,
    quantumEncryption: true,
    temporalMonitoring: currentLevel >= 99,
    strataSecurityy: currentLevel >= 100,
    noirSystems: currentLevel >= 100
  })

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>Settings</h1>
        <p className="page-subtitle">Configure your QSN security preferences</p>
      </div>

      <div className="settings-grid">
        {/* General Settings */}
        <Card level={currentLevel}>
          <CardHeader
            title="General Settings"
            subtitle="Basic configuration options"
            icon={SettingsIcon}
          />
          <CardBody>
            <div className="settings-list">
              <div className="setting-item">
                <div className="setting-info">
                  <RefreshCw size={18} />
                  <div>
                    <span className="setting-label">Auto Update</span>
                    <span className="setting-desc">Automatically update security definitions</span>
                  </div>
                </div>
                <button
                  className={`toggle ${settings.autoUpdate ? 'active' : ''}`}
                  onClick={() => handleToggle('autoUpdate')}
                >
                  <span className="toggle-slider" />
                </button>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <Bell size={18} />
                  <div>
                    <span className="setting-label">Notifications</span>
                    <span className="setting-desc">Receive security alerts and updates</span>
                  </div>
                </div>
                <button
                  className={`toggle ${settings.notifications ? 'active' : ''}`}
                  onClick={() => handleToggle('notifications')}
                >
                  <span className="toggle-slider" />
                </button>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <Monitor size={18} />
                  <div>
                    <span className="setting-label">Dark Mode</span>
                    <span className="setting-desc">Use dark theme for dashboard</span>
                  </div>
                </div>
                <button
                  className={`toggle ${settings.darkMode ? 'active' : ''}`}
                  onClick={() => handleToggle('darkMode')}
                >
                  <span className="toggle-slider" />
                </button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Security Settings */}
        <Card level={currentLevel}>
          <CardHeader
            title="Security Settings"
            subtitle="Advanced security configuration"
            icon={Shield}
          />
          <CardBody>
            <div className="settings-list">
              <div className="setting-item">
                <div className="setting-info">
                  <Key size={18} />
                  <div>
                    <span className="setting-label">Two-Factor Authentication</span>
                    <span className="setting-desc">Require 2FA for all logins</span>
                  </div>
                </div>
                <button
                  className={`toggle ${settings.twoFactor ? 'active' : ''}`}
                  onClick={() => handleToggle('twoFactor')}
                >
                  <span className="toggle-slider" />
                </button>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <Lock size={18} />
                  <div>
                    <span className="setting-label">Quantum Encryption</span>
                    <span className="setting-desc">Enable Metatron's Cube encoding</span>
                  </div>
                </div>
                <button
                  className={`toggle ${settings.quantumEncryption ? 'active' : ''}`}
                  onClick={() => handleToggle('quantumEncryption')}
                >
                  <span className="toggle-slider" />
                </button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Feature Settings */}
        <Card level={currentLevel} className="span-2">
          <CardHeader
            title="Feature Configuration"
            subtitle="Enable/disable security features by tier"
            icon={Shield}
          />
          <CardBody>
            <div className="feature-grid">
              <div className={`feature-setting ${currentLevel >= 99 ? '' : 'locked'}`}>
                <div className="feature-header">
                  <span className="feature-name">Temporal Monitoring</span>
                  <span className="feature-tier">Level 99+</span>
                </div>
                <p className="feature-desc">Timeline anomaly detection and causality checks</p>
                <button
                  className={`toggle ${settings.temporalMonitoring ? 'active' : ''}`}
                  onClick={() => currentLevel >= 99 && handleToggle('temporalMonitoring')}
                  disabled={currentLevel < 99}
                >
                  <span className="toggle-slider" />
                </button>
              </div>

              <div className={`feature-setting ${currentLevel >= 100 ? '' : 'locked'}`}>
                <div className="feature-header">
                  <span className="feature-name">Strata Security</span>
                  <span className="feature-tier">Level 100+</span>
                </div>
                <p className="feature-desc">Multi-layer security protection</p>
                <button
                  className={`toggle ${settings.strataSecurityy ? 'active' : ''}`}
                  onClick={() => currentLevel >= 100 && handleToggle('strataSecurityy')}
                  disabled={currentLevel < 100}
                >
                  <span className="toggle-slider" />
                </button>
              </div>

              <div className={`feature-setting ${currentLevel >= 100 ? '' : 'locked'}`}>
                <div className="feature-header">
                  <span className="feature-name">NOIR Systems</span>
                  <span className="feature-tier">Level 100+</span>
                </div>
                <p className="feature-desc">Advanced security operations (No Mirrors)</p>
                <button
                  className={`toggle ${settings.noirSystems ? 'active' : ''}`}
                  onClick={() => currentLevel >= 100 && handleToggle('noirSystems')}
                  disabled={currentLevel < 100}
                >
                  <span className="toggle-slider" />
                </button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Current Level Info */}
        <Card level={currentLevel} glow className="span-2">
          <CardHeader
            title="Current Security Level"
            subtitle="Your active security tier"
            icon={Shield}
          />
          <CardBody>
            <div className="level-info">
              <div className="level-badge-large">
                <span className="level-number">{currentLevel}</span>
                <span className="level-label">
                  {currentLevel >= 1000 ? 'Developer' :
                   currentLevel >= 100 ? 'Government' :
                   currentLevel >= 99 ? 'Business' : 'Free/Public'}
                </span>
              </div>
              <div className="level-details">
                <div className="detail-item">
                  <span className="detail-label">Encryption</span>
                  <span className="detail-value">
                    {currentLevel >= 1000 ? '512-bit' :
                     currentLevel >= 100 ? '384-bit' :
                     currentLevel >= 99 ? '320-bit' : '256-bit'}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">API Limit</span>
                  <span className="detail-value">
                    {currentLevel >= 1000 ? '60,000/min' :
                     currentLevel >= 100 ? '6,000/min' :
                     currentLevel >= 99 ? '600/min' : '60/min'}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Support</span>
                  <span className="detail-value">
                    {currentLevel >= 1000 ? 'Developer 24/7' :
                     currentLevel >= 100 ? 'Dedicated' :
                     currentLevel >= 99 ? 'Priority' : 'Community'}
                  </span>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="settings-actions">
        <button className="btn-save">
          <Save size={18} />
          Save Settings
        </button>
      </div>
    </div>
  )
}

export default Settings
