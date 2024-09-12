import { useAuth0 } from "@auth0/auth0-react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { LoginButton } from "./Components/LoginButton/LoginButton";
import { LogoutButton } from "./Components/LogoutButton/LogoutButton";
import { Home } from "./Pages/Home";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
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
  );
}

export default App;
