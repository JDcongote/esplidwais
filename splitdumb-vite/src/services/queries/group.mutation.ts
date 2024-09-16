import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { CreateGroupDialogRequest } from "api-interfaces";
import axios from "axios";

export const useCreateGroup = () => {
  const { getAccessTokenSilently } = useAuth0();
  const mutation = useMutation({
    mutationKey: ["create-group"],
    mutationFn: async (group: CreateGroupDialogRequest) => {
      const token = await getAccessTokenSilently();

      const response = await axios.post("http://localhost:4000/groups", group, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    },
  });

  return mutation;
};
