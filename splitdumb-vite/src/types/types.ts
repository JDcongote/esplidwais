export interface CreateGroupDialogRequest {
  name: string;
  type: GroupType;
  picture?: string;
}

export enum GroupType {
  TRIP = "TRIP",
  HOME = "HOME",
  COUPLE = "COUPLE",
  FRIENDS = "FRIENDS",
}

export type User = {
  id: string;
  email: string;
  name: string;
  groups: Group[];
};

export type Group = {
  id: string;
  name: string;
  type: string;
  picture: string | null;
  createdAt: Date;
  updatedAt: Date;
  ownerId: string;
  members: User[];
};
