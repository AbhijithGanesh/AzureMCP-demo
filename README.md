# 🚀 Azure MCP Server Tutorial

> [!IMPORTANT]  
> This repository is a part of my deep dive into Azure MCP server session hosted at Microsoft, Chennai office on the 17th of May

Welcome to the Azure MCP Server tutorial! This repository demonstrates how to set up and run an MCP server with different implementations.

## 📋 Prerequisites

- [Bun](https://bun.sh/) package manager installed
- Azure subscription
- Python 3.12+ (for Python implementation)
- Node.js/TypeScript environment (for TypeScript implementation)

## 🌟 Quick Start

1. Clone this repository
2. Start the MCP server:
   ```bash
   ./start-server.sh
   ```

## 📁 Project Structure

```
.
├── start-server.sh           # Server startup script (SSE transport)
└── custom-mcp-server/       # Custom implementations
    ├── python3/            # Python 3.12 implementation
    │   ├── main.py        # Python entry point
    │   └── pyproject.toml # Python dependencies
    └── typescript/        # TypeScript implementation
        ├── index.ts      # TypeScript entry point
        └── package.json  # Node.js dependencies
```

## 🛠️ Features

- Server-Sent Events (SSE) transport support through `@azure/mcp`
- Language-specific implementations:
  - Python 3.12 using `modelcontextprotocol` package
  - TypeScript using `@modelcontextprotocol/sdk`
- Easy setup with dependency management:
  - Python: Using modern packaging with `pyproject.toml`
  - TypeScript: Using `package.json` with Bun package manager

## 🔧 Configuration

The server uses SSE (Server-Sent Events) transport by default:

```bash
bunx -y @azure/mcp@latest server start --transport sse
```

## 📦 Installation

### Python Implementation

```bash
cd custom-mcp-server/python3
python -m venv .venv
source .venv/bin/activate
pip install -e .
```

### TypeScript Implementation

```bash
cd custom-mcp-server/typescript
bun install
```

## 🚀 Running Examples

### Python

```bash
cd custom-mcp-server/python3
python main.py
```

### TypeScript

```bash
cd custom-mcp-server/typescript
bun run index.ts
```

## 📚 Dependencies

### Python

- modelcontextprotocol >= 0.1.0
- Python 3.12 or higher

### TypeScript

- @modelcontextprotocol/sdk ^1.11.3

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or create issues.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⭐ Related Resources

- [Azure MCP Documentation](https://learn.microsoft.com/azure/messaging)
- [Azure Message Channel Protocol](https://github.com/Azure/azure-mcp)
- [Model Context Protocol SDK](https://www.npmjs.com/package/@modelcontextprotocol/sdk)
