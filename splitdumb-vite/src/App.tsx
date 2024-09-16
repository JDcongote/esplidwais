import { useAuth0 } from "@auth0/auth0-react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LoginButton } from "./Components/LoginButton/LoginButton";
import { LogoutButton } from "./Components/LogoutButton/LogoutButton";
import { Home } from "./Pages/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CreateGroupDialog } from "./Components/CreateGroupDialog/CreateGroupDialog";
import { DialogContext } from "./Contexts/Dialog.Context";
import { useState } from "react";

function App() {
  const { isAuthenticated } = useAuth0();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const queryClient = new QueryClient({
    /* defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    }, */
  });
  const handleSetIsOpen = (open: boolean) => {
    setIsDialogOpen(open);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          {isAuthenticated ? (
            <DialogContext.Provider
              value={{ isOpen: false, setIsOpen: handleSetIsOpen }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
              <CreateGroupDialog isDialogOpen={isDialogOpen} />
            </DialogContext.Provider>
          ) : (
            <>
              <LoginButton />
              <LogoutButton />
            </>
          )}
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-left" />
    </QueryClientProvider>
  );
}

export default App;
