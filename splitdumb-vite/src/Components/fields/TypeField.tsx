import { ReactElement } from "react";
import { Input } from "../ui/input";

interface TypeFieldProps {
  isSelected: boolean;
  icon: ReactElement;
  name: string;
}

export const TypeField = ({ isSelected, icon, name }: TypeFieldProps) => {
  return (
    <div
      className={`bg-transparent flex items-center space-x-2 rounded-full ${
        isSelected ? "border-emerald-400 text-emerald-400" : "border-gray-700"
      }`}
    >
      {icon}
      <span>{name}</span>
    </div>
  );
};
