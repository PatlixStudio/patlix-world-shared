/** Full task lifecycle. The 3D world reflects these states. */
export enum TaskStatus {
  BACKLOG = 'BACKLOG',
  PLANNED = 'PLANNED',
  ASSIGNED = 'ASSIGNED',
  IN_PROGRESS = 'IN_PROGRESS',
  WAITING = 'WAITING',
  REVIEW = 'REVIEW',
  APPROVED = 'APPROVED',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  BLOCKED = 'BLOCKED',
  CANCELLED = 'CANCELLED',
}

export interface TaskDto {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  projectId?: string;
  assignedAgentId?: string;
  /** Owning orchestration plan, when created by Aurel. */
  planId?: string;
  progress: number;
  /** Most recent human-readable activity, e.g. "Running integration tests". */
  currentActivity?: string;
  createdAt: string;
  updatedAt: string;
}