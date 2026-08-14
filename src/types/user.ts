/** A human inhabitant of Patlix World. */
export interface UserDto {
  id: string;
  username: string;
  /** Appearance/avatar identifier (character system uses the same rigs as agents). */
  avatar: string;
  companyId?: string;
  createdAt: string;
}