import { Select } from '@mantine/core';
import { Flex } from '@mantine/core';

// more like 'dropdown select input' but this naming works too...
export { BasicSelectInput };


type BasicSelectInputProps = {
  data: string[];
  value: string;
  onChange: (value: string | null) => void;
  label?: string;
  placeholder?: string;
};

function BasicSelectInput({ data, value, onChange, label = "Your favorite library", placeholder = "Pick value" }: BasicSelectInputProps) {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}       // THIS IS HOW TO APPLY FLEX STYLING
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Select
        label={label}
        placeholder={placeholder}
        data={data}
        value={value}
      onChange={onChange}
      clearable
    />
    </Flex>
  );
}


