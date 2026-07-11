Set-Location 'C:\Users\gianc\Documents\Devin Proyectos\PartnerShip\apexstart-web-temp'

# Remove duplicate ApexStart text from Footer logo
$c = Get-Content components/Footer.tsx -Raw
$c = $c -replace '\n\s*\u003cspan className="font-semibold text-lg"\u003eApexStart\u003c/span\u003e', ''
Set-Content components/Footer.tsx $c

Write-Host "Footer updated"
