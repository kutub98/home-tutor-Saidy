/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

interface SelectFieldProps {
  name: string;
  options: { value: string; label?: string }[];
}

export function SelectField({ name, options }: SelectFieldProps) {
  return (
    <select className="w-full p-2 rounded border bg-white" defaultValue={name}>
      {options.map((name, key) => (
        <option key={key} value={name.value}>
          {name.value}
        </option>
      ))}
    </select>
  );
}
