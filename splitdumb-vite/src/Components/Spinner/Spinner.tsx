import { cn } from "@/lib/utils";

export const LoadingSpinner = ({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#34d399", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#014731", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" stroke="url(#gradient1)" />
    </svg>
  );
};
