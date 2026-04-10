<p align="center">
  <a href="https://opencoding.vercel.app">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="CodingSoft logo">
    </picture>
  </a>
</p>
<p align="center">開源的 AI Coding Agent。</p>
<p align="center">
  
   <a href="https://www.npmjs.com/package/codingsoft-ai"><img alt="npm" src="https://img.shields.io/npm/v/codingsoft-ai?style=flat-square" /></a>
  <a href="https://github.com/CodingSoft/opencoding/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/CodingSoft/opencoding/publish.yml?style=flat-square&branch=dev" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zht.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.gr.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a>
</p>

[![CodingSoft Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://opencoding.vercel.app)

---

### 安裝

```bash
# 直接安裝 (YOLO)
curl -fsSL https://opencoding.vercel.app/install | bash

# 套件管理員
npm i -g codingsoft-ai@latest        # 也可使用 bun/pnpm/yarn
scoop install codingsoft             # Windows
choco install codingsoft             # Windows
brew install CodingSoft/tap/codingsoft # macOS 與 Linux（推薦，始終保持最新）
sudo pacman -S codingsoft            # Arch Linux (Stable)
paru -S codingsoft-bin               # Arch Linux (Latest from AUR)
mise use -g codingsoft               # 任何作業系統
nix run nixpkgs#codingsoft           # 或使用 github:CodingSoft/codingsoft 以取得最新開發分支
```

> [!TIP]
> 安裝前請先移除 0.1.x 以前的舊版本。

### 桌面應用程式 (BETA)

CodingSoft 也提供桌面版應用程式。您可以直接從 [發佈頁面 (releases page)](https://github.com/CodingSoft/codingsoft/releases) 或 [codingsoft.vercel.app/download](https://codingsoft.vercel.app/download) 下載。

| 平台                  | 下載連結                                |
| --------------------- | --------------------------------------- |
| macOS (Apple Silicon) | `codingsoft-desktop-darwin-aarch64.dmg` |
| macOS (Intel)         | `codingsoft-desktop-darwin-x64.dmg`     |
| Windows               | `codingsoft-desktop-windows-x64.exe`    |
| Linux                 | `.deb`, `.rpm`, 或 AppImage             |

```bash
# macOS (Homebrew Cask)
brew install --cask codingsoft-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/codingsoft-desktop
```

#### 安裝目錄

安裝腳本會依據以下優先順序決定安裝路徑：

1. `$CODINGSOFT_INSTALL_DIR` - 自定義安裝目錄
2. `$XDG_BIN_DIR` - 符合 XDG 基礎目錄規範的路徑
3. `$HOME/bin` - 標準使用者執行檔目錄 (若存在或可建立)
4. `$HOME/.codingsoft/bin` - 預設備用路徑

```bash
# 範例
CODINGSOFT_INSTALL_DIR=/usr/local/bin curl -fsSL https://codingsoft.vercel.app/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://opencoding.vercel.app/install | bash
```

### Agents

CodingSoft 內建了兩種 Agent，您可以使用 `Tab` 鍵快速切換。

- **build** - 預設模式，具備完整權限的 Agent，適用於開發工作。
- **plan** - 唯讀模式，適用於程式碼分析與探索。
  - 預設禁止修改檔案。
  - 執行 bash 指令前會詢問權限。
  - 非常適合用來探索陌生的程式碼庫或規劃變更。

此外，CodingSoft 還包含一個 **general** 子 Agent，用於處理複雜搜尋與多步驟任務。此 Agent 供系統內部使用，亦可透過在訊息中輸入 `@general` 來呼叫。

了解更多關於 [Agents](https://codingsoft.vercel.app/docs/agents) 的資訊。

### 線上文件

關於如何設定 CodingSoft 的詳細資訊，請參閱我們的 [**官方文件**](https://codingsoft.vercel.app/docs)。

### 參與貢獻

如果您有興趣參與 CodingSoft 的開發，請在提交 Pull Request 前先閱讀我們的 [貢獻指南 (Contributing Docs)](./CONTRIBUTING.md)。

### 基於 CodingSoft 進行開發

如果您正在開發與 CodingSoft 相關的專案，並在名稱中使用了 "codingsoft"（例如 "codingsoft-dashboard" 或 "codingsoft-mobile"），請在您的 README 中加入聲明，說明該專案並非由 CodingSoft 團隊開發，且與我們沒有任何隸屬關係。

### 常見問題 (FAQ)

#### 這跟 Claude Code 有什麼不同？

在功能面上與 Claude Code 非常相似。以下是關鍵差異：

- 100% 開源。
- 不綁定特定的服務提供商。雖然我們推薦使用透過 [CodingSoft Zen](https://opencoding.vercel.app/zen) 提供的模型，但 CodingSoft 也可搭配 Claude, OpenAI, Google 甚至本地模型使用。隨著模型不斷演進，彼此間的差距會縮小且價格會下降，因此具備「不限廠商 (provider-agnostic)」的特性至關重要。
- 內建 LSP (語言伺服器協定) 支援。
- 專注於終端機介面 (TUI)。CodingSoft 由 Neovim 愛好者與 [terminal.shop](https://terminal.shop) 的創作者打造。我們將不斷挑戰終端機介面的極限。
- 客戶端/伺服器架構 (Client/Server Architecture)。這讓 CodingSoft 能夠在您的電腦上運行的同時，由行動裝置進行遠端操控。這意味著 TUI 前端只是眾多可能的客戶端之一。

---

**CodingSoft SA de CV**
