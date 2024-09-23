import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { Group } from "../types";

export const useGetGroups = () => {
  const { getAccessTokenSilently } = useAuth0();
  const query = useQuery<Group[]>({
    queryKey: ["groups"],
    queryFn: async (): Promise<Group[]> => {
      const token = await getAccessTokenSilently();
      const response = await fetch("http://localhost:4000/groups/all", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const groups: Group[] = await response.json();
      return groups;
    },
  });

  return query;
};
