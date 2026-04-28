@echo off
cd /d "%~dp0"
git add .
git commit -m "update: 更新学习笔记"
git push
pause
