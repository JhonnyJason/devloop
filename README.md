# Devloop

## Purpose

As it is possible to let AI agents work autonomously for a finite amount of steps in a well designed task execution workflow, we want to implement this in a clear deterministic fashion and we call it `devloop`.

The general goal is to reduce the supervisors workload, as this is the greatest bottleneck without real scaling options. This means we want to:
- reduce necessary interventions
- increase transparency of the system state
- increase efficiency of gathering the relevant information 
- increasing confidence in correctness

Hint: small and clear scopes for each execution steps are key.

## Documents and Directories
- [.vscode/](./.vscode/) - Directory for vscode settings
- [context/](./context/) - Directory for agent contexts -> Current status, TODOs, background information etc.
- [output/](./output/) - Directory for the build output -> deployable to npm
- [sources/](./sources/) - Directory for the source code
- [testing/](./testing/) - Directory for the testing implementation
- [toolset/](./toolset/) - Directory for the general toolset to manage this project - build and convenience scripts etc. 
- [.gitignore](./.gitignore) - File to tell git what to ignore
- [.gitmodules](./.gitmodules) - File to used to configure got sub-submodules
- [CLAUDE.md](./CLAUD.md) - Document to give claude some first context
- [package.json](./package.json) - File for npm - managing dependencies, scripts and some project details
- [README.md](./README.md) - This document :-) 

---

# License
[Unlicense JhonnyJason style](https://hackmd.io/nCpLO3gxRlSmKVG3Zxy2hA?view)
