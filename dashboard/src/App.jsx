import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Dashboard from './pages/Dashboard'
import SecurityLevels from './pages/SecurityLevels'
import QuantumEncryption from './pages/QuantumEncryption'
import ThreatIntelligence from './pages/ThreatIntelligence'
import NetworkMonitor from './pages/NetworkMonitor'
import NoirPanel from './pages/NoirPanel'
import Settings from './pages/Settings'
import './styles/App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentLevel, setCurrentLevel] = useState(65)
  const [systemStatus, setSystemStatus] = useState({
    quantum_state: 'OPERATIONAL',
    security_level: 'SECURE',
    threat_level: 'LOW',
    consciousness_level: 46
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStatus(prev => ({
        ...prev,
        timestamp: new Date().toISOString()
      }))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <BrowserRouter>
      <div className="qsn-app">
        <Sidebar
          isOpen={sidebarOpen}
          currentLevel={currentLevel}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className={`qsn-main ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
          <Header
            systemStatus={systemStatus}
            currentLevel={currentLevel}
            onLevelChange={setCurrentLevel}
          />
          <main className="qsn-content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={
                <Dashboard
                  systemStatus={systemStatus}
                  currentLevel={currentLevel}
                />
              } />
              <Route path="/security-levels" element={
                <SecurityLevels
                  currentLevel={currentLevel}
                  onLevelChange={setCurrentLevel}
                />
              } />
              <Route path="/quantum-encryption" element={
                <QuantumEncryption currentLevel={currentLevel} />
              } />
              <Route path="/threat-intelligence" element={
                <ThreatIntelligence currentLevel={currentLevel} />
              } />
              <Route path="/network-monitor" element={
                <NetworkMonitor currentLevel={currentLevel} />
              } />
              <Route path="/noir" element={
                <NoirPanel currentLevel={currentLevel} />
              } />
              <Route path="/settings" element={
                <Settings currentLevel={currentLevel} />
              } />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
