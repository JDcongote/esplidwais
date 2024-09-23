import { UseControllerProps } from "react-hook-form";
import { Camera } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";
import useField from "../../utils/useField";

interface ImageFieldProps extends UseControllerProps {
  accept?: string;
  multiple?: boolean;
}

export const ImageField = ({
  accept = "image/jpeg,image/png,image/gif,image/heic,image/heif,.heic",
  multiple,
  ...props
}: ImageFieldProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const {
    field: { onChange, onBlur, name: fieldName },
  } = useField<File>({ ...props, defaultValue: null });

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const url = URL.createObjectURL(event.target.files[0]);
      setImage(url);
    }
  };

  const fireInput = () => {
    inputRef?.current?.click();
  };
  return (
    <div className="bg-gray-800 rounded-lg w-16 h-16 flex items-center justify-center overflow-hidden ">
      {image ? (
        <img
          className="w-full h-full object-cover"
          src={image || ""}
          onClick={fireInput}
        ></img>
      ) : (
        <Camera className="w-6 h-6 text-white" onClick={fireInput} />
      )}

      <input
        id={fieldName}
        name={fieldName}
        type="file"
        onChange={(e) => {
          const files = e.target.files;
          onChange(multiple ? files : files?.[0]);
          onImageChange(e);
        }}
        ref={inputRef}
        onBlur={onBlur}
        accept={accept}
        multiple={false}
        className="hidden"
      />
    </div>
  );
};
