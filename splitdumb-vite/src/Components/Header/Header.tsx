import { useDialogContext } from "@/Contexts/Dialog.Context";
import { Search, UserPlus } from "lucide-react";

export const Header = () => {
  const { setIsOpen } = useDialogContext();
  return (
    <div className="flex justify-end items-center space-x-7 h-14 shadow-sm shadow-black px-4">
      <Search className="w-5 h-5" />
      <UserPlus
        className="w-5 h-5"
        onClick={() => {
          setIsOpen(true);
        }}
      />
    </div>
  );
};
