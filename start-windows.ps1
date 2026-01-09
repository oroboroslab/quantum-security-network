# QSN - Quantum Security Network
# Windows PowerShell Startup Script
# Run this from Windows PowerShell (not WSL)

Write-Host @"

╔══════════════════════════════════════════════════════════════════╗
║     ██████╗ ███████╗███╗   ██╗                                  ║
║    ██╔═══██╗██╔════╝████╗  ██║   Quantum Security Network       ║
║    ██║   ██║███████╗██╔██╗ ██║   Starting Windows Services...   ║
║    ██║▄▄ ██║╚════██║██║╚██╗██║                                  ║
║    ╚██████╔╝███████║██║ ╚████║                                  ║
║     ╚══▀▀═╝ ╚══════╝╚═╝  ╚═══╝                                  ║
╚══════════════════════════════════════════════════════════════════╝

"@ -ForegroundColor Cyan

$QSN_PATH = "J:\oroboros-core\QUANTUM_SECURITY_NETWORK"

# Check if Node.js is installed
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "ERROR: Node.js not found. Please install from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Start Dashboard
Write-Host "Starting QSN Dashboard..." -ForegroundColor Yellow
Start-Process -FilePath "cmd.exe" -ArgumentList "/c cd /d $QSN_PATH\dashboard && npm run dev" -WindowStyle Minimized

# Start Website
Write-Host "Starting QSN Website..." -ForegroundColor Yellow
Start-Process -FilePath "cmd.exe" -ArgumentList "/c cd /d $QSN_PATH\website && npm run dev" -WindowStyle Minimized

Start-Sleep -Seconds 5

Write-Host @"

╔══════════════════════════════════════════════════════════════════╗
║                    QSN SERVICES STARTED                          ║
╠══════════════════════════════════════════════════════════════════╣
║  Dashboard:  http://localhost:5173                               ║
║  Website:    http://localhost:3000                               ║
╠══════════════════════════════════════════════════════════════════╣
║  Press any key to open both in your browser...                   ║
╚══════════════════════════════════════════════════════════════════╝

"@ -ForegroundColor Green

$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Start-Process "http://localhost:5173"
Start-Process "http://localhost:3000"

Write-Host "Browsers launched! Keep this window open to keep servers running." -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop all services." -ForegroundColor Yellow

# Keep script running
while ($true) { Start-Sleep -Seconds 60 }
