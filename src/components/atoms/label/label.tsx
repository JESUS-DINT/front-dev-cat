type LabelProps = {
  label: string | React.ReactNode;
  htmlFor?: string;
  className?: string;
};

export const LabelComponent = ({ label, htmlFor }: LabelProps) => {
  return (
    <label
      className="block text-sm font-medium leading-6 text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor={htmlFor}
    >
      {label}
    </label>
  );
};
