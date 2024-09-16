import { Footer } from "@/Components/Footer/Footer";

import { useGetUser } from "@/services/queries/user.query";
import { LoadingScreen } from "@/Components/LoadingScreen/LoadingScreen";
import { Header } from "@/Components/Header/Header";
import { EmptyHomeView } from "@/Views/EmptyHomeView/EmptyHomeView";
import { GroupListView } from "@/Views/GroupListView/GroupListView";

export const Home = () => {
  const { data: user, isLoading } = useGetUser();
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans space-y-6">
      {/* Header */}
      <Header />
      {/* Main Content */}
      {user?.groups && user?.groups.length > 0 ? (
        <GroupListView groups={user.groups} />
      ) : (
        <EmptyHomeView />
      )}

      {/*footer*/}
      <Footer />
    </div>
  );
};
