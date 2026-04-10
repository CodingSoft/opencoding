<p align="center">
  <a href="https://codingsoft.vercel.app">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="CodingSoft logo">
    </picture>
  </a>
</p>
<p align="center">CodingSoft je open source AI agent za programiranje.</p>
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

### Instalacija

```bash
# YOLO
curl -fsSL https://codingsoft.vercel.app/install | bash

# Package manageri
npm i -g codingsoft-ai@latest        # ili bun/pnpm/yarn
scoop install codingsoft             # Windows
choco install codingsoft             # Windows
brew install CodingSoft/tap/codingsoft # macOS i Linux (preporučeno, uvijek ažurno)
sudo pacman -S codingsoft            # Arch Linux (Stable)
paru -S codingsoft-bin               # Arch Linux (Latest from AUR)
mise use -g codingsoft               # Bilo koji OS
nix run nixpkgs#codingsoft           # ili github:CodingSoft/codingsoft za najnoviji dev branch
```

> [!TIP]
> Ukloni verzije starije od 0.1.x prije instalacije.

### Desktop aplikacija (BETA)

CodingSoft je dostupan i kao desktop aplikacija. Preuzmi je direktno sa [stranice izdanja](https://github.com/CodingSoft/codingsoft/releases) ili sa [codingsoft.vercel.app/download](https://codingsoft.vercel.app/download).

| Platforma             | Preuzimanje                             |
| --------------------- | --------------------------------------- |
| macOS (Apple Silicon) | `codingsoft-desktop-darwin-aarch64.dmg` |
| macOS (Intel)         | `codingsoft-desktop-darwin-x64.dmg`     |
| Windows               | `codingsoft-desktop-windows-x64.exe`    |
| Linux                 | `.deb`, `.rpm`, ili AppImage            |

```bash
# macOS (Homebrew)
brew install --cask codingsoft-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/codingsoft-desktop
```

#### Instalacijski direktorij

Instalacijska skripta koristi sljedeći redoslijed prioriteta za putanju instalacije:

1. `$CODINGSOFT_INSTALL_DIR` - Prilagođeni instalacijski direktorij
2. `$XDG_BIN_DIR` - Putanja usklađena sa XDG Base Directory specifikacijom
3. `$HOME/bin` - Standardni korisnički bin direktorij (ako postoji ili se može kreirati)
4. `$HOME/.codingsoft/bin` - Podrazumijevana rezervna lokacija

```bash
# Primjeri
CODINGSOFT_INSTALL_DIR=/usr/local/bin curl -fsSL https://codingsoft.vercel.app/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://codingsoft.vercel.app/install | bash
```

### Agenti

CodingSoft uključuje dva ugrađena agenta između kojih možeš prebacivati tasterom `Tab`.

- **build** - Podrazumijevani agent sa punim pristupom za razvoj
- **plan** - Agent samo za čitanje za analizu i istraživanje koda
  - Podrazumijevano zabranjuje izmjene datoteka
  - Traži dozvolu prije pokretanja bash komandi
  - Idealan za istraživanje nepoznatih codebase-ova ili planiranje izmjena

Uključen je i **general** pod-agent za složene pretrage i višekoračne zadatke.
Koristi se interno i može se pozvati pomoću `@general` u porukama.

Saznaj više o [agentima](https://codingsoft.vercel.app/docs/agents).

### Dokumentacija

Za više informacija o konfiguraciji CodingSoft-a, [**pogledaj dokumentaciju**](https://codingsoft.vercel.app/docs).

### Doprinosi

Ako želiš doprinositi CodingSoft-u, pročitaj [upute za doprinošenje](./CONTRIBUTING.md) prije slanja pull requesta.

### Gradnja na CodingSoft-u

Ako radiš na projektu koji je povezan s CodingSoft-om i koristi "codingsoft" kao dio naziva, npr. "codingsoft-dashboard" ili "codingsoft-mobile", dodaj napomenu u svoj README da projekat nije napravio CodingSoft tim i da nije povezan s nama.

### FAQ

#### Po čemu se razlikuje od Claude Code-a?

Po mogućnostima je vrlo sličan Claude Code-u. Ključne razlike su:

- 100% open source
- Nije vezan za jednog provajdera. Iako preporučujemo modele koje nudimo kroz [CodingSoft Zen](https://codingsoft.vercel.app/zen), CodingSoft možeš koristiti s Claude, OpenAI, Google ili čak lokalnim modelima. Kako modeli napreduju, razlike među njima će se smanjivati, a cijene padati, zato je nezavisnost od provajdera važna.
- LSP podrška odmah po instalaciji
- Fokus na TUI. CodingSoft grade neovim korisnici i kreatori [terminal.shop](https://terminal.shop); pomjeraćemo granice onoga što je moguće u terminalu.
- Klijent/server arhitektura. To, recimo, omogućava da CodingSoft radi na tvom računaru dok ga daljinski koristiš iz mobilne aplikacije, što znači da je TUI frontend samo jedan od mogućih klijenata.

---

**CodingSoft SA de CV**
