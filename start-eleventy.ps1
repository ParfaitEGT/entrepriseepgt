Set-Location "C:\Users\CANAAN INFORMATIQUE\OneDrive\Bureau\site-netlifycmseleventy\entrepriseepgt"

# Lancer Eleventy dans une nouvelle console PowerShell qui reste ouverte
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run start"

Write-Host "🚀 Eleventy lancé dans une nouvelle console. Ferme cette console pour arrêter le serveur." -ForegroundColor Green

# Petite pause pour laisser le serveur démarrer (2 secondes)
Start-Sleep -Seconds 2

# Ouvrir automatiquement le CMS dans le navigateur par défaut
Start-Process "http://localhost:8080/admin"

Read-Host -Prompt "Appuie sur Entrée pour fermer cette fenêtre"
