/** Lifecycle of a workflow (a multi-task Aurel-orchestrated unit of work). */
export enum WorkflowStatus {
  PENDING = 'PENDING',
  RUNNING = 'RUNNING',
  WAITING_APPROVAL = 'WAITING_APPROVAL',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
}

export interface WorkflowDto {
  id: string;
  title: string;
  description: string;
  status: WorkflowStatus;
  projectId?: string;
  /** Task ids that make up this workflow. */
  taskIds: string[];
  createdAt: string;
  updatedAt: string;
}