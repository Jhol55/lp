import { cn } from "@/lib/utils";

export function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md p-5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
