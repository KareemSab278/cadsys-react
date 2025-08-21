import { Button, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { SuccessButtonRound } from '../Buttons/Buttons';

function BasicNavBar() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        position="left"
        size="xs"
        opened={opened}
        onClose={close}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
        <SuccessButtonRound
          text="close me"
          onClick={close}
        />
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}

export { BasicNavBar };
