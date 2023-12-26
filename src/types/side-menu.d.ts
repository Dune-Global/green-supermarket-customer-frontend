import { ILucideIcon } from "./lucideIcon";

export interface ISideMenuItems {
  id: number;
  path: string;
  icon: React.ComponentType<ILucideIcon>;
  description: string;
}