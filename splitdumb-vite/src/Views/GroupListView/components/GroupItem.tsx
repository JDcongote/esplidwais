import { Group } from "@/types/types";

export const GroupItem = ({ group }: { group: Group }) => {
  return <div className="">{group.name}</div>;
};
