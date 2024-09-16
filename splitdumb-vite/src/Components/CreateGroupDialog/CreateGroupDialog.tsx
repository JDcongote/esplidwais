import { useState } from "react";
import { X, Camera, Plane, Home, Heart, Users, Menu } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useCreateGroupDialog } from "./useCreateGroupDialog";
import { FormProvider } from "react-hook-form";
import { useDialogContext } from "@/Contexts/Dialog.Context";
import { TypeField } from "../fields/TypeField";

export const CreateGroupDialog = ({
  isDialogOpen,
}: {
  isDialogOpen: boolean;
}) => {
  const { setIsOpen } = useDialogContext();
  const { methods, register, submit } = useCreateGroupDialog();
  const [selectedType, setSelectedType] = useState("");

  const groupTypes = [
    { name: "Trip", icon: <Plane className="w-4 h-4" /> },
    { name: "Home", icon: <Home className="w-4 h-4" /> },
    { name: "Couple", icon: <Heart className="w-4 h-4" /> },
    { name: "Friends", icon: <Users className="w-4 h-4" /> },
    { name: "Other", icon: <Menu className="w-4 h-4" /> },
  ];

  const handleSubmit = () => {
    submit();
    setIsOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="max-w-full w-screen h-dvh p-0 bg-gray-900 text-white"
        aria-description="Create group dialog"
      >
        <FormProvider {...methods}>
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6" />
              </Button>
              <DialogTitle className="text-xl font-semibold">
                Create a group
              </DialogTitle>
              <Button
                variant="ghost"
                className="text-emerald-400 font-semibold"
                onClick={handleSubmit}
              >
                Done
              </Button>
            </div>

            <div className="flex-grow p-4 overflow-y-auto">
              <div className="mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <Input
                    autoFocus
                    placeholder="Group name"
                    className="bg-transparent border-b border-emerald-400 focus:border-2 focus-visible:ring-offset-0 focus-visible:ring-0"
                    {...register("name")}
                  />
                </div>
              </div>

              <div className="w-full">
                <h2 className="text-lg mb-3">Type</h2>
                <div className="flex flex-wrap gap-2">
                  {groupTypes.map((type) => (
                    <TypeField isSelected={false} {...type} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
