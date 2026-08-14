/** A project is a real repository/working area in the workspace (e.g. apps/app-1). */
export enum ProjectStatus {
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  COMPLETED = 'COMPLETED',
  ARCHIVED = 'ARCHIVED',
}

export interface ProjectDto {
  id: string;
  name: string;
  /** Physical location in the world (its property/building/territory). */
  propertyId?: string;
  repoUrl: string;
  workingDirectory: string;
  branch: string;
  status: ProjectStatus;
  companyId?: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}