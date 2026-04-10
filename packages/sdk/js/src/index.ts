export * from "./client.js"
export * from "./server.js"

import { createOpencodeServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export async function createOpencoding(options?: ServerOptions) {
  const { createOpencodingClient } = await import("./client.js")
  const server = await createOpencodeServer({
    ...options,
  })

  const client = createOpencodingClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
