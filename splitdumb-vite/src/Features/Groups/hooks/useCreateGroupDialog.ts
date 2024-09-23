import { SubmitHandler, useForm } from "react-hook-form";
import { useDialogContext } from "../../../Contexts/Dialog.Context";
import { useCreateGroup } from "../api/group.mutation";
import { CreateGroupDialogRequest } from "../types";

export const useCreateGroupDialog = () => {
  const { setIsOpen } = useDialogContext();
  const { mutateAsync: createGroup } = useCreateGroup();
  const methods = useForm<CreateGroupDialogRequest>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<CreateGroupDialogRequest> = (data) => {
    createGroup(data);
    setIsOpen(false);
  };

  return { methods, submit: handleSubmit(onSubmit), register, errors };
};
