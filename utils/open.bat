@echo off
start "Python Web Server" cmd /k "cd /d %~dp0 && python -m http.server 8000"
start http://localhost:8000/search.html