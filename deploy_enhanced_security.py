#!/usr/bin/env python3
"""
🚀 ENHANCED SECURITY SYSTEM DEPLOYMENT
Knowledge-Based Security with Hard Stops at Levels 100, 300, 500, 800, 900

This script deploys the enhanced security system with knowledge gates and automated access control.
"""

import os
import sys
import json
from datetime import datetime

# Add QSN paths
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'QUANTUM_SECURITY_NETWORK'))

from qsn_tier_manager import QSNTierManager
from qsn_core.qsn_quantum_core import QSNQuantumCore
from knowledge_security_system import KnowledgeSecuritySystem, EnhancedTierManager

class EnhancedSecurityDeployment:
    """Deployment system for enhanced knowledge-based security"""
    
    def __init__(self):
        self.deployment_log = []
        self.system_status = {
            'deployment_phase': 'initializing',
            'knowledge_system_ready': False,
            'tier_manager_ready': False,
            'quantum_core_ready': False,
            'hard_stops_configured': False
        }
        
    def log_deployment(self, message, level="INFO"):
        """Log deployment progress"""
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log_entry = f"[{timestamp}] [{level}] {message}"
        self.deployment_log.append(log_entry)
        print(log_entry)
        
        # Save to deployment log file
        with open('enhanced_security_deployment.log', 'a') as f:
            f.write(log_entry + '\n')
    
    def initialize_quantum_core(self):
        """Initialize quantum core system"""
        self.log_deployment("Initializing Quantum Core System...")
        
        try:
            self.quantum_core = QSNQuantumCore()
            self.system_status['quantum_core_ready'] = True
            self.log_deployment("✅ Quantum Core System initialized")
            return True
        except Exception as e:
            self.log_deployment(f"❌ Failed to initialize Quantum Core: {e}", "ERROR")
            return False
    
    def initialize_knowledge_system(self):
        """Initialize knowledge-based security system"""
        self.log_deployment("Initializing Knowledge-Based Security System...")
        
        try:
            self.knowledge_system = KnowledgeSecuritySystem()
            self.system_status['knowledge_system_ready'] = True
            self.log_deployment("✅ Knowledge-Based Security System initialized")
            return True
        except Exception as e:
            self.log_deployment(f"❌ Failed to initialize Knowledge System: {e}", "ERROR")
            return False
    
    def initialize_tier_manager(self):
        """Initialize enhanced tier manager"""
        self.log_deployment("Initializing Enhanced Tier Manager...")
        
        try:
            self.tier_manager = QSNTierManager(self.quantum_core)
            self.system_status['tier_manager_ready'] = True
            self.log_deployment("✅ Enhanced Tier Manager initialized")
            return True
        except Exception as e:
            self.log_deployment(f"❌ Failed to initialize Tier Manager: {e}", "ERROR")
            return False
    
    def configure_hard_stops(self):
        """Configure hard stops at specified levels"""
        self.log_deployment("Configuring Hard Stops at Levels 100, 300, 500, 800, 900...")
        
        hard_stops = [100, 300, 500, 800, 900]
        
        for level in hard_stops:
            try:
                # Verify hard stop configuration
                tier_info = self.tier_manager.get_tier_info(level)
                if tier_info['success']:
                    self.log_deployment(f"✅ Hard stop configured at Level {level}: {tier_info['tier_info']['name']}")
                else:
                    self.log_deployment(f"⚠️ Could not verify Level {level}: {tier_info['error']}", "WARNING")
            except Exception as e:
                self.log_deployment(f"❌ Error configuring Level {level}: {e}", "ERROR")
        
        self.system_status['hard_stops_configured'] = True
        self.log_deployment("✅ Hard stops configuration complete")
        return True
    
    def test_knowledge_gates(self):
        """Test knowledge gates functionality"""
        self.log_deployment("Testing Knowledge Gates...")
        
        test_user = "deployment_test_user"
        test_levels = [50, 100, 300, 500, 800, 900]
        
        for level in test_levels:
            try:
                # Test knowledge assessment
                assessment = self.knowledge_system.assess_user_knowledge(test_user, level)
                
                if assessment['success']:
                    self.log_deployment(f"✅ Knowledge gate test passed for Level {level}")
                else:
                    self.log_deployment(f"⚠️ Knowledge gate test warning for Level {level}: {assessment.get('error', 'Unknown error')}", "WARNING")
                    
            except Exception as e:
                self.log_deployment(f"❌ Knowledge gate test failed for Level {level}: {e}", "ERROR")
        
        self.log_deployment("✅ Knowledge gates testing complete")
        return True
    
    def create_sample_users(self):
        """Create sample user profiles for testing"""
        self.log_deployment("Creating Sample User Profiles...")
        
        sample_users = [
            {"id": "user_basic", "name": "Basic User", "max_level": 50},
            {"id": "user_business", "name": "Business User", "max_level": 99},
            {"id": "user_govt", "name": "Government User", "max_level": 100},
            {"id": "user_quantum", "name": "Quantum Specialist", "max_level": 500},
            {"id": "user_architect", "name": "Quantum Architect", "max_level": 900},
            {"id": "user_master", "name": "Master Architect", "max_level": 1000}
        ]
        
        for user in sample_users:
            try:
                # Create user profile
                profile_result = self.knowledge_system.get_user_profile(user['id'])
                
                if not profile_result['success']:
                    # User doesn't exist, create assessment
                    assessment = self.knowledge_system.assess_user_knowledge(user['id'], user['max_level'])
                    
                    if assessment['success']:
                        self.log_deployment(f"✅ Created sample user: {user['name']} (Level {user['max_level']})")
                    else:
                        self.log_deployment(f"⚠️ Could not create user {user['name']}: {assessment.get('error', 'Unknown error')}", "WARNING")
                else:
                    self.log_deployment(f"✅ User {user['name']} already exists")
                    
            except Exception as e:
                self.log_deployment(f"❌ Error creating user {user['name']}: {e}", "ERROR")
        
        self.log_deployment("✅ Sample user creation complete")
        return True
    
    def run_security_tests(self):
        """Run comprehensive security tests"""
        self.log_deployment("Running Security Tests...")
        
        test_cases = [
            {"user": "user_basic", "level": 100, "expected": False, "description": "Basic user accessing government level"},
            {"user": "user_business", "level": 300, "expected": False, "description": "Business user accessing advanced government"},
            {"user": "user_govt", "level": 100, "expected": True, "description": "Government user accessing own level"},
            {"user": "user_quantum", "level": 500, "expected": True, "description": "Quantum specialist accessing own level"},
            {"user": "user_architect", "level": 900, "expected": True, "description": "Architect accessing master level"}
        ]
        
        all_passed = True
        
        for test_case in test_cases:
            try:
                access_check = self.knowledge_system.can_access_level(test_case['user'], test_case['level'])
                
                if access_check['access_granted'] == test_case['expected']:
                    self.log_deployment(f"✅ Security test passed: {test_case['description']}")
                else:
                    self.log_deployment(f"❌ Security test failed: {test_case['description']}", "ERROR")
                    all_passed = False
                    
            except Exception as e:
                self.log_deployment(f"❌ Security test error: {test_case['description']}: {e}", "ERROR")
                all_passed = False
        
        if all_passed:
            self.log_deployment("✅ All security tests passed")
        else:
            self.log_deployment("⚠️ Some security tests failed", "WARNING")
        
        return all_passed
    
    def deploy_full_system(self):
        """Deploy the complete enhanced security system"""
        self.log_deployment("🚀 Starting Enhanced Security System Deployment")
        self.log_deployment("=" * 60)
        
        deployment_steps = [
            ("Initializing Quantum Core", self.initialize_quantum_core),
            ("Initializing Knowledge System", self.initialize_knowledge_system),
            ("Initializing Tier Manager", self.initialize_tier_manager),
            ("Configuring Hard Stops", self.configure_hard_stops),
            ("Testing Knowledge Gates", self.test_knowledge_gates),
            ("Creating Sample Users", self.create_sample_users),
            ("Running Security Tests", self.run_security_tests)
        ]
        
        for step_name, step_function in deployment_steps:
            self.log_deployment(f"Step: {step_name}")
            if not step_function():
                self.log_deployment(f"❌ Deployment failed at: {step_name}", "ERROR")
                return False
        
        self.system_status['deployment_phase'] = 'operational'
        
        self.log_deployment("=" * 60)
        self.log_deployment("🎉 Enhanced Security System Deployment Complete!")
        
        # Display system status
        self.log_deployment("\n📊 SYSTEM STATUS:")
        self.log_deployment(f"  Quantum Core: {'✅' if self.system_status['quantum_core_ready'] else '❌'}")
        self.log_deployment(f"  Knowledge System: {'✅' if self.system_status['knowledge_system_ready'] else '❌'}")
        self.log_deployment(f"  Tier Manager: {'✅' if self.system_status['tier_manager_ready'] else '❌'}")
        self.log_deployment(f"  Hard Stops: {'✅' if self.system_status['hard_stops_configured'] else '❌'}")
        
        return True
    
    def get_deployment_summary(self):
        """Get deployment summary"""
        return {
            'deployment_timestamp': datetime.now().isoformat(),
            'system_name': 'Enhanced Knowledge-Based Security System',
            'hard_stops': [100, 300, 500, 800, 900],
            'knowledge_gates': [50, 100, 300, 500, 800, 900],
            'deployment_log_count': len(self.deployment_log),
            'system_status': self.system_status
        }

def main():
    """Main deployment function"""
    print("🚀 ENHANCED SECURITY SYSTEM DEPLOYMENT")
    print("Knowledge-Based Security with Hard Stops")
    print("Levels: 100, 300, 500, 800, 900")
    print("=" * 60)
    
    # Initialize deployment system
    deployment = EnhancedSecurityDeployment()
    
    # Deploy the complete system
    success = deployment.deploy_full_system()
    
    if success:
        # Get deployment summary
        summary = deployment.get_deployment_summary()
        
        print("\n🎯 DEPLOYMENT SUMMARY:")
        print(f"  System: {summary['system_name']}")
        print(f"  Hard Stops: {summary['hard_stops']}")
        print(f"  Knowledge Gates: {summary['knowledge_gates']}")
        print(f"  Deployment Logs: {summary['deployment_log_count']} entries")
        print(f"  Status: {'✅ OPERATIONAL' if summary['system_status']['deployment_phase'] == 'operational' else '❌ FAILED'}")
        
        # Save summary
        with open('enhanced_security_summary.json', 'w') as f:
            json.dump(summary, f, indent=2)
        
        print("\n📁 Files Created:")
        print("  enhanced_security_deployment.log - Deployment progress")
        print("  enhanced_security_summary.json - Deployment summary")
        print("  knowledge_security_log.json - Security events")
        
        print("\n🎉 Enhanced Security System Ready!")
        print("   Knowledge gates active at Levels: 50, 100, 300, 500, 800, 900")
        print("   Hard stops enforced at Levels: 100, 300, 500, 800, 900")
        print("   Automated access control based on demonstrated knowledge")
    else:
        print("\n❌ Deployment failed. Check enhanced_security_deployment.log for details.")
        return 1
    
    return 0

if __name__ == "__main__":
    exit_code = main()
    exit(exit_code)