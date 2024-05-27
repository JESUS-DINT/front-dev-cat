import { HelperText } from "app/components/atoms/helper-text/helperText";
import { InputComponent, LabelComponent } from "app/components/atoms/index";
import React from "react";
import { FieldError } from "react-hook-form";
type TextFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number" | "tel";
  value?: string;
  htmlFor?: string;
  id?: string;
  error?: FieldError | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const TextFieldComponent = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { name, type = "text", label, placeholder, htmlFor, id, error, ...props },
    ref
  ) => {
    return (
      <>
        <div className="space-y-1">
          {label && <LabelComponent label={label} htmlFor={htmlFor} />}
          <InputComponent
            name={name}
            type={type}
            id={id}
            placeholder={placeholder}
            ref={ref}
            {...props}
          />
          {error && <HelperText>{error.message}</HelperText>}
        </div>
      </>
    );
  }
);
TextFieldComponent.displayName = "TextFieldComponent";

export { TextFieldComponent };
