// src/mcpClient.ts
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";


export async function listResourceGroups() {
  // 1. Point at your MCP server’s SSE endpoint
  const endpoint = new URL("http://localhost:5008/sse");

  // 2. Create transport & client
  const transport = new SSEClientTransport(endpoint);
  const client = new Client({ name: "mcp-ts-client", version: "1.0.0" });

  // 3. Open the SSE connection
  await client.connect(transport);

  // 4. Call the tool exactly as in your JSON
  const result = await client.callTool({
    name: "azmcp-group-list",
    arguments: {
      "retry-mode": "fixed",
      subscription: <YOUR_SUBSCRIPTION_ID>,
    },
  }); // ⬅️ returns { groups: [ … ] } :contentReference[oaicite:0]{index=0}

  return result;
}

// bootstrap & run
listResourceGroups()
  .then((groups) => {
    console.log("Resource Groups:");
    if (typeof groups.text === "string") {
      console.log(JSON.parse(groups.text));
    } else {
      console.error("Unexpected type for groups.text:", typeof groups.text);
    }
  })
  .catch((err) => {
    console.error("MCP call failed:", err);
  });
