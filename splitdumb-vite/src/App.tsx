import { useAuth0 } from "@auth0/auth0-react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LoginButton } from "./Features/Auth/components/LoginButton/LoginButton";
import { LogoutButton } from "./Features/Auth/components/LogoutButton/LogoutButton";
import { Home } from "./Features/Home/components/Home/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const { isAuthenticated } = useAuth0();

  const queryClient = new QueryClient({
    /* defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    }, */
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          {isAuthenticated ? (
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
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
