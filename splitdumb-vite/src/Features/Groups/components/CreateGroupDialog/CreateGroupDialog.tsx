import { X, Plane, Home, Heart, Users, Menu } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useCreateGroupDialog } from "../../hooks/useCreateGroupDialog";
import { FormProvider } from "react-hook-form";
import { useDialogContext } from "@/Contexts/Dialog.Context";
import { GroupTypeField } from "../../../../Components/fields/GroupTypeField";
import { ImageField } from "../../../../Components/fields/ImageField";

export const CreateGroupDialog = ({
  isDialogOpen,
}: {
  isDialogOpen: boolean;
}) => {
  const { setIsOpen } = useDialogContext();
  const { methods, errors, register, submit } = useCreateGroupDialog();

  const groupTypes = [
    { name: "Trip", icon: <Plane className="w-4 h-4" /> },
    { name: "Home", icon: <Home className="w-4 h-4" /> },
    { name: "Couple", icon: <Heart className="w-4 h-4" /> },
    { name: "Friends", icon: <Users className="w-4 h-4" /> },
    { name: "Other", icon: <Menu className="w-4 h-4" /> },
  ];

  const handleSubmit = () => {
    submit();
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
                  <ImageField name="picture" />
                  <Input
                    autoFocus
                    placeholder="Group name"
                    className="flex-1 bg-transparent border-b border-emerald-400 focus:border-2 focus-visible:ring-offset-0 focus-visible:ring-0"
                    {...register("name", {
                      required: "Group name is required",
                    })}
                  />
                </div>
              </div>

              <div className="w-full">
                <h2 className="text-lg mb-3">Type</h2>
                <div className="flex flex-wrap gap-2">
                  <GroupTypeField groups={groupTypes} name="type" />
                </div>
              </div>
            </div>
            {errors.name && <p role="alert">{errors.name.message}</p>}
            {errors.type && <p role="alert">{errors.type.message}</p>}
          </div>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
