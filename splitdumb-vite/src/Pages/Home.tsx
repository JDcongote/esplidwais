import { CreateGroupDialog } from "@/Components/CreateGroupDialog/CreateGroupDialog";
import { Footer } from "@/Components/Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { Search, UserPlus } from "lucide-react";

export const Home = () => {
  const { user } = useAuth0();
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <div className="flex justify-end space-x-4 mb-8">
        <Search className="w-6 h-6" />
        <UserPlus className="w-6 h-6" />
      </div>
      {/* Main Content */}
      <div className="flex flex-col flex-1 pb-16 overflow-y-auto ">
        {/* Welcome Message */}
        <h1 className="self-start text-xl pl-4 font-bold mb-8">{`Welcome to Splitfool, ${user?.given_name}!`}</h1>

        {/* Illustration */}
        <div className="flex justify-center mb-8">
          <div className="relative w-56 h-56 bg-emerald-200 rounded-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220">
                <circle cx="110" cy="110" r="110" fill="#34d399" />
                <path
                  d="M110 20 A90 90 0 0 1 200 110 L110 110 Z"
                  fill="#059669"
                />
                <path
                  d="M110 200 A90 90 0 0 1 20 110 L110 110 Z"
                  fill="#059669"
                />
                <rect
                  x="70"
                  y="85"
                  width="80"
                  height="50"
                  rx="5"
                  ry="5"
                  fill="white"
                  stroke="#059669"
                  stroke-width="4"
                />
                <circle
                  cx="110"
                  cy="110"
                  r="15"
                  fill="#34d399"
                  stroke="#059669"
                  stroke-width="4"
                />
                <line
                  x1="85"
                  y1="100"
                  x2="135"
                  y2="100"
                  stroke="#059669"
                  stroke-width="3"
                />
                <line
                  x1="85"
                  y1="120"
                  x2="135"
                  y2="120"
                  stroke="#059669"
                  stroke-width="3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Group Message */}
        <p className="self-center text-center text-gray-400 mb-4 w-72">
          Splitfool groups you create or are added to will show here.
        </p>

        {/* Start New Group Button */}
        <CreateGroupDialog />
      </div>

      <Footer />
    </div>
  );
};
