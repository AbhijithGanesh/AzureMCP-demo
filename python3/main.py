import asyncio
import json
from modelcontextprotocol.sdk.client import Client
from modelcontextprotocol.sdk.client.sse import SSEClientTransport

async def list_resource_groups(subscription_id: str):
    # 1. Point at your MCP server’s SSE endpoint
    endpoint = "http://localhost:5008/sse"

    # 2. Create transport & client
    transport = SSEClientTransport(endpoint)
    client = Client(name="mcp-py-client", version="1.0.0")

    # 3. Open the SSE connection
    await client.connect(transport)

    # 4. Call the tool exactly as in your JSON
    result = await client.call_tool(
        name="azmcp-group-list",
        arguments={
            "retry-mode": "fixed",
            "subscription": subscription_id,
        },
    )  # expects something like: {"groups": [ … ]}

    return result

async def main():
    subscription_id = "<YOUR_SUBSCRIPTION_ID>"
    try:
        groups = await list_resource_groups(subscription_id)
        print("Resource Groups:")
        # if the SDK returns text payload, parse JSON
        if isinstance(groups, dict) and "groups" in groups:
            print(json.dumps(groups["groups"], indent=2))
        else:
            print(groups)
    except Exception as e:
        print("MCP call failed:", e)

if __name__ == "__main__":
    asyncio.run(main())
