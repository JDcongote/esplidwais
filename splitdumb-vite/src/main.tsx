import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-jdauth0.eu.auth0.com"
    clientId="B50P2COEmYnDHwnWabljn7jOqkMyghgc"
    authorizationParams={{
      audience: "https://splitdumb-api.com",
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>
);
