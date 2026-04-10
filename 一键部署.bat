@echo off
chcp 65001 >nul
echo ==========================================
echo   大模型API汇总网站 - 一键安装部署
echo ==========================================
echo.

:: 检查是否已安装 Git
where git >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Git 已安装
    goto :init_git
)

echo.
echo [1/4] 正在安装 Git...
echo 请稍等，这可能需要几分钟...
echo.

:: 下载 Git 安装包
powershell -Command "Invoke-WebRequest -Uri 'https://github.com/git-for-windows/git/releases/download/v2.46.0.windows.1/Git-2.46.0-64-bit.exe' -OutFile '%TEMP%\git-setup.exe'"

:: 安装 Git (静默安装)
start /wait "" "%TEMP%\git-setup.exe" /VERYSILENT /NORESTART /NOCANCEL /SP- /CLOSEAPPLICATIONS /RESTARTAPPLICATIONS /COMPONENTS="icons,ext\reg\shellhere,assoc,assoc_sh"

:: 刷新环境变量
set PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files (x86)\Git\cmd
setx PATH "%PATH%;C:\Program Files\Git\cmd;C:\Program Files (x86)\Git\cmd" /M

echo [OK] Git 安装完成

:init_git
echo.
echo [2/4] 初始化 Git 仓库...
cd /d "%~dp0"
git init
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

echo.
echo [3/4] 提交代码...
git add .
git commit -m "feat: 大模型API汇总网站 v1.0"

echo.
echo ==========================================
echo [4/4] GitHub 仓库配置
echo ==========================================
echo.
echo 请先在 GitHub 上创建仓库：
echo 1. 访问 https://github.com/new
echo 2. 仓库名称输入: ai-model-api-hub
echo 3. 选择 Public
echo 4. 点击 Create repository
echo.
echo 然后将仓库 URL 粘贴到下方:
echo (格式: https://github.com/你的用户名/ai-model-api-hub.git)
echo.
set /p REPO_URL="请输入仓库 URL: "

git remote add origin %REPO_URL%
git branch -M main
git push -u origin main

echo.
echo ==========================================
echo   部署完成！
echo ==========================================
echo.
echo 下一步:
echo 1. 访问你的 GitHub 仓库
echo 2. 进入 Settings → Pages
echo 3. Source 选择 main / / (root)
echo 4. 等待 1-2 分钟即可访问网站
echo.
echo 网站地址: https://%REPO_URL:~19,-4%.github.io/ai-model-api-hub/
echo.
pause
