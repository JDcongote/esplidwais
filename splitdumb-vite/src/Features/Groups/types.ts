export type Group = {
  id: string;
  name: string;
  type: string;
  picture: string | null;
  createdAt: Date;
  updatedAt: Date;
  ownerId: string;
};

export interface CreateGroupDialogRequest {
  name: string;
  type: GroupType;
  picture?: File;
}

export enum GroupType {
  TRIP = "TRIP",
  HOME = "HOME",
  COUPLE = "COUPLE",
  FRIENDS = "FRIENDS",
}
