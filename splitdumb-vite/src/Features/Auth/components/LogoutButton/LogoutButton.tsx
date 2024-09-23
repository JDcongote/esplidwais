import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div>
        <button onClick={() => logout()}>Log Out</button>
      </div>
    );
  }
};
