Set-Location 'C:\Users\gianc\Documents\Devin Proyectos\PartnerShip\apexstart-web-temp'
Write-Host "Logo size: $([math]::Round((Get-Item public/logo.png).Length / 1KB, 2)) KB"
Get-ChildItem public/logo.png | Select-Object Name, Length, LastWriteTime
