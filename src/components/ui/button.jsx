import { cn } from "@/lib/utils";

export function Button({ 
  children, 
  variant = "primary", 
  className, 
  ...props 
}) {
  const variants = {
    primary: "bg-primary text-white border-primary hover:bg-primary-dark",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white/10",
    white: "bg-white text-primary border-white hover:bg-gray-50",
  };

  return (
    <button
      className={cn(
        "px-5 py-2.5 rounded-lg font-semibold transition-colors border-2 uppercase text-sm",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
