/** A property is a physical place (land + building) in the world owned by a user/company. */
export enum PropertyType {
  HEADQUARTERS = 'HEADQUARTERS',
  OFFICE = 'OFFICE',
  STUDIO = 'STUDIO',
  LABORATORY = 'LABORATORY',
  WORKSHOP = 'WORKSHOP',
  WAREHOUSE = 'WAREHOUSE',
  CAMPUS = 'CAMPUS',
  RESIDENCE = 'RESIDENCE',
  CUSTOM = 'CUSTOM',
}

export interface PropertyDto {
  id: string;
  name: string;
  type: PropertyType;
  companyId?: string;
  ownerUserId?: string;
  /** Zone (world region) where the property physically sits. */
  zoneId: string;
  /** Entrance/plot position in world coordinates. */
  position: { x: number; y: number; z: number };
  /** Building + exterior identity, so the renderer picks a matching environment. */
  buildingStyle: string;
  /** e.g. "ocean-side modern glass tower", "forest temple" — used for placement/property gen later. */
  theme: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}