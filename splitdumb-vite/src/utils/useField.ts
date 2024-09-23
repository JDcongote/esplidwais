import { useController, UseControllerProps } from "react-hook-form";

export default function useField<TValue = string>(props: UseControllerProps) {
  const controller = useController(props);

  // To typecast the input value
  const val: TValue = controller.field.value;

  return {
    field: controller.field,
    fieldState: controller.fieldState,
    formState: controller.formState,
    value: val,
  };
}
