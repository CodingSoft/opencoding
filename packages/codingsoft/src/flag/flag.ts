import { Config } from "effect"

function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

function falsy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "false" || value === "0"
}

export namespace Flag {
  export const CODINGSOFT_AUTO_SHARE = truthy("CODINGSOFT_AUTO_SHARE")
  export const CODINGSOFT_GIT_BASH_PATH = process.env["CODINGSOFT_GIT_BASH_PATH"]
  export const CODINGSOFT_CONFIG = process.env["CODINGSOFT_CONFIG"]
  export declare const CODINGSOFT_PURE: boolean
  export declare const CODINGSOFT_TUI_CONFIG: string | undefined
  export declare const CODINGSOFT_CONFIG_DIR: string | undefined
  export declare const CODINGSOFT_PLUGIN_META_FILE: string | undefined
  export const CODINGSOFT_CONFIG_CONTENT = process.env["CODINGSOFT_CONFIG_CONTENT"]
  export const CODINGSOFT_DISABLE_AUTOUPDATE = truthy("CODINGSOFT_DISABLE_AUTOUPDATE")
  export const CODINGSOFT_ALWAYS_NOTIFY_UPDATE = truthy("CODINGSOFT_ALWAYS_NOTIFY_UPDATE")
  export const CODINGSOFT_DISABLE_PRUNE = truthy("CODINGSOFT_DISABLE_PRUNE")
  export const CODINGSOFT_DISABLE_TERMINAL_TITLE = truthy("CODINGSOFT_DISABLE_TERMINAL_TITLE")
  export const CODINGSOFT_SHOW_TTFD = truthy("CODINGSOFT_SHOW_TTFD")
  export const CODINGSOFT_PERMISSION = process.env["CODINGSOFT_PERMISSION"]
  export const CODINGSOFT_DISABLE_DEFAULT_PLUGINS = truthy("CODINGSOFT_DISABLE_DEFAULT_PLUGINS")
  export const CODINGSOFT_DISABLE_LSP_DOWNLOAD = truthy("CODINGSOFT_DISABLE_LSP_DOWNLOAD")
  export const CODINGSOFT_ENABLE_EXPERIMENTAL_MODELS = truthy("CODINGSOFT_ENABLE_EXPERIMENTAL_MODELS")
  export const CODINGSOFT_DISABLE_AUTOCOMPACT = truthy("CODINGSOFT_DISABLE_AUTOCOMPACT")
  export const CODINGSOFT_DISABLE_MODELS_FETCH = truthy("CODINGSOFT_DISABLE_MODELS_FETCH")
  export const CODINGSOFT_DISABLE_CLAUDE_CODE = truthy("CODINGSOFT_DISABLE_CLAUDE_CODE")
  export const CODINGSOFT_DISABLE_CLAUDE_CODE_PROMPT =
    CODINGSOFT_DISABLE_CLAUDE_CODE || truthy("CODINGSOFT_DISABLE_CLAUDE_CODE_PROMPT")
  export const CODINGSOFT_DISABLE_CLAUDE_CODE_SKILLS =
    CODINGSOFT_DISABLE_CLAUDE_CODE || truthy("CODINGSOFT_DISABLE_CLAUDE_CODE_SKILLS")
  export const CODINGSOFT_DISABLE_EXTERNAL_SKILLS =
    CODINGSOFT_DISABLE_CLAUDE_CODE_SKILLS || truthy("CODINGSOFT_DISABLE_EXTERNAL_SKILLS")
  export declare const CODINGSOFT_DISABLE_PROJECT_CONFIG: boolean
  export const CODINGSOFT_FAKE_VCS = process.env["CODINGSOFT_FAKE_VCS"]
  export declare const CODINGSOFT_CLIENT: string
  export const CODINGSOFT_SERVER_PASSWORD = process.env["CODINGSOFT_SERVER_PASSWORD"]
  export const CODINGSOFT_SERVER_USERNAME = process.env["CODINGSOFT_SERVER_USERNAME"]
  export const CODINGSOFT_ENABLE_QUESTION_TOOL = truthy("CODINGSOFT_ENABLE_QUESTION_TOOL")

  // Experimental
  export const CODINGSOFT_EXPERIMENTAL = truthy("CODINGSOFT_EXPERIMENTAL")
  export const CODINGSOFT_EXPERIMENTAL_FILEWATCHER = Config.boolean("CODINGSOFT_EXPERIMENTAL_FILEWATCHER").pipe(
    Config.withDefault(false),
  )
  export const CODINGSOFT_EXPERIMENTAL_DISABLE_FILEWATCHER = Config.boolean(
    "CODINGSOFT_EXPERIMENTAL_DISABLE_FILEWATCHER",
  ).pipe(Config.withDefault(false))
  export const CODINGSOFT_EXPERIMENTAL_ICON_DISCOVERY =
    CODINGSOFT_EXPERIMENTAL || truthy("CODINGSOFT_EXPERIMENTAL_ICON_DISCOVERY")

  const copy = process.env["CODINGSOFT_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"]
  export const CODINGSOFT_EXPERIMENTAL_DISABLE_COPY_ON_SELECT =
    copy === undefined ? process.platform === "win32" : truthy("CODINGSOFT_EXPERIMENTAL_DISABLE_COPY_ON_SELECT")
  export const CODINGSOFT_ENABLE_EXA =
    truthy("CODINGSOFT_ENABLE_EXA") || CODINGSOFT_EXPERIMENTAL || truthy("CODINGSOFT_EXPERIMENTAL_EXA")
  export const CODINGSOFT_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS = number("CODINGSOFT_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS")
  export const CODINGSOFT_EXPERIMENTAL_OUTPUT_TOKEN_MAX = number("CODINGSOFT_EXPERIMENTAL_OUTPUT_TOKEN_MAX")
  export const CODINGSOFT_EXPERIMENTAL_OXFMT = CODINGSOFT_EXPERIMENTAL || truthy("CODINGSOFT_EXPERIMENTAL_OXFMT")
  export const CODINGSOFT_EXPERIMENTAL_LSP_TY = truthy("CODINGSOFT_EXPERIMENTAL_LSP_TY")
  export const CODINGSOFT_EXPERIMENTAL_LSP_TOOL = CODINGSOFT_EXPERIMENTAL || truthy("CODINGSOFT_EXPERIMENTAL_LSP_TOOL")
  export const CODINGSOFT_DISABLE_FILETIME_CHECK = Config.boolean("CODINGSOFT_DISABLE_FILETIME_CHECK").pipe(
    Config.withDefault(false),
  )
  export const CODINGSOFT_EXPERIMENTAL_PLAN_MODE = CODINGSOFT_EXPERIMENTAL || truthy("CODINGSOFT_EXPERIMENTAL_PLAN_MODE")
  export const CODINGSOFT_EXPERIMENTAL_WORKSPACES = CODINGSOFT_EXPERIMENTAL || truthy("CODINGSOFT_EXPERIMENTAL_WORKSPACES")
  export const CODINGSOFT_EXPERIMENTAL_MARKDOWN = !falsy("CODINGSOFT_EXPERIMENTAL_MARKDOWN")
  export const CODINGSOFT_MODELS_URL = process.env["CODINGSOFT_MODELS_URL"]
  export const CODINGSOFT_MODELS_PATH = process.env["CODINGSOFT_MODELS_PATH"]
  export const CODINGSOFT_DISABLE_EMBEDDED_WEB_UI = truthy("CODINGSOFT_DISABLE_EMBEDDED_WEB_UI")
  export const CODINGSOFT_DB = process.env["CODINGSOFT_DB"]
  export const CODINGSOFT_DISABLE_CHANNEL_DB = truthy("CODINGSOFT_DISABLE_CHANNEL_DB")
  export const CODINGSOFT_SKIP_MIGRATIONS = truthy("CODINGSOFT_SKIP_MIGRATIONS")
  export const CODINGSOFT_STRICT_CONFIG_DEPS = truthy("CODINGSOFT_STRICT_CONFIG_DEPS")

  function number(key: string) {
    const value = process.env[key]
    if (!value) return undefined
    const parsed = Number(value)
    return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined
  }
}

// Dynamic getter for CODINGSOFT_DISABLE_PROJECT_CONFIG
// This must be evaluated at access time, not module load time,
// because external tooling may set this env var at runtime
Object.defineProperty(Flag, "CODINGSOFT_DISABLE_PROJECT_CONFIG", {
  get() {
    return truthy("CODINGSOFT_DISABLE_PROJECT_CONFIG")
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for CODINGSOFT_TUI_CONFIG
// This must be evaluated at access time, not module load time,
// because tests and external tooling may set this env var at runtime
Object.defineProperty(Flag, "CODINGSOFT_TUI_CONFIG", {
  get() {
    return process.env["CODINGSOFT_TUI_CONFIG"]
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for CODINGSOFT_CONFIG_DIR
// This must be evaluated at access time, not module load time,
// because external tooling may set this env var at runtime
Object.defineProperty(Flag, "CODINGSOFT_CONFIG_DIR", {
  get() {
    return process.env["CODINGSOFT_CONFIG_DIR"]
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for CODINGSOFT_PURE
// This must be evaluated at access time, not module load time,
// because the CLI can set this flag at runtime
Object.defineProperty(Flag, "CODINGSOFT_PURE", {
  get() {
    return truthy("CODINGSOFT_PURE")
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for CODINGSOFT_PLUGIN_META_FILE
// This must be evaluated at access time, not module load time,
// because tests and external tooling may set this env var at runtime
Object.defineProperty(Flag, "CODINGSOFT_PLUGIN_META_FILE", {
  get() {
    return process.env["CODINGSOFT_PLUGIN_META_FILE"]
  },
  enumerable: true,
  configurable: false,
})

// Dynamic getter for CODINGSOFT_CLIENT
// This must be evaluated at access time, not module load time,
// because some commands override the client at runtime
Object.defineProperty(Flag, "CODINGSOFT_CLIENT", {
  get() {
    return process.env["CODINGSOFT_CLIENT"] ?? "cli"
  },
  enumerable: true,
  configurable: false,
})
