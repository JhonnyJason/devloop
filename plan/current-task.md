# Task 5
Upgrade Architecture.

## Details
Implementing the loop for top-level user decision prompts separation into 3 modules
- mainprocessmodule -> top level loop
- userconfigurationmodule -> option for user to configure tgToken and tgChatId
- taskloopmodule -> the effective Task loop

Another module was conceived as well: pathmodule
The idea hear is to manage the paths centrally and not in each module.

## Relevant tests:
- Main manual test in `testing/testing-wd/`

## SubTasks
- [x] Create the new modules
- [x] Move existing code to the relevant
- [ ] Check integrity of the update
- [ ] Test the basic UI flow and proceed to the implement the next feature (as a next task) 

