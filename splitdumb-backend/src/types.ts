export interface CreateGroupDialogRequest {
  name: string;
  type: GroupType;
  picture?: string;
}

export enum GroupType {
  TRIP = 'TRIP',
  HOME = 'HOME',
  COUPLE = 'COUPLE',
  FRIENDS = 'FRIENDS',
}
