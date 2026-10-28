@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Install Node.js LTS from https://nodejs.org then run this again.
  pause
  exit /b 1
)
if not exist node_modules (
  call npm ci
  if errorlevel 1 (
    pause
    exit /b 1
  )
)
echo Open http://127.0.0.1:5190 in your browser after Vite is ready.
echo Keep this window open while editing. Press Ctrl+C to stop.
call npm run dev -- --host 127.0.0.1 --strictPort
pause
