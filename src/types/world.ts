/** World coordinates for any entity (agent, property, zone landmark). */
export interface WorldPoint {
  x: number;
  y: number;
  z: number;
}

/** A named region of the continuous world (city, forest, beach, ...). */
export interface ZoneDto {
  id: string;
  name: string;
  /** e.g. "forest", "city", "beach", "mountain", "ocean". */
  kind: string;
  center: WorldPoint;
  radius: number;
}

/** Snapshot of the world sent to clients on connect (before event stream). */
export interface WorldSnapshot {
  zones: ZoneDto[];
  agents: AgentDto[];
  projects: ProjectDto[];
  companies: CompanyDto[];
  properties: PropertyDto[];
  tasks: TaskDto[];
}