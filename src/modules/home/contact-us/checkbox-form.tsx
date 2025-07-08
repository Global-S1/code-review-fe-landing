import type { ChangeEventHandler } from "react";

interface Props {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  error?: string;
}

export function CheckboxField({
  id,
  name,
  label,
  checked,
  onChange,
  required = false,
  error,
}: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all checked:border-primary checked:bg-primary"
        />
        <label htmlFor={id} className="text-sm">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
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
