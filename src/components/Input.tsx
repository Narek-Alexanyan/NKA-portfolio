import { forwardRef } from "react";

interface InputFieldProps {
  id: string;
  label: string;
  extra?: string;
  helperText?: string;
  placeholder: string;
  variant?: string;
  autoComplete?: string;
  disabled?: boolean;
  type?: string;
  isNumber?: boolean;
  size?: string;
  error?: string;
  required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      id,
      extra,
      helperText,
      type = "text",
      placeholder,
      disabled,
      isNumber,
      size = "md",
      error,
      required,
      autoComplete,
      ...rest
    },
    ref
  ) => {
    return (
      <label className="space-y-3">
        <span className="field-label">{label}</span>
        <input
          ref={ref}
          disabled={disabled}
          type={type}
          id={id}
          placeholder={placeholder}
          required={required}
          className="field-input"
          aria-invalid={error ? true : false}
          aria-describedby={`${id}-description`}
          autoComplete={autoComplete}
          {...rest}
        />
      </label>
    );
  }
);

Input.displayName = "input";
