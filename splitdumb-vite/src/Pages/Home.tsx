import { Footer } from "@/Components/Footer/Footer";
import { Button } from "@/Components/ui/button";
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
              <svg className="w-40 h-40" viewBox="0 0 100 100">
                <rect
                  x="20"
                  y="20"
                  width="60"
                  height="80"
                  rx="5"
                  fill="#34d399"
                />
                <path d="M40 40 L60 40 L60 60 L40 60 Z" fill="#059669" />
                <circle cx="70" cy="30" r="10" fill="#059669" />
              </svg>
            </div>
          </div>
        </div>

        {/* Group Message */}
        <p className="self-center text-center text-gray-400 mb-4 w-72">
          Splitfool groups you create or are added to will show here.
        </p>

        {/* Start New Group Button */}
        <Button className="w-60  bg-transparent self-center text-emerald-400 border border-emerald-400 hover:bg-emerald-400 hover:text-white">
          <UserPlus className="w-5 h-5 mr-2" />
          Start a new group
        </Button>
      </div>

      <Footer />
    </div>
  );
};
