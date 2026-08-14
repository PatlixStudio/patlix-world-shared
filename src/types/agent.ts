/** Lifecycle of an AI agent working in Patlix World. */
export enum AgentStatus {
  CREATED = 'CREATED',
  IDLE = 'IDLE',
  ASSIGNED = 'ASSIGNED',
  WORKING = 'WORKING',
  WAITING = 'WAITING',
  NAVIGATING = 'NAVIGATING',
  MEETING = 'MEETING',
  COMMUNICATING = 'COMMUNICATING',
  BLOCKED = 'BLOCKED',
  OFFLINE = 'OFFLINE',
}

/** Which model/provider an agent is configured to use (decoupled from agent logic). */
export interface AgentModelConfig {
  provider: string;
  model: string;
  baseUrl?: string;
  temperature?: number;
}

/** Physical presence in the world (backend is the source of truth for location). */
export interface AgentLocation {
  zoneId: string;
  x: number;
  y: number;
  z: number;
  /** Facing direction in radians. */
  heading: number;
}

export interface AgentDto {
  id: string;
  name: string;
  role: string;
  persona: string;
  status: AgentStatus;
  model: AgentModelConfig;
  companyId?: string;
  projectId?: string;
  currentTaskId?: string;
  currentGoal?: string;
  currentActivity?: string;
  location: AgentLocation;
  createdAt: string;
  updatedAt: string;
}