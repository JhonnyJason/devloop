# Task 6
Implement CLI-UI Controls

## Details
Usecases based on decision-chain:
- "start task execution" -> starts taskloop execution
- "configure" -> "set telegram-bot-token" -> retrieve and store tgToken
- "configure" -> "set chat id" -> retrieve and store chatId
- "configure" -> "check config" -> print relevant config
- "configure" -> "back" -> back to top-level decision
- "die!" -> shutdown

## Relevant modules:
- mainprocessmodule
- userconfigurationmodule
- taskloopmodule

## Relevant tests:
- Main manual test in `testing/testing-wd/`

## SubTasks
- [X] implement shutdown
- [X] Test shutdown
- [x] implement user-configuration loop
- [x] implement configure->back
- [x] test configure->back
- [x] implement configure->set tgToken, configure->set tgChatId and configure->check config
- [ ] test user configuration flows
- [ ] implement start and cancel taskloop
- [ ] test start and cancel taskloop
