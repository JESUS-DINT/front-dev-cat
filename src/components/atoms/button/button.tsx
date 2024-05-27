import clsx from "clsx";
import { forwardRef, ComponentProps } from "react";

const Button = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<"button">, "className"> & {
    type: "button" | "submit" | "reset";
    onAction?: () => void;
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
  }
>(({ children, type, onAction, icon, className, disabled, ...rest }, ref) => {
  return (
    <button
      type={type}
      onClick={onAction}
      ref={ref}
      className={clsx(`w-full sm:w-auto bg-gray-900 hover:bg-gray-700 text-white whitespace-nowrap rounded-md text-sm font-medium leading-6 py-2 px-6 border border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 ${className}`, {"cursor-not-allowed": disabled}) }
      {...rest}
    >
      {children}
      {icon && <i aria-hidden="true">{icon}</i>}
    </button>
  );
});

export default Button;
