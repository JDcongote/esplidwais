import { Button } from "@/Components/ui/button";
import { Group } from "@/types/types";
import { Settings2 } from "lucide-react";
import { GroupItem } from "./components/GroupItem";

export const GroupListView = ({ groups }: { groups: Group[] }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans space-y-6 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-normal">
          Overall, you are owed
          <span className="text-emerald-100"> €1,285.87</span>
        </h1>
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Settings2 />
        </svg>
      </div>
      {groups.map((group) => {
        return <GroupItem group={group} />;
      })}
      <p className="text-center self-center text-gray-400 text-sm mt-6 mb-2 w-10/12">
        Hiding groups that have been settled up over one month.
      </p>
      <Button
        variant="outline"
        className="w-full  bg-transparent self-center text-emerald-400 border border-emerald-400 hover:bg-emerald-400 hover:text-white"
      >
        Show 3 settled-up groups
      </Button>
    </div>
  );
};
