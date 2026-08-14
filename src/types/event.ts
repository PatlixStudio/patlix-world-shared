import type { AgentDto, AgentLocation } from './agent';
import type { TaskDto } from './task';
import type { ProjectDto } from './project';
import type { PropertyDto } from './property';
import type { CompanyDto } from './company';

/**
 * Domain events emitted by the backend and broadcast over the `/world` socket.
 * The 3D renderer is a consumer of these events, never their source.
 */
export type PatlixEvent =
  | { type: 'agent.created'; agent: AgentDto }
  | { type: 'agent.updated'; agent: AgentDto }
  | { type: 'agent.status.changed'; agentId: string; status: string; previous?: string }
  | { type: 'agent.location.changed'; agentId: string; location: AgentLocation }
  | { type: 'agent.task.assigned'; agentId: string; taskId: string }
  | { type: 'agent.task.started'; agentId: string; taskId: string }
  | { type: 'agent.task.completed'; agentId: string; taskId: string }
  | { type: 'agent.task.failed'; agentId: string; taskId: string; error?: string }
  | { type: 'agent.tool.started'; agentId: string; tool: string; description?: string }
  | { type: 'agent.tool.completed'; agentId: string; tool: string }
  | { type: 'agent.tool.failed'; agentId: string; tool: string; error?: string }
  | { type: 'agent.message.sent'; agentId: string; toAgentId?: string; content: string }
  | { type: 'agent.message.received'; agentId: string; fromAgentId?: string; content: string }
  | { type: 'project.created'; project: ProjectDto }
  | { type: 'project.updated'; project: ProjectDto }
  | { type: 'project.completed'; projectId: string }
  | { type: 'property.created'; property: PropertyDto }
  | { type: 'property.updated'; property: PropertyDto }
  | { type: 'company.created'; company: CompanyDto }
  | { type: 'company.updated'; company: CompanyDto }
  | { type: 'task.created'; task: TaskDto }
  | { type: 'task.updated'; task: TaskDto }
  | { type: 'task.completed'; taskId: string }
  | { type: 'task.failed'; taskId: string; error?: string }
  | { type: 'workflow.started'; workflowId: string }
  | { type: 'workflow.completed'; workflowId: string }
  | { type: 'workflow.failed'; workflowId: string; error?: string };

/** Envelope persisted in the events table and emitted over the wire. */
export interface EventEnvelope {
  id: string;
  type: string;
  timestamp: string;
  payload: PatlixEvent;
}