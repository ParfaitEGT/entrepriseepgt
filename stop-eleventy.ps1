$pid = (netstat -aon | findstr ":8080" | ForEach-Object { ($_ -split "\s+")[-1] } | Select-Object -Unique)
if ($pid) {
    Stop-Process -Id $pid -Force
    Write-Host "✅ Processus Eleventy ($pid) arrêté." -ForegroundColor Yellow
} else {
    Write-Host "Aucun processus Eleventy détecté sur le port 8080." -ForegroundColor Cyan
}

Read-Host -Prompt "Appuie sur Entrée pour fermer cette fenêtre"
