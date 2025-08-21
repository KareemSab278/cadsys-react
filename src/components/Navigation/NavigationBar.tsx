import { Button, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { SuccessButtonRound } from '../Buttons/Buttons';
// import { BasicTreeView } from '../TreeViewSelection/SelectionTrees';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

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

        <h2>Cadsys navigation bar</h2>

        {/* <SuccessButtonRound
          text="close me"
          onClick={close}
        /> */}

          {/* <BasicTreeView /> */}


          <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>
        <TreeItem itemId="grid" label="Data Grid">
          <TreeItem itemId="grid-community" label="@mui/x-data-grid" onClick={close} />
          <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" onClick={close} />
          <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" onClick={close} />
        </TreeItem>
        <TreeItem itemId="pickers" label="Date and Time Pickers">
          <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" onClick={close} />
          <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" onClick={close} />
        </TreeItem>
        <TreeItem itemId="charts" label="Charts">
          <TreeItem itemId="charts-community" label="@mui/x-charts" onClick={close} />
        </TreeItem>
        <TreeItem itemId="tree-view" label="Tree View">
          <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" onClick={close} />
        </TreeItem>
      </SimpleTreeView>
    </Box>

      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}

export { BasicNavBar };

