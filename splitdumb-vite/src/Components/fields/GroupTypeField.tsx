import { useController, UseControllerProps } from "react-hook-form";
import { TypeField } from "./TypeField";
import { useState } from "react";

interface GroupTypeFieldProps extends UseControllerProps {
  groups: any[];
}

export const GroupTypeField = ({ groups, ...props }: GroupTypeFieldProps) => {
  const { field } = useController({
    ...props,
    rules: { required: "Group type is required" },
    defaultValue: "Trip",
  });
  const [selectedType, setSelectedType] = useState("Trip");

  const handleTypeToggle = (typeName: string) => {
    field.onChange(typeName);
    setSelectedType(typeName);
  };
  return groups.map((type) => (
    <TypeField
      isSelected={selectedType === type.name}
      {...type}
      onChange={handleTypeToggle}
    />
  ));
};
