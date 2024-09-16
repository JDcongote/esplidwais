import { contextFactory } from "@/utils/create.context.factory";

const [useDialogContext, DialogContext] = contextFactory<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}>();

export { useDialogContext, DialogContext };
