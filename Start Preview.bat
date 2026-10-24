@echo off
setlocal
cd /d "%~dp0"

set "NODE_EXE=node"
set "CODEX_NODE=C:\Users\UPC\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%CODEX_NODE%" set "NODE_EXE=%CODEX_NODE%"

if not exist "node_modules\next\dist\bin\next" (
  echo The website's preview files are missing. Please ask Codex to restore the project setup.
  pause
  exit /b 1
)

echo Starting the Trust Trio preview. Leave the next window open while viewing the website.
start "Trust Trio Preview Server" cmd /k ""%NODE_EXE%" "%~dp0node_modules\next\dist\bin\next" dev -p 3000"
timeout /t 8 /nobreak >nul
start "" "http://localhost:3000"
endlocal
