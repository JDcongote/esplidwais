import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    );
  }
};
