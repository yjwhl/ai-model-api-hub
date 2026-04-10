# 大模型API汇总网站 - 自动安装部署脚本
# 以管理员权限运行

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  大模型API汇总网站 - 自动安装部署" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# 检查管理员权限
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "[提示] 建议以管理员身份运行以安装 Git" -ForegroundColor Yellow
}

# 检查 Git
$gitPath = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitPath) {
    Write-Host ""
    Write-Host "[1/4] 正在安装 Git..." -ForegroundColor Yellow
    
    # 下载 Git
    $gitUrl = "https://github.com/git-for-windows/git/releases/download/v2.46.0.windows.1/Git-2.46.0-64-bit.exe"
    $installerPath = "$env:TEMP\git-installer.exe"
    
    try {
        Write-Host "  下载中... (可能需要几分钟)"
        Invoke-WebRequest -Uri $gitUrl -OutFile $installerPath -UseBasicParsing
        
        # 静默安装
        Write-Host "  安装中..."
        Start-Process -FilePath $installerPath -ArgumentList "/VERYSILENT", "/NORESTART", "/NOCANCEL", "/SP-" -Wait
        
        # 刷新环境变量
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
        
        Write-Host "  [OK] Git 安装完成" -ForegroundColor Green
    }
    catch {
        Write-Host "  [错误] Git 下载失败" -ForegroundColor Red
        Write-Host "  请手动下载安装: https://git-scm.com/download/win" -ForegroundColor Yellow
        exit 1
    }
} else {
    Write-Host "[OK] Git 已安装 ($($gitPath.Source))" -ForegroundColor Green
}

# 初始化仓库
Write-Host ""
Write-Host "[2/4] 初始化 Git 仓库..." -ForegroundColor Yellow

Set-Location $PSScriptRoot
git init 2>$null
git config --global user.email "developer@example.com" 2>$null
git config --global user.name "Developer" 2>$null

Write-Host "  [OK] 仓库初始化完成" -ForegroundColor Green

# 提交代码
Write-Host ""
Write-Host "[3/4] 提交代码..." -ForegroundColor Yellow
git add .
git commit -m "feat: 大模型API汇总网站 v1.0" 2>$null
Write-Host "  [OK] 代码已提交" -ForegroundColor Green

# GitHub 配置
Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "[4/4] GitHub 仓库配置" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "请先在 GitHub 创建仓库：" -ForegroundColor Yellow
Write-Host "  1. 访问 https://github.com/new" -ForegroundColor White
Write-Host "  2. 仓库名称: ai-model-api-hub" -ForegroundColor White
Write-Host "  3. 选择 Public" -ForegroundColor White
Write-Host "  4. 点击 Create repository" -ForegroundColor White
Write-Host ""
$repoUrl = Read-Host "请粘贴仓库 URL (格式: https://github.com/用户名/ai-model-api-hub.git)"

if ($repoUrl -match "https://github\.com/[\w-]+/[\w-]+\.git") {
    git remote remove origin 2>$null
    git remote add origin $repoUrl
    git branch -M main
    
    Write-Host ""
    Write-Host "正在推送到 GitHub..." -ForegroundColor Yellow
    git push -u origin main
    
    Write-Host ""
    Write-Host "==========================================" -ForegroundColor Green
    Write-Host "  部署完成！" -ForegroundColor Green
    Write-Host "==========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "下一步操作：" -ForegroundColor Cyan
    Write-Host "  1. 访问你的 GitHub 仓库" -ForegroundColor White
    Write-Host "  2. 进入 Settings → Pages" -ForegroundColor White
    Write-Host "  3. Source 选择: main / / (root)" -ForegroundColor White
    Write-Host "  4. 点击 Save" -ForegroundColor White
    Write-Host "  5. 等待 1-2 分钟即可访问网站" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host "  [错误] URL 格式不正确" -ForegroundColor Red
    Write-Host "  请确保 URL 以 .git 结尾" -ForegroundColor Yellow
}
