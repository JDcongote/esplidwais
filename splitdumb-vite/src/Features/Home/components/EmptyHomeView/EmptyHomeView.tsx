import { useAuth0 } from "@auth0/auth0-react";
import Logo from "@/assets/logo.svg?react";
import { Button } from "@/Components/ui/button";
import { UserPlus } from "lucide-react";
import { useDialogContext } from "@/Contexts/Dialog.Context";

export const EmptyHomeView = () => {
  const { setIsOpen } = useDialogContext();
  const { user } = useAuth0();
  return (
    <div className="flex flex-col flex-1 pb-16 overflow-y-auto space-y-6 px-4">
      {/* Welcome Message */}
      <h1 className="self-start text-xl font-bold">{`Welcome to Esplidwais, ${user?.given_name}!`}</h1>

      {/* Illustration */}
      <div className="flex justify-center">
        <div className="relative w-56 h-56 bg-emerald-200 rounded-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <Logo />
          </div>
        </div>
      </div>

      {/* Group Message */}
      <p className="self-center text-center text-gray-400 mb-4 w-72">
        Esplidwais groups you create or are added to will show here.
      </p>

      {/* Start New Group Button */}
      <Button
        className="w-60  bg-transparent self-center text-emerald-400 border border-emerald-400 hover:bg-emerald-400 hover:text-white"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <UserPlus className="w-5 h-5 mr-2" />
        Start a new group
      </Button>
    </div>
  );
};
