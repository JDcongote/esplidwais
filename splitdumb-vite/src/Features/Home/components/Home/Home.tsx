import { Footer } from "@/Components/Footer/Footer";

import { LoadingScreen } from "@/Components/LoadingScreen/LoadingScreen";
import { Header } from "@/Components/Header/Header";
import { GroupListView } from "@/Features/Groups/components/GroupListView/GroupListView";
import { useGetGroups } from "../../../Groups/api/groups.query";
import { useState } from "react";
import { DialogContext } from "../../../../Contexts/Dialog.Context";
import { CreateGroupDialog } from "../../../Groups/components/CreateGroupDialog/CreateGroupDialog";
import { EmptyHomeView } from "../EmptyHomeView/EmptyHomeView";

export const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { data: groups, isLoading: areGroupsLoading } = useGetGroups();
  if (areGroupsLoading) {
    return <LoadingScreen />;
  }
  const handleSetIsOpen = (open: boolean) => {
    setIsDialogOpen(open);
  };
  return (
    <DialogContext.Provider
      value={{ isOpen: false, setIsOpen: handleSetIsOpen }}
    >
      <div className="flex flex-col h-screen bg-gray-800 text-white font-sans space-y-6">
        {/* Header */}
        <Header />
        {/* Main Content */}
        {groups && groups.length > 0 ? (
          <GroupListView groups={groups} />
        ) : (
          <EmptyHomeView />
        )}

        {/*footer*/}
        <Footer />
      </div>
      <CreateGroupDialog isDialogOpen={isDialogOpen} />
    </DialogContext.Provider>
  );
};
