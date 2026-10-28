@echo off
cd /d "%~dp0"
if not exist node_modules (
  call npm ci
  if errorlevel 1 (
    pause
    exit /b 1
  )
)
call npm run build
if errorlevel 1 (
  echo Build failed. Fix the reported content error before publishing.
  pause
  exit /b 1
)
echo Build complete. The dist folder is ready for your existing Netlify project.
echo This script does not upload or publish anything.
start "" explorer.exe "%~dp0dist"
pause
