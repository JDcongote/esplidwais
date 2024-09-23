import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { User } from "../types";

export const useGetUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const query = useQuery<User>({
    queryKey: ["user"],
    queryFn: async (): Promise<User> => {
      const token = await getAccessTokenSilently();
      const response = await fetch("http://localhost:4000/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user: User = await response.json();
      return user;
    },
  });

  return query;
};
