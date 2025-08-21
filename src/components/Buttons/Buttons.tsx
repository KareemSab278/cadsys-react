import { Button, Flex } from '@mantine/core';


// buttons collected from: https://mantine.dev/styles/styles-overview/

export {
  ButtonPrimaryRound,
  ButtonPrimarySquare,
  DangerButtonRound,
  DangerButtonSquare,
  SuccessButtonRound,
  SuccessButtonSquare,
};


type ButtonProps = {
  text: string;
  onClick?: () => void;
};


function ButtonPrimaryRound({ text, onClick }: ButtonProps) {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
      style={{ margin: '10px' }}
    >
      <Button variant="filled" radius="xl" onClick={onClick}>
        {text}
      </Button>
    </Flex>
  );
}


function ButtonPrimarySquare({ text, onClick }: ButtonProps) {
  return (
    <Flex
      mih={50}
      // bg="rgba(0, 0, 0, .3)"
      gap={{ base: 'sm', sm: 'lg' }}
      justify="center"
      // align="center"
      direction={{ base: 'column', sm: 'row' }}
      style={{ margin: '10px' }}
      // wrap="wrap"
    >
      <Button variant="filled" radius="xs" onClick={onClick}>
        {text}
      </Button>
    </Flex>
  );
}


function DangerButtonRound({ text, onClick }: ButtonProps) {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
      style={{ margin: '10px' }}
    >
      <Button variant="filled" color="red" radius="xl" onClick={onClick}>
        {text}
      </Button>
    </Flex>
  );
}


function DangerButtonSquare({ text, onClick }: ButtonProps) {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
      style={{ margin: '10px' }}
    >
      <Button variant="filled" color="red" radius="xs" onClick={onClick}>
        {text}
      </Button>
    </Flex>
  );
}


function SuccessButtonRound({ text, onClick }: ButtonProps) {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
      style={{ margin: '10px' }}
    >
      <Button variant="filled" color="green" radius="xl" onClick={onClick}>
        {text}
      </Button>
    </Flex>
  );
}


function SuccessButtonSquare({ text, onClick }: ButtonProps) {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
      style={{ margin: '10px' }}
    >
      <Button variant="filled" color="green" radius="xs" onClick={onClick}>
        {text}
      </Button>
    </Flex>
  );
}


