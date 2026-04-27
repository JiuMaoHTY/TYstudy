@echo off
cd /d "%~dp0"
git add .
git commit -m "feat: 初始化AI学习博客"
git remote add origin https://github.com/JiuMaoHTY/TYstudy.git
git branch -M main
git push -u origin main
pause