type HelperTextProps = {
  children: React.ReactNode;
  className?: string;
};

export const HelperText = ({ children, className }: HelperTextProps) => {
  return (
    <span role="alert" className={`text-xs text-red-600 ${className}`}>
      {children}
    </span>
  );
};
