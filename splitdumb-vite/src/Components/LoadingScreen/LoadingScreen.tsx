import { LoadingSpinner } from "../Spinner/Spinner";

export const LoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900 text-white font-sans space-y-6">
      <LoadingSpinner size={100} />
    </div>
  );
};
