import { Button, Flex } from '@mantine/core';


// buttons collected from: https://mantine.dev/styles/styles-overview/

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
      bg="rgba(0, 0, 0, .3)"
      gap="sm"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Button variant="filled" radius="xs" onClick={onClick}>
        {text}
      </Button>
    </Flex>
  );
}


function DangerButtonRound({ text, onClick }: ButtonProps) {
  return (
    <Button variant="filled" color="red" radius="xl" onClick={onClick}>
      {text}
    </Button>
  );
}


function DangerButtonSquare({ text, onClick }: ButtonProps) {
  return (
    <Button variant="filled" color="red" radius="xs" onClick={onClick}>
      {text}
    </Button>
  );
}


function SuccessButtonRound({ text, onClick }: ButtonProps) {
  return (
    <Button variant="filled" color="green" radius="xl" onClick={onClick}>
      {text}
    </Button>
  );
}


function SuccessButtonSquare({ text, onClick }: ButtonProps) {
  return (
    <Button variant="filled" color="green" radius="xs" onClick={onClick}>
      {text}
    </Button>
  );
}

export {
  ButtonPrimaryRound,
  ButtonPrimarySquare,
  DangerButtonRound,
  DangerButtonSquare,
  SuccessButtonRound,
  SuccessButtonSquare,
};
