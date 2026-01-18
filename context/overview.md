# Overview

This is AI onboarding context - structure, core ideas, conventions, and pointers to other information.
For project planning (status, goals, backlog), see `plan/`.

## File Structure

```
devloop/
├── sources/source/       ← Modules live here (preferably CoffeeScript, may be JS/TS)
│   ├── index/
│   ├── allmodules/
│   ├── configmodule/
│   ├── cliargumentsmodule/
│   ├── startupmodule/
│   ├── mainprocessmodule/
│   ├── pathmodule/
│   ├── taskloopmodule/
│   ├── userconfigurationmodule/
│   ├── debugmodule/
│   ├── statemodule/
│   └── uimodule/
├── output/               ← Compiled JS output
├── context/              ← AI comprehension (this dir)
├── plan/                 ← Project coordination
│   ├── status.md         ← Where we are
│   ├── current-task.md   ← Current task details
│   ├── features.md       ← Feature list
│   └── deferred.md       ← Deferred issues
├── testing/              ← Test infrastructure
└── toolset/              ← Build system (git submodule)
```

## Purpose
Devloop is a CLI tool for running AI agents autonomously in well-designed task execution workflows. Goal: reduce supervisor workload by minimizing interventions while maximizing transparency and confidence.

## Architecture

```
index.coffee
    ↓ initialize all modules
    ↓ cliStartup()
startupmodule
    ↓ extractArguments()
    ↓ setWorkingDirectory(wd)
    ↓ execute()
mainprocessmodule (outer user decision loop)
    ├─→ taskloopmodule.execute()      ← task execution cycle
    ├─→ userconfigurationmodule.configure()
    └─→ exit
```

## Modules

| Module | Purpose |
|--------|---------|
| index | Entry point, module init |
| allmodules | Module aggregator/registry |
| configmodule | Config management (static + encrypted local config, onChange listeners) |
| cliargumentsmodule | CLI arg parsing via meow |
| startupmodule | Startup orchestration |
| mainprocessmodule | Outer user decision loop |
| pathmodule | Centralized path management |
| taskloopmodule | Task execution cycle (shell in place, claude execution mocked) |
| tgmodule | Telegram notifications (send messages via bot API) |
| userconfigurationmodule | User config UI (tgToken, tgChatId, maxCycles) |
| debugmodule | Debug flag configuration |
| statemodule | Runtime state management |
| uimodule | CLI user input (enquirer-based) |

## Module Testing

Individual modules can be tested in isolation via `testing/module-tests/<module>/`.
Entry scripts import directly from `output/<module>.js` and exercise specific functions.
Run with: `node testing/module-tests/<module>/test-<function>.js`

## Project Management Files

Files for planning are maintained in the `plan/` directory.
For a starting-point read `plan/README.md`.

