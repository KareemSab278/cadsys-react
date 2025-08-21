import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Flex } from '@mantine/core';
import {ButtonPrimaryRound} from '../Buttons/Buttons';


// component taken from: https://mantine.dev/core/package/

function BasicForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'), // email validation regex
    },
  });

  return (
    <Flex
          direction={{ base: 'column', sm: 'row' }}       // THIS IS HOW TO APPLY FLEX STYLING
          gap={{ base: 'sm', sm: 'lg' }}
          justify={{ sm: 'center' }}
        >
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group justify="flex-end" mt="md">
        {/* <Button type="submit">Submit</Button> */}
        <ButtonPrimaryRound text="Submit"  onClick={()=>{alert('Task failed successfully!')}}/>
      </Group>
    </form>
    </Flex>
  );
}

function TextInputField() {
  return (
    <TextInput
      label="Input label"
      description="Input description"
      placeholder="Input placeholder"
    />
  );
}

export { TextInputField, BasicForm };