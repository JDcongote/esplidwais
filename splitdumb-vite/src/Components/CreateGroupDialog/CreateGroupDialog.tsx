import { useState } from "react";
import {
  X,
  Camera,
  Plane,
  Home,
  Heart,
  Users,
  UserPlus,
  Menu,
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

export const CreateGroupDialog = () => {
  const [groupName, setGroupName] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const groupTypes = [
    { name: "Trip", icon: Plane },
    { name: "Home", icon: Home },
    { name: "Couple", icon: Heart },
    { name: "Friends", icon: Users },
    { name: "Other", icon: Menu },
  ];

  const handleCreate = () => {
    // Handle group creation logic here
    console.log("Creating group:", { name: groupName, type: selectedType });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-60  bg-transparent self-center text-emerald-400 border border-emerald-400 hover:bg-emerald-400 hover:text-white">
          <UserPlus className="w-5 h-5 mr-2" />
          Start a new group
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-full w-screen h-dvh p-0 bg-gray-900 text-white">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6" />
            </Button>
            <h1 className="text-xl font-semibold">Create a group</h1>
            <Button
              variant="ghost"
              onClick={handleCreate}
              className="text-emerald-400 font-semibold"
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
                  placeholder="Group name"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="bg-transparent border-b border-emerald-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="w-full">
              <h2 className="text-lg mb-3">Type</h2>
              <div className="flex flex-wrap gap-2">
                {groupTypes.map((type) => (
                  <Button
                    key={type.name}
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedType(type.name)}
                    className={`bg-transparent flex items-center space-x-2 rounded-full ${
                      selectedType === type.name
                        ? "border-emerald-400 text-emerald-400"
                        : "border-gray-700"
                    }`}
                  >
                    <type.icon className="w-4 h-4" />
                    <span>{type.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
