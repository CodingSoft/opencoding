<p align="center">
  <a href="https://codingsoft.vercel.app">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="CodingSoft logo">
    </picture>
  </a>
</p>
<p align="center">Den open source AI-kodeagent.</p>
<p align="center">
  
  <a href="https://www.npmjs.com/package/codingsoft-ai"><img alt="npm" src="https://img.shields.io/npm/v/codingsoft-ai?style=flat-square" /></a>
  <a href="https://github.com/CodingSoft/codingsoft/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/CodingSoft/codingsoft/publish.yml?style=flat-square&branch=dev" /></a>
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

[![CodingSoft Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://codingsoft.vercel.app)

---

### Installation

```bash
# YOLO
curl -fsSL https://codingsoft.vercel.app/install | bash

# Pakkehåndteringer
npm i -g codingsoft-ai@latest        # eller bun/pnpm/yarn
scoop install codingsoft             # Windows
choco install codingsoft             # Windows
brew install CodingSoft/tap/codingsoft # macOS og Linux (anbefalet, altid up to date)
brew install codingsoft              # macOS og Linux (officiel brew formula, opdateres sjældnere)
sudo pacman -S codingsoft            # Arch Linux (Stable)
paru -S codingsoft-bin               # Arch Linux (Latest from AUR)
mise use -g codingsoft               # alle OS
nix run nixpkgs#codingsoft           # eller github:CodingSoft/codingsoft for nyeste dev-branch
```

> [!TIP]
> Fjern versioner ældre end 0.1.x før installation.

### Desktop-app (BETA)

CodingSoft findes også som desktop-app. Download direkte fra [releases-siden](https://github.com/CodingSoft/codingsoft/releases) eller [codingsoft.vercel.app/download](https://codingsoft.vercel.app/download).

| Platform              | Download                                |
| --------------------- | --------------------------------------- |
| macOS (Apple Silicon) | `codingsoft-desktop-darwin-aarch64.dmg` |
| macOS (Intel)         | `codingsoft-desktop-darwin-x64.dmg`     |
| Windows               | `codingsoft-desktop-windows-x64.exe`    |
| Linux                 | `.deb`, `.rpm`, eller AppImage          |

```bash
# macOS (Homebrew)
brew install --cask codingsoft-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/codingsoft-desktop
```

#### Installationsmappe

Installationsscriptet bruger følgende prioriteringsrækkefølge for installationsstien:

1. `$CODINGSOFT_INSTALL_DIR` - Tilpasset installationsmappe
2. `$XDG_BIN_DIR` - Sti der følger XDG Base Directory Specification
3. `$HOME/bin` - Standard bruger-bin-mappe (hvis den findes eller kan oprettes)
4. `$HOME/.codingsoft/bin` - Standard fallback

```bash
# Eksempler
OPENCODE_INSTALL_DIR=/usr/local/bin curl -fsSL https://codingsoft.vercel.app/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://codingsoft.vercel.app/install | bash
```

### Agents

CodingSoft har to indbyggede agents, som du kan skifte mellem med `Tab`-tasten.

- **build** - Standard, agent med fuld adgang til udviklingsarbejde
- **plan** - Skrivebeskyttet agent til analyse og kodeudforskning
  - Afviser filredigering som standard
  - Spørger om tilladelse før bash-kommandoer
  - Ideel til at udforske ukendte kodebaser eller planlægge ændringer

Derudover findes der en **general**-subagent til komplekse søgninger og flertrinsopgaver.
Den bruges internt og kan kaldes via `@general` i beskeder.

Læs mere om [agents](https://codingsoft.vercel.app/docs/agents).

### Dokumentation

For mere info om konfiguration af CodingSoft, [**se vores docs**](https://codingsoft.vercel.app/docs).

### Bidrag

Hvis du vil bidrage til CodingSoft, så læs vores [contributing docs](./CONTRIBUTING.md) før du sender en pull request.

### Bygget på CodingSoft

Hvis du arbejder på et projekt der er relateret til CodingSoft og bruger "codingsoft" som en del af navnet; f.eks. "codingsoft-dashboard" eller "codingsoft-mobile", så tilføj en note i din README, der tydeliggør at projektet ikke er bygget af CodingSoft-teamet og ikke er tilknyttet os på nogen måde.

### FAQ

#### Hvordan adskiller dette sig fra Claude Code?

Det minder meget om Claude Code i forhold til funktionalitet. Her er de vigtigste forskelle:

- 100% open source
- Ikke låst til en udbyder. Selvom vi anbefaler modellerne via [CodingSoft Zen](https://codingsoft.vercel.app/zen); kan CodingSoft bruges med Claude, OpenAI, Google eller endda lokale modeller. Efterhånden som modeller udvikler sig vil forskellene mindskes og priserne falde, så det er vigtigt at være provider-agnostic.
- LSP-support out of the box
- Fokus på TUI. CodingSoft er bygget af neovim-brugere og skaberne af [terminal.shop](https://terminal.shop); vi vil skubbe grænserne for hvad der er muligt i terminalen.
- Klient/server-arkitektur. Det kan f.eks. lade CodingSoft køre på din computer, mens du styrer den eksternt fra en mobilapp. Det betyder at TUI-frontend'en kun er en af de mulige clients.

---

**CodingSoft SA de CV**
