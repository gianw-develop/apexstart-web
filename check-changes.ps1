Set-Location 'C:\Users\gianc\Documents\Devin Proyectos\PartnerShip\apexstart-web-temp'

# Verificar cambios en Navbar y Footer
Write-Host "=== Navbar diff ==="
git diff components/Navbar.tsx | Out-String | Write-Host

Write-Host "=== Footer diff ==="
git diff components/Footer.tsx | Out-String | Write-Host

Write-Host "=== Status ==="
git status --short
