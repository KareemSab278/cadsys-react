import { Select } from '@mantine/core';


type BasicSelectInputProps = {
  data: string[];
  value: string;
  onChange: (value: string | null) => void;
  label?: string;
  placeholder?: string;
};

function BasicSelectInput({ data, value, onChange, label = "Your favorite library", placeholder = "Pick value" }: BasicSelectInputProps) {
  return (
    <Select
      label={label}
      placeholder={placeholder}
      data={data}
      value={value}
      onChange={onChange}
      clearable
    />
  );
}

export { BasicSelectInput };

