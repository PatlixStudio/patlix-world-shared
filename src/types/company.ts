/** A company = an organization owning projects/properties in Patlix World. */
export interface CompanyDto {
  id: string;
  name: string;
  ownerUserId: string;
  /** e.g. "technology", "gaming", "maritime", "research", "creative" — drives property identity. */
  industry: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}