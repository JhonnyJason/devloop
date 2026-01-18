# Task 7
Implement task-execution cycle

## Details
The Taskloop loops through cycles of 3 phases.
All three phases (find, execute, review) follow the same pattern:
```
read prompt file → runClaude(prompt) → handle result
```

**Prompt files (in working directory):**
- `ai/prompts/find-next-task.md` → instructs agent to identify next task
- `ai/next-task.md` → the task itself (output of find, input for execute)
- `ai/prompts/review-task.md` → instructs agent to review execution

**Package:** `@anthropic-ai/claude-agent-sdk`

## Relevant modules:
- taskloopmodule

## Relevant tests:
- Main manual test in `testing/testing-wd/`

## SubTasks
- [ ] 1. Integrate claude-agent-sdk - import, configure, basic wrapper
- [ ] 2. Implement `runClaude(prompt)` - execute prompt via SDK, return result
- [ ] 3. Implement prompt loading - read prompt files from working directory
- [ ] 4. Wire up phase logic (find, execute, review use their respective prompts)
- [ ] 5. State transitions - persist state after each phase
- [ ] 6. Git commit handling - commit after each execution
- [ ] 7. Intervention detection - check output for intervention requests
