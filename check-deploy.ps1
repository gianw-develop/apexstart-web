Set-Location 'C:\Users\gianc\Documents\Devin Proyectos\PartnerShip\apexstart-web-temp'
git log --oneline -5
Write-Host "---"
git diff HEAD~1 --name-only
Write-Host "---"
Get-Content components/Hero.tsx | Select-String -Pattern 'Statue|liberty|unsplash'
