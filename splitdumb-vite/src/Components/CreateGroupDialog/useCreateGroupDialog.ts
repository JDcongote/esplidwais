import { useCreateGroup } from "@/services/queries/group.mutation";
import { CreateGroupDialogRequest } from "@/types/types";
import { SubmitHandler, useForm } from "react-hook-form";

export const useCreateGroupDialog = () => {
  const { mutateAsync: createGroup } = useCreateGroup();
  const methods = useForm<CreateGroupDialogRequest>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<CreateGroupDialogRequest> = (data) => {
    createGroup(data);
  };

  return { methods, submit: handleSubmit(onSubmit), register, errors };
};
