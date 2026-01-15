# Overview

## Purpose
Devloop is a CLI tool for running AI agents autonomously in well-designed task execution workflows. Goal: reduce supervisor workload by minimizing interventions while maximizing transparency and confidence.

## Architecture

```
index.coffee
    ↓ initialize all modules
    ↓ cliStartup()
startupmodule
    ↓ extractArguments()
cliargumentsmodule (meow)
    ↓ execute(args)
mainprocessmodule  ← TODO: actual devloop logic
```

## Modules

| Module | Purpose |
|--------|---------|
| index | Entry point, module init |
| allmodules | Module aggregator/registry |
| configmodule | CLI config (name, version) |
| cliargumentsmodule | CLI arg parsing via meow |
| startupmodule | Startup orchestration |
| mainprocessmodule | Main execution (TODO) |
| debugmodule | Debug flag configuration |

## Current State
- CLI skeleton complete
- Argument parsing: `--root`/`-r` for working directory
- Main execution logic not yet implemented

## Next Step
Define what `execute(args)` should actually do - the core devloop behavior.
