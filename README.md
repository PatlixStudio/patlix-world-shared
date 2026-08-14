# patlix-world-shared

Shared contracts for **Patlix World**: types, enums and DTOs consumed by both `patlix-world-api` and `patlix-world-web`.

## Scope

- `src/types/agent.ts` — `AgentDto`, `AgentStatus`, `AgentModelConfig`, `AgentLocation`
- `src/types/task.ts` — `TaskDto`, `TaskStatus`
- `src/types/project.ts` — `ProjectDto`, `ProjectStatus`
- `src/types/company.ts` — `CompanyDto`
- `src/types/property.ts` — `PropertyDto`, `PropertyType`
- `src/types/world.ts` — `WorldPoint`, `ZoneDto`, `WorldSnapshot`
- `src/types/event.ts` — `PatlixEvent` union + `EventEnvelope` (WebSocket event model)
- `src/types/user.ts` — `UserDto`

Keep this package framework-agnostic: plain types/enums only, no NestJS/Angular imports.

## Build

```bash
npm install
npm run build   # emits dist/ (commonjs + d.ts)
npm run typecheck
```

## Import path

`@patlixworld/shared` (via `file:../../libs/patlix-world-shared` in `patlix-world-api`).
