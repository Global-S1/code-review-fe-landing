import type { ChangeEventHandler } from "react";

interface Props {
  id: string;
  label: string;
  name: string;
  type?: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function InputField({
  id,
  label,
  name,
  type = "text",
  value,
  placeholder,
  error,
  onChange,
}: Props) {
  return (
    <div className="grow">
      <label htmlFor={id} className="block mb-2 text-custom-md">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
        className="mt-1 block w-full rounded-xl border border-gray-500 bg-white/5 shadow-sm py-2 px-4 text-xl"
        aria-describedby={`error-${name}`}
        aria-invalid={!!error}
      />
      {error && (
        <p
          id={`error-${name}`}
          className="text-red-500 text-sm mt-1"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </p>
      )}
    </div>
  );
}
