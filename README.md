# AI Terminal

> A modern AI-powered terminal assistant inspired by OpenCode, Claude Code, Gemini CLI, and Warp AI, powered locally by Ollama.

> **Project Status:** 🚧 In Development (Milestone 1)

---

## Vision

AI Terminal is a local-first AI coding assistant designed to provide a premium terminal experience.

Unlike a traditional chatbot, it is being built as an intelligent development companion capable of:

* Understanding projects automatically
* Reading and editing files
* Executing terminal commands (with permission)
* Maintaining project context
* Assisting throughout an entire coding session

The application will use **Ollama** as its local LLM backend while keeping the architecture modular and extensible.

---

## Tech Stack

### Runtime

* Node.js 24.18.0
* TypeScript
* npm

### Terminal UI

* React Ink
* ink-text-input
* ink-spinner
* ink-select-input
* ink-big-text
* ink-gradient
* chalk

### Planned Technologies

* Ollama Streaming API
* marked
* marked-terminal
* cli-highlight
* execa
* simple-git
* zod

---

## Current Project Structure

```text
src/

├── components/
├── hooks/
├── services/
├── types/
├── utils/
│
├── App.tsx
└── index.tsx
```

The project intentionally starts with a minimal folder structure. New directories will only be introduced when they are required.

---

## Development Philosophy

This project follows a few important principles:

* Build one feature at a time.
* Keep components small and focused.
* Prefer composition over large components.
* Maintain strict TypeScript typing.
* Design for extensibility.
* Stream responses instead of waiting for complete outputs.
* Keep the terminal UI clean and responsive.
* Never sacrifice readability for unnecessary abstractions.

---

## Roadmap

* [x] Milestone 1 — Project Foundation
* [ ] Milestone 2 — Interactive Input
* [ ] Milestone 3 — Ollama Streaming
* [ ] Milestone 4 — Markdown Rendering
* [ ] Milestone 5 — Conversation History
* [ ] Milestone 6 — Slash Commands
* [ ] Milestone 7 — Workspace Awareness
* [ ] Milestone 8 — Tool System
* [ ] Milestone 9 — AI Agent
* [ ] Milestone 10 — Memory & Plugins

---

## Current Progress

### ✅ Milestone 1

Completed:

* Project initialized
* TypeScript configured
* React Ink installed
* Initial folder structure created
* Base application ready for UI development

---

## Planned Architecture

```text
User
 │
 ▼
React Ink UI
 │
 ▼
Chat Manager
 │
 ▼
Agent
 │
 ├── Filesystem
 ├── Shell
 ├── Git
 ├── Search
 └── Memory
 │
 ▼
Ollama
 │
 ▼
Streaming Response
 │
 ▼
Terminal UI
```

---

## Future Features

* Local AI with Ollama
* Streaming chat responses
* Markdown rendering
* Syntax highlighting
* File editing
* Command execution
* Git integration
* Workspace awareness
* Session memory
* Persistent memory
* Plugin system
* MCP support
* Semantic search
* Docker integration
* Voice mode
* Autonomous coding mode

---

## Development Status

This project is currently focused on building a strong foundation before implementing AI functionality.

Each milestone builds on the previous one to ensure a clean, scalable, and production-ready architecture.

---

## License

MIT
