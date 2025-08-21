import { NumberInput } from '@mantine/core';

function BasicNumberInput() {
  return (
    <NumberInput
      label="Input label"
      description="Input description"
      placeholder="Input placeholder"
    />
  );
}

function AdvancedNumberInput() {
  return (
    <NumberInput
      label="Enter value between 10 and 20"
      placeholder="Don't enter more than 20 and less than 10"
      min={10}
      max={20}
    />
  );
}

function MultipleNumbersInput() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}

export {
  BasicNumberInput,
  AdvancedNumberInput,
  MultipleNumbersInput,
};
