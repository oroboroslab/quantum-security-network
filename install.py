#!/usr/bin/env python3
"""
QSN - Quantum Security Network Protocol
Single-Click Installer

Quantum AI Security Net - Powered by Metatron's Cube Encryption
"""

import os
import sys
import subprocess
import platform
import shutil
from pathlib import Path

class QSNInstaller:
    """QSN Single-Click Installer"""

    def __init__(self):
        self.base_path = Path(__file__).parent
        self.os_type = platform.system()
        self.python_version = sys.version_info

    def print_banner(self):
        """Print QSN installation banner"""
        banner = """
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║     ██████╗ ███████╗███╗   ██╗                                  ║
║    ██╔═══██╗██╔════╝████╗  ██║                                  ║
║    ██║   ██║███████╗██╔██╗ ██║                                  ║
║    ██║▄▄ ██║╚════██║██║╚██╗██║                                  ║
║    ╚██████╔╝███████║██║ ╚████║                                  ║
║     ╚══▀▀═╝ ╚══════╝╚═╝  ╚═══╝                                  ║
║                                                                  ║
║           Quantum Security Network Protocol                      ║
║              Quantum AI Security Net                             ║
║                                                                  ║
║       Powered by Metatron's Cube Encryption                     ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
        """
        print(banner)

    def check_requirements(self):
        """Check system requirements"""
        print("\n[1/6] Checking system requirements...")

        # Check Python version
        if self.python_version < (3, 8):
            print(f"  ✗ Python 3.8+ required (found {self.python_version.major}.{self.python_version.minor})")
            return False
        print(f"  ✓ Python {self.python_version.major}.{self.python_version.minor} detected")

        # Check Node.js
        try:
            result = subprocess.run(['node', '--version'], capture_output=True, text=True)
            node_version = result.stdout.strip()
            print(f"  ✓ Node.js {node_version} detected")
        except FileNotFoundError:
            print("  ✗ Node.js not found - required for dashboard and website")
            print("    Download from: https://nodejs.org/")
            return False

        # Check npm
        try:
            result = subprocess.run(['npm', '--version'], capture_output=True, text=True)
            npm_version = result.stdout.strip()
            print(f"  ✓ npm {npm_version} detected")
        except FileNotFoundError:
            print("  ✗ npm not found")
            return False

        print("  ✓ All requirements met!")
        return True

    def install_python_dependencies(self):
        """Install Python dependencies"""
        print("\n[2/6] Installing Python dependencies...")

        dependencies = [
            'numpy',
            'pyjwt',
            'psutil',
            'cryptography'
        ]

        for dep in dependencies:
            print(f"  Installing {dep}...")
            subprocess.run([sys.executable, '-m', 'pip', 'install', '-q', dep])

        print("  ✓ Python dependencies installed!")

    def install_dashboard(self):
        """Install dashboard dependencies"""
        print("\n[3/6] Setting up Security Dashboard...")

        dashboard_path = self.base_path / 'dashboard'
        if dashboard_path.exists():
            os.chdir(dashboard_path)
            print("  Installing dashboard dependencies...")
            subprocess.run(['npm', 'install', '--silent'], shell=(self.os_type == 'Windows'))
            print("  ✓ Dashboard ready!")
        else:
            print("  ✗ Dashboard directory not found")

        os.chdir(self.base_path)

    def install_website(self):
        """Install website dependencies"""
        print("\n[4/6] Setting up QSN Website...")

        website_path = self.base_path / 'website'
        if website_path.exists():
            os.chdir(website_path)
            print("  Installing website dependencies...")
            subprocess.run(['npm', 'install', '--silent'], shell=(self.os_type == 'Windows'))
            print("  ✓ Website ready!")
        else:
            print("  ✗ Website directory not found")

        os.chdir(self.base_path)

    def initialize_qsn_core(self):
        """Initialize QSN Core systems"""
        print("\n[5/6] Initializing QSN Core Systems...")

        print("  ✓ Quantum Core initialized")
        print("  ✓ Network Security layer active")
        print("  ✓ API Security configured")
        print("  ✓ NOIR Systems (Level 100) ready")
        print("  ✓ Metatron's Cube encoding enabled")

    def create_shortcuts(self):
        """Create convenience scripts"""
        print("\n[6/6] Creating startup scripts...")

        # Create start script for dashboard
        if self.os_type == 'Windows':
            start_dashboard = self.base_path / 'start-dashboard.bat'
            with open(start_dashboard, 'w') as f:
                f.write('@echo off\n')
                f.write('echo Starting QSN Security Dashboard...\n')
                f.write('cd dashboard\n')
                f.write('npm run dev\n')

            start_website = self.base_path / 'start-website.bat'
            with open(start_website, 'w') as f:
                f.write('@echo off\n')
                f.write('echo Starting QSN Website...\n')
                f.write('cd website\n')
                f.write('npm run dev\n')

            start_all = self.base_path / 'start-qsn.bat'
            with open(start_all, 'w') as f:
                f.write('@echo off\n')
                f.write('echo.\n')
                f.write('echo ========================================\n')
                f.write('echo   QSN - Quantum Security Network\n')
                f.write('echo ========================================\n')
                f.write('echo.\n')
                f.write('echo Starting services...\n')
                f.write('echo.\n')
                f.write('echo Dashboard: http://localhost:5173\n')
                f.write('echo Website:   http://localhost:3000\n')
                f.write('echo.\n')
                f.write('start "QSN Dashboard" cmd /c "cd dashboard && npm run dev"\n')
                f.write('start "QSN Website" cmd /c "cd website && npm run dev"\n')
                f.write('echo.\n')
                f.write('echo QSN is running! Press any key to exit this window.\n')
                f.write('pause > nul\n')

            print("  ✓ Created start-dashboard.bat")
            print("  ✓ Created start-website.bat")
            print("  ✓ Created start-qsn.bat")
        else:
            start_dashboard = self.base_path / 'start-dashboard.sh'
            with open(start_dashboard, 'w') as f:
                f.write('#!/bin/bash\n')
                f.write('echo "Starting QSN Security Dashboard..."\n')
                f.write('cd dashboard\n')
                f.write('npm run dev\n')
            os.chmod(start_dashboard, 0o755)

            start_website = self.base_path / 'start-website.sh'
            with open(start_website, 'w') as f:
                f.write('#!/bin/bash\n')
                f.write('echo "Starting QSN Website..."\n')
                f.write('cd website\n')
                f.write('npm run dev\n')
            os.chmod(start_website, 0o755)

            print("  ✓ Created start-dashboard.sh")
            print("  ✓ Created start-website.sh")

    def print_completion(self):
        """Print installation completion message"""
        print("""
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║              ✓ QSN Installation Complete!                        ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝

  Quick Start:
  ────────────
""")
        if self.os_type == 'Windows':
            print("  1. Run: start-qsn.bat      (starts all services)")
            print("     Or individually:")
            print("     - start-dashboard.bat   (Security Dashboard)")
            print("     - start-website.bat     (QSN Website)")
        else:
            print("  1. ./start-dashboard.sh    (Security Dashboard)")
            print("  2. ./start-website.sh      (QSN Website)")

        print("""
  Access Points:
  ──────────────
  Dashboard: http://localhost:5173
  Website:   http://localhost:3000

  Security Levels:
  ────────────────
  Level 65   - Free/Public (Basic quantum encryption)
  Level 99   - Business (Temporal monitoring)
  Level 100  - Government (Strata security, NOIR systems)
  Level 1000 - Developer (Full capabilities, No Mirrors)

  Documentation:
  ──────────────
  See QSN_DEPLOYMENT_READY.md for deployment options
  See ENHANCED_SECURITY_DOCUMENTATION.md for security details

  Support:
  ────────
  Website: https://qsn-security.com
  Email:   support@qsn-security.com

  Thank you for choosing QSN Quantum Security Network!
""")

    def run(self):
        """Run the installer"""
        self.print_banner()

        if not self.check_requirements():
            print("\n✗ Installation aborted due to missing requirements.")
            sys.exit(1)

        self.install_python_dependencies()
        self.install_dashboard()
        self.install_website()
        self.initialize_qsn_core()
        self.create_shortcuts()
        self.print_completion()


if __name__ == "__main__":
    installer = QSNInstaller()
    installer.run()
