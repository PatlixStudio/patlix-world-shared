/** Lifecycle of a single step inside an Aurel-generated plan. */
export enum PlanStepStatus {
  PENDING = 'PENDING',
  ASSIGNED = 'ASSIGNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
}

/** Lifecycle of an orchestration plan (Aurel: request → plan → approve → assign). */
export enum PlanStatus {
  PLANNING = 'PLANNING',
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
}

/** One work item in a plan; maps to a Task and an agent once assigned. */
export interface PlanStepDto {
  id: string;
  title: string;
  description: string;
  /** Agent role expected to execute this step (e.g. "Backend Developer"). */
  role: string;
  status: PlanStepStatus;
  taskId?: string;
  agentId?: string;
}

export interface PlanDto {
  id: string;
  requestTitle: string;
  requestDescription: string;
  status: PlanStatus;
  steps: PlanStepDto[];
  createdAt: string;
  updatedAt: string;
}

/** A high-level request handed to Aurel for planning. */
export interface OrchestrationRequest {
  title: string;
  description?: string;
  /** Gate plan execution on an explicit human approval (default true). */
  requireApproval?: boolean;
}