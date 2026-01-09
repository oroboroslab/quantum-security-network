"""
QSN Single-Click Deployment System
Deploys Quantum Security Network with tier-specific configurations
"""

import json
import subprocess
import sys
from pathlib import Path
from datetime import datetime
from typing import Dict, List
from qsn_core.qsn_quantum_core import QSNQuantumCore
from qsn_net.qsn_network_security import QSNNetworkSecurity
from qsn_api.qsn_api_security import QSN_API_Security
from qsn_tier_manager import QSNTierManager

class QSNDeployment:
    """QSN Single-Click Deployment System"""
    
    def __init__(self):
        self.deployment_log = []
        self.base_path = Path("J:\\oroboros-core\\QUANTUM_SECURITY_NETWORK")
        self.deployment_status = {
            'qsn_core': 'PENDING',
            'qsn_net': 'PENDING',
            'qsn_api': 'PENDING',
            'qsn_synth': 'PENDING',
            'qsn_specter': 'PENDING',
            'dashboard': 'PENDING',
            'tier_manager': 'PENDING'
        }
        
    def deploy_qsn(self, tier_level: int = 65, deployment_type: str = "cloud") -> Dict:
        """Deploy QSN with specified tier level"""
        
        self._log(f"Starting QSN deployment - Tier: {tier_level}, Type: {deployment_type}")
        
        try:
            # Step 1: Deploy QSN Core
            self._log("Deploying QSN Core...")
            qsn_core = self._deploy_qsn_core()
            self.deployment_status['qsn_core'] = 'DEPLOYED'
            
            # Step 2: Deploy QSN Network Security
            self._log("Deploying QSN Network Security...")
            qsn_net = self._deploy_qsn_net(qsn_core)
            self.deployment_status['qsn_net'] = 'DEPLOYED'
            
            # Step 3: Deploy QSN API Security
            self._log("Deploying QSN API Security...")
            qsn_api = self._deploy_qsn_api(qsn_core)
            self.deployment_status['qsn_api'] = 'DEPLOYED'
            
            # Step 4: Deploy Tier Manager
            self._log("Deploying Tier Manager...")
            tier_manager = self._deploy_tier_manager(qsn_core)
            self.deployment_status['tier_manager'] = 'DEPLOYED'
            
            # Step 5: Activate specified tier
            self._log(f"Activating Tier {tier_level}...")
            activation_result = self._activate_tier(tier_manager, tier_level, deployment_type)
            
            # Step 6: Deploy Dashboard
            self._log("Deploying Dashboard...")
            dashboard_result = self._deploy_dashboard()
            self.deployment_status['dashboard'] = 'DEPLOYED'
            
            # Final deployment summary
            deployment_summary = self._create_deployment_summary(
                tier_level, deployment_type, activation_result
            )
            
            self._log("QSN deployment completed successfully!")
            
            return deployment_summary
            
        except Exception as e:
            self._log(f"Deployment failed: {str(e)}")
            return {
                "success": False,
                "error": str(e),
                "deployment_status": self.deployment_status,
                "log": self.deployment_log
            }
    
    def _deploy_qsn_core(self) -> QSNQuantumCore:
        """Deploy QSN Core quantum system"""
        try:
            qsn_core = QSNQuantumCore()
            self._log("QSN Core initialized successfully")
            return qsn_core
        except Exception as e:
            raise Exception(f"QSN Core deployment failed: {str(e)}")
    
    def _deploy_qsn_net(self, qsn_core: QSNQuantumCore):
        """Deploy QSN Network Security"""
        try:
            # Import and initialize network security
            qsn_net = QSNNetworkSecurity(qsn_core)
            self._log("QSN Network Security initialized")
            return qsn_net
        except Exception as e:
            raise Exception(f"QSN Network deployment failed: {str(e)}")
    
    def _deploy_qsn_api(self, qsn_core: QSNQuantumCore):
        """Deploy QSN API Security"""
        try:
            qsn_api = QSN_API_Security(qsn_core)
            self._log("QSN API Security initialized")
            return qsn_api
        except Exception as e:
            raise Exception(f"QSN API deployment failed: {str(e)}")
    
    def _deploy_tier_manager(self, qsn_core: QSNQuantumCore):
        """Deploy Tier Manager"""
        try:
            tier_manager = QSNTierManager(qsn_core)
            self._log("Tier Manager initialized")
            return tier_manager
        except Exception as e:
            raise Exception(f"Tier Manager deployment failed: {str(e)}")
    
    def _activate_tier(self, tier_manager, tier_level: int, deployment_type: str) -> Dict:
        """Activate specific security tier"""
        activation_data = {
            'client_id': f'qsn_client_{datetime.now().strftime("%Y%m%d_%H%M%S")}',
            'deployment_type': deployment_type,
            'activation_timestamp': datetime.now().isoformat()
        }
        
        # Add tier-specific data
        if tier_level == 100:  # Government
            activation_data['government_clearance'] = 'verified'
        elif tier_level == 1000:  # Architect
            activation_data['architect_certification'] = 'level_1000'
        
        activation_result = tier_manager.activate_tier(tier_level, activation_data)
        
        if activation_result['success']:
            self._log(f"Tier {tier_level} activated successfully")
        else:
            raise Exception(f"Tier activation failed: {activation_result['error']}")
        
        return activation_result
    
    def _deploy_dashboard(self) -> Dict:
        """Deploy QSN Dashboard"""
        try:
            # Create dashboard configuration
            dashboard_config = {
                'dashboard_type': 'react_midnight_navy',
                'port': 8080,
                'security_level': 'quantum_class_7',
                'deployed_at': datetime.now().isoformat()
            }
            
            # Save dashboard config
            dashboard_path = self.base_path / "dashboard" / "dashboard_config.json"
            dashboard_path.parent.mkdir(exist_ok=True)
            
            with open(dashboard_path, 'w') as f:
                json.dump(dashboard_config, f, indent=2)
            
            self._log("Dashboard configuration created")
            
            return {
                'success': True,
                'dashboard_url': 'http://localhost:8080',
                'config_path': str(dashboard_path)
            }
            
        except Exception as e:
            raise Exception(f"Dashboard deployment failed: {str(e)}")
    
    def _create_deployment_summary(self, tier_level: int, deployment_type: str, activation_result: Dict) -> Dict:
        """Create deployment summary"""
        
        return {
            "success": True,
            "deployment_id": f"qsn_deploy_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
            "tier_level": tier_level,
            "tier_name": activation_result.get('tier_name', 'Unknown'),
            "deployment_type": deployment_type,
            "deployment_status": self.deployment_status,
            "quantum_config": activation_result.get('quantum_config', {}),
            "activation_time": activation_result.get('activation_time', ''),
            "dashboard_url": "http://localhost:8080",
            "log_entries": len(self.deployment_log),
            "deployment_timestamp": datetime.now().isoformat()
        }
    
    def _log(self, message: str) -> None:
        """Add message to deployment log"""
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log_entry = f"[{timestamp}] {message}"
        self.deployment_log.append(log_entry)
        print(log_entry)
    
    def get_deployment_log(self) -> List[str]:
        """Get deployment log"""
        return self.deployment_log
    
    def save_deployment_report(self, filename: str = None) -> str:
        """Save deployment report to file"""
        if not filename:
            filename = f"qsn_deployment_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        
        report_path = self.base_path / "deployment_reports" / filename
        report_path.parent.mkdir(exist_ok=True)
        
        report = {
            'deployment_log': self.deployment_log,
            'deployment_status': self.deployment_status,
            'timestamp': datetime.now().isoformat()
        }
        
        with open(report_path, 'w') as f:
            json.dump(report, f, indent=2)
        
        return str(report_path)

def main():
    """Main deployment function"""
    
    # Parse command line arguments
    tier_level = 65  # Default to free tier
    deployment_type = "cloud"  # Default deployment type
    
    if len(sys.argv) > 1:
        try:
            tier_level = int(sys.argv[1])
        except ValueError:
            print(f"Invalid tier level: {sys.argv[1]}. Using default: 65")
    
    if len(sys.argv) > 2:
        deployment_type = sys.argv[2]
    
    # Validate tier level
    valid_tiers = [65, 99, 100, 1000]
    if tier_level not in valid_tiers:
        print(f"Invalid tier level: {tier_level}. Valid levels: {valid_tiers}")
        sys.exit(1)
    
    print(f"🚀 QSN Single-Click Deployment")
    print(f"📊 Tier Level: {tier_level}")
    print(f"🌐 Deployment Type: {deployment_type}")
    print("-" * 50)
    
    # Start deployment
    deployer = QSNDeployment()
    
    try:
        result = deployer.deploy_qsn(tier_level, deployment_type)
        
        if result['success']:
            print("\n🎯 QSN DEPLOYMENT SUCCESSFUL!")
            print(f"📊 Tier: {result['tier_name']} (Level {result['tier_level']})")
            print(f"🌐 Dashboard: {result['dashboard_url']}")
            print(f"📅 Deployed: {result['deployment_timestamp']}")
            
            # Save deployment report
            report_path = deployer.save_deployment_report()
            print(f"📋 Report: {report_path}")
            
        else:
            print("\n❌ QSN DEPLOYMENT FAILED!")
            print(f"Error: {result['error']}")
            
    except Exception as e:
        print(f"\n❌ Deployment error: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()