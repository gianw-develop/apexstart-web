Set-Location 'C:\Users\gianc\Documents\Devin Proyectos\PartnerShip\apexstart-web-temp'

Write-Host "1. Cambiando color a coral #FF6B6B..."
Get-ChildItem -Path components -Filter *.tsx -Recurse | ForEach-Object {
  (Get-Content $_.FullName) `
    -replace '#A855F7','#FF6B6B' `
    -replace '#D92B1F','#FF6B6B' `
    -replace '168,85,247','255,107,107' `
    -replace '217,43,31','255,107,107' `
    -replace 'neon-accent','neon-coral' `
    -replace 'neon-red','neon-coral' | Set-Content $_.FullName
}
Get-ChildItem -Path app -Filter *.tsx -Recurse | ForEach-Object {
  (Get-Content $_.FullName) `
    -replace '#A855F7','#FF6B6B' `
    -replace '#D92B1F','#FF6B6B' `
    -replace '168,85,247','255,107,107' `
    -replace '217,43,31','255,107,107' `
    -replace 'neon-accent','neon-coral' `
    -replace 'neon-red','neon-coral' | Set-Content $_.FullName
}
Get-ChildItem -Path app -Filter *.css -Recurse | ForEach-Object {
  (Get-Content $_.FullName) `
    -replace '#A855F7','#FF6B6B' `
    -replace '#D92B1F','#FF6B6B' `
    -replace '168,85,247','255,107,107' `
    -replace '217,43,31','255,107,107' `
    -replace 'neon-accent','neon-coral' `
    -replace 'neon-red','neon-coral' | Set-Content $_.FullName
}

Write-Host "2. Arreglando Navbar y Footer..."
$c = Get-Content components/Navbar.tsx -Raw
$c = $c -replace '\n\s*\u003cspan className="font-semibold text-lg tracking-tight text-\[#0F172A\]"\u003e\n\s*ApexStart\n\s*\u003c/span\u003e', ''
$c = $c -replace 'className="flex items-center gap-2 group"', 'className="flex items-center group"'
$c = $c -replace 'className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-105"', 'className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"'
Set-Content components/Navbar.tsx $c

$c = Get-Content components/Footer.tsx -Raw
$c = $c -replace '\n\s*\u003cspan className="font-semibold text-lg"\u003eApexStart\u003c/span\u003e', ''
$c = $c -replace 'className="flex items-center gap-2 mb-5"', 'className="flex items-center mb-5"'
$c = $c -replace 'className="w-8 h-8 object-contain"', 'className="h-8 w-auto object-contain"'
$c = $c -replace 'text-\[#D92B1F\]', 'text-[#FF6B6B]'
$c = $c -replace 'text-\[#A855F7\]', 'text-[#FF6B6B]'
Set-Content components/Footer.tsx $c

Write-Host "3. Subiendo a GitHub..."
git add -A
git commit -m "feat: coral accent #FF6B6B + logo fix"
git push origin main

Write-Host "4. Deployando en Vercel..."
npx vercel --prod --yes

Write-Host "Listo."
