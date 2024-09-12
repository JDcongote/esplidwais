import { useAuth0 } from "@auth0/auth0-react";
import { Users, User, Activity } from "lucide-react";

export const Footer = () => {
  const { user } = useAuth0();
  return (
    <div className="flex justify-around items-center py-4 bg-gray-800">
      <div className="flex flex-col items-center">
        <Users className="w-6 h-6 text-emerald-400" />
        <span className="text-xs text-emerald-400">Groups</span>
      </div>
      <div className="flex flex-col items-center">
        <User className="w-6 h-6" />
        <span className="text-xs">Friends</span>
      </div>
      <div className="flex flex-col items-center">
        <Activity className="w-6 h-6" />
        <span className="text-xs">Activity</span>
      </div>
      <div className="flex flex-col items-center">
        <img className="w-6 h-6 rounded-full" src={user?.picture} />
        <span className="text-xs">Account</span>
      </div>
    </div>
  );
};
