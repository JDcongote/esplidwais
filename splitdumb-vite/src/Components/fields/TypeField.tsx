import { ReactElement } from "react";
import { Input } from "../ui/input";

interface TypeFieldProps {
  isSelected: boolean;
  icon: ReactElement;
  name: string;
  onChange: (type: string) => void;
}

export const TypeField = ({
  isSelected,
  icon,
  name,
  onChange,
}: TypeFieldProps) => {
  return (
    <div
      className={`border py-1 px-3  bg-transparent flex items-center space-x-2 rounded-full ${
        isSelected ? "border-emerald-400 text-emerald-400" : "border-gray-300"
      }`}
      onClick={() => onChange(name)}
    >
      {icon}
      <span>{name}</span>
      <Input className="hidden" />
    </div>
  );
};
