import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CreateGroupDialogRequest } from "../types";

const resizeImageToBase64 = (file: File | undefined) => {
  if (file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;
          const maxWidth = 200;
          const maxHeight = 200;

          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width * maxHeight) / height);
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, width, height);

          const resizedBase64 = canvas.toDataURL("image/jpeg", 1);
          resolve(resizedBase64);
        };
        img.onerror = reject;
        img.src = e.target?.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
};

export const useCreateGroup = () => {
  const queryClient = useQueryClient();
  const { getAccessTokenSilently } = useAuth0();

  const mutation = useMutation({
    mutationKey: ["create-group"],
    mutationFn: async (group: CreateGroupDialogRequest) => {
      const token = await getAccessTokenSilently();
      const picture = await resizeImageToBase64(group.picture);
      const finalGroup = { ...group, picture };

      const response = await axios.post(
        "http://localhost:4000/groups",
        finalGroup,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["groups"] });
    },
  });

  return mutation;
};
