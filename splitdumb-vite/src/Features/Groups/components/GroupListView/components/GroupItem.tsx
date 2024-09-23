import { Group } from "@/types/types";
import { Camera } from "lucide-react";

export const GroupItem = ({ group }: { group: Group }) => {
  return (
    <div className="flex w-full space-x-4">
      {group.picture ? (
        <img
          className="w-24 h-20 rounded-md border-none outline-none object-cover"
          src={group.picture}
        ></img>
      ) : (
        <div className="flex items-center justify-center w-24 h-20 rounded-md border border-gray-300">
          <Camera className="w-10 h-10 stroke-gray-100" />
        </div>
      )}
      <div className="flex flex-col justify-center space-y-1">
        <span className="text-m font-medium text-gray-100">{group.name}</span>
        <span className="text-sm font-normal text-green-200">
          {/* TODO if user owes text is text-red-200 */}
          You are owed x
        </span>
        <span className="text-sm font-thin text-gray-400">
          this person owes you x x
        </span>
      </div>
    </div>
  );
};
