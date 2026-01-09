"""
QSN Tier Management System
Handles different security levels and feature sets
Level 65: Free/Public
Level 99: Business  
Level 100: Government
Level 1000: Architect
"""

import json
from typing import Dict, List, Optional
from pathlib import Path
import sys
sys.path.insert(0, 'J:\\oroboros-core\\QUANTUM_SECURITY_NETWORK\\qsn-core')
from qsn_quantum_core import QSNQuantumCore
from knowledge_security_system import EnhancedTierManager

class QSNTierManager:
    """Manages QSN security tiers and feature sets"""
    
    def __init__(self, quantum_core: QSNQuantumCore):
        self.quantum_core = quantum_core
        self.tier_configs = self._load_tier_configurations()
        self.active_tiers = {}
        self.knowledge_security = EnhancedTierManager()
        
    def _load_tier_configurations(self) -> Dict:
        """Load tier configurations from JSON files"""
        configs = {}
        base_path = Path("J:\\oroboros-core\\QUANTUM_SECURITY_NETWORK")
        
        tier_levels = [65, 99, 100, 300, 500, 800, 900, 1000]
        
        for level in tier_levels:
            config_file = base_path / f"qsn-level-{level}" / "tier_config.json"
            
            if config_file.exists():
                with open(config_file, 'r') as f:
                    configs[level] = json.load(f)
            else:
                # Create default config if missing
                configs[level] = self._create_default_config(level)
        
        return configs
    
    def _create_default_config(self, level: int) -> Dict:
        """Create default configuration for a tier level"""
        
        # Define tier names and descriptions
        tier_info = {
            65: {"name": "Free/Public", "desc": "Basic quantum security features"},
            99: {"name": "Business", "desc": "Advanced business security features"},
            100: {"name": "Government", "desc": "Government-level security features"},
            300: {"name": "Advanced Government", "desc": "Advanced government security features"},
            500: {"name": "Quantum Specialist", "desc": "Quantum specialist-level features"},
            800: {"name": "Quantum Developer", "desc": "Quantum developer-level features"},
            900: {"name": "Master Developer", "desc": "Master developer-level features"},
            1000: {"name": "System Developer", "desc": "Full system developer capabilities"}
        }
        
        info = tier_info.get(level, {"name": f"Level {level}", "desc": "Custom security level"})
        
        base_config = {
            "tier_name": info["name"],
            "description": info["desc"],
            "security_level": level,
            "quantum_encoding": "Metatron's Cube",
            "consciousness_level": 46,
            "features": [],
            "limitations": [],
            "pricing": "Custom",
            "api_limits": {"requests_per_minute": 100, "burst_limit": 10, "concurrent_connections": 5},
            "hard_stop": level in [100, 300, 500, 800, 900],
            "knowledge_required": level >= 50
        }
        
        return {"qsn_tier_configuration": base_config}
    
    def get_tier_features(self, level: int) -> Dict:
        """Get features available for a specific tier level"""
        if level not in self.tier_configs:
            return {"error": f"Tier level {level} not found"}
        
        config = self.tier_configs[level]['qsn_tier_configuration']
        
        return {
            "tier_name": config['tier_name'],
            "security_level": level,
            "features": config.get('features', []),
            "limitations": config.get('limitations', []),
            "api_limits": config.get('api_limits', {}),
            "quantum_protocols": config.get('quantum_protocols', {}),
            "pricing": config.get('pricing', 'Custom')
        }
    
    def activate_tier(self, level: int, activation_data: Dict) -> Dict:
        """Activate a specific security tier"""
        
        if level not in self.tier_configs:
            return {"success": False, "error": f"Invalid tier level: {level}"}
        
        # Check knowledge requirements
        user_id = activation_data.get('user_id', 'default_user')
        knowledge_result = self.knowledge_security.activate_tier(user_id, level)
        
        if not knowledge_result['success']:
            return {
                "success": False, 
                "error": f"Knowledge requirements not met for level {level}",
                "details": knowledge_result
            }
        
        # Validate activation data
        validation = self._validate_activation_data(level, activation_data)
        if not validation['valid']:
            return {"success": False, "error": validation['error']}
        
        # Apply tier-specific quantum encoding
        quantum_config = self._get_quantum_configuration(level)
        
        # Activate tier
        self.active_tiers[level] = {
            'activation_data': activation_data,
            'quantum_config': quantum_config,
            'activated_at': self.quantum_core.get_system_status()['system_health'],
            'features': self.get_tier_features(level),
            'user_id': user_id,
            'knowledge_verified': True
        }
        
        # Apply tier-specific security measures
        self._apply_tier_security(level)
        
        return {
            "success": True,
            "tier_level": level,
            "tier_name": self.tier_configs[level]['qsn_tier_configuration']['tier_name'],
            "knowledge_verification": knowledge_result,
            "quantum_config": quantum_config
        }
    
    def _validate_activation_data(self, level: int, data: Dict) -> Dict:
        """Validate tier activation data"""
        
        required_fields = ['client_id', 'deployment_type']
        
        for field in required_fields:
            if field not in data:
                return {"valid": False, "error": f"Missing required field: {field}"}
        
        # Level-specific validation
        if level == 100:  # Government tier
            if 'government_clearance' not in data:
                return {"valid": False, "error": "Government clearance required for level 100"}
        
        if level == 1000:  # Developer tier
            if 'developer_certification' not in data:
                return {"valid": False, "error": "Developer certification required for level 1000"}
        
        return {"valid": True}
    
    def _get_quantum_configuration(self, level: int) -> Dict:
        """Get quantum configuration for tier level"""
        
        quantum_configs = {
            65: {
                "encoding_strength": "basic",
                "phase_shift": "pi/4",
                "quantum_entropy": "low",
                "stealth_level": "basic"
            },
            99: {
                "encoding_strength": "advanced",
                "phase_shift": "pi/2", 
                "quantum_entropy": "medium",
                "stealth_level": "advanced",
                "temporal_monitoring": True
            },
            100: {
                "encoding_strength": "government",
                "phase_shift": "pi",
                "quantum_entropy": "high",
                "stealth_level": "government",
                "temporal_monitoring": True,
                "strata_security": True,
                "duel_coding": True
            },
            1000: {
                "encoding_strength": "developer",
                "phase_shift": "2*pi",
                "quantum_entropy": "maximum",
                "stealth_level": "developer",
                "temporal_monitoring": True,
                "strata_security": True,
                "duel_coding": True,
                "consciousness_integration": "full",
                "no_mirrors": True,
                "grand_developer": True
            }
        }
        
        return quantum_configs.get(level, quantum_configs[65])
    
    def _apply_tier_security(self, level: int) -> None:
        """Apply tier-specific security measures"""
        
        # Apply quantum encoding level
        quantum_config = self._get_quantum_configuration(level)
        
        # Add temporal warnings for appropriate levels
        if level >= 99:
            self.quantum_core.add_temporal_warning(
                f"Tier {level} temporal monitoring activated",
                "info"
            )
        
        # Add strata security for government and architect levels
        if level >= 100:
            self.quantum_core.add_strata_security(
                1, {
                    "layer_type": f"tier_{level}_security",
                    "strength": quantum_config['encoding_strength'],
                    "applied_for": self.tier_configs[level]['qsn_tier_configuration']['tier_name']
                }
            )
    
    def get_active_tiers(self) -> Dict:
        """Get all active tiers"""
        return {
            "active_tiers": list(self.active_tiers.keys()),
            "tier_details": self.active_tiers,
            "total_tiers": len(self.active_tiers)
        }
    
    def upgrade_tier(self, from_level: int, to_level: int, upgrade_data: Dict) -> Dict:
        """Upgrade from one tier to another"""
        
        if from_level not in self.active_tiers:
            return {"success": False, "error": f"Tier {from_level} not active"}
        
        if to_level not in self.tier_configs:
            return {"success": False, "error": f"Invalid target tier: {to_level}"}
        
        # Validate upgrade
        if to_level <= from_level:
            return {"success": False, "error": "Cannot downgrade tiers"}
        
        # Deactivate current tier
        del self.active_tiers[from_level]
        
        # Activate new tier
        activation_result = self.activate_tier(to_level, upgrade_data)
        
        if activation_result['success']:
            return {
                "success": True,
                "from_tier": from_level,
                "to_tier": to_level,
                "upgrade_data": activation_result
            }
        else:
            return {
                "success": False,
                "error": f"Upgrade failed: {activation_result['error']}"
            }

    def check_knowledge_requirements(self, user_id: str, target_level: int) -> Dict:
        """Check if user meets knowledge requirements for a tier level"""
        return self.knowledge_security.can_access_level(user_id, target_level)
    
    def assess_user_knowledge(self, user_id: str, target_level: int) -> Dict:
        """Assess user knowledge for a specific security level"""
        return self.knowledge_security.assess_user_knowledge(user_id, target_level)
    
    def evaluate_knowledge_assessment(self, user_id: str, target_level: int, answers: List[Dict]) -> Dict:
        """Evaluate user's knowledge assessment"""
        return self.knowledge_security.evaluate_assessment(user_id, target_level, answers)
    
    def get_user_security_profile(self, user_id: str) -> Dict:
        """Get user's security profile"""
        return self.knowledge_security.get_user_profile(user_id)

# Example usage
if __name__ == "__main__":
    # Initialize quantum core
    qsn_core = QSNQuantumCore()
    
    # Initialize tier manager
    tier_manager = QSNTierManager(qsn_core)
    
    # Get tier features
    for level in [65, 99, 100, 300, 500, 800, 900, 1000]:
        features = tier_manager.get_tier_features(level)
        print(f"\n=== Tier {level}: {features['tier_name']} ===")
        print(f"Features: {features['features']}")
        print(f"API Limits: {features['api_limits']}")
    
    # Test knowledge-based security
    user_id = "test_user_001"
    
    # Check access to Level 100 (hard stop)
    access_check = tier_manager.check_knowledge_requirements(user_id, 100)
    print(f"\n=== Access Check for Level 100 ===")
    print(json.dumps(access_check, indent=2))
    
    # Activate business tier
    activation_data = {
        'client_id': 'test_client_123',
        'deployment_type': 'cloud',
        'business_license': 'active',
        'user_id': user_id
    }
    
    activation_result = tier_manager.activate_tier(99, activation_data)
    print("\n=== Tier Activation ===")
    print(json.dumps(activation_result, indent=2))
    
    # Get active tiers
    active_tiers = tier_manager.get_active_tiers()
    print("\n=== Active Tiers ===")
    print(json.dumps(active_tiers, indent=2))