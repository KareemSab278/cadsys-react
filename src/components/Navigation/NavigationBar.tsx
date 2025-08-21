// import { BasicTreeView } from '../TreeViewSelection/SelectionTrees';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Button, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { SuccessButtonRound } from '../Buttons/Buttons';
import { useNavigate } from 'react-router-dom';

export { BasicNavBar };

function BasicNavBar() {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();

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

        {/* ================================================= */}
        
        <Box sx={{ minHeight: 352, minWidth: 250 }}>
          <SimpleTreeView>
            <TreeItem itemId="grid" label="Tables">
              <TreeItem
                itemId=""
                label="Table Components"
                onClick={() => {
                  close();
                  navigate('/tables');
                }}
              />
            </TreeItem>

            {/* ================================================= */}
            
            <TreeItem itemId="pickers" label="Forms">
              <TreeItem
                itemId="pickers-community"
                label="Basic Form Components"
                onClick={() => {
                  close();
                  navigate('/forms');
                }}
              />

              {/* ----------- */}

              <TreeItem
                itemId="pickers-community-2" // ID MUST ALWAYS BE DIFFERENT!!!
                label="Goes nowhere"
                onClick={() => {
                  close();
                  // navigate('/forms');
                }}
              />


            </TreeItem>

            {/* ================================================= */}

            <TreeItem itemId="charts" label="Charts">
              <TreeItem
                itemId="charts-community"
                label="Chart Components"
                onClick={() => {
                  close();
                  navigate('/graphs');
                }}
              />

              {/* ----------- */}

              <TreeItem
                itemId="charts-community-2"
                label="Goes nowhere"
                onClick={() => {
                  close();
                  // navigate('/graphs');
                }}
              />
            </TreeItem>

            {/* ================================================= */}
            
            <TreeItem itemId="Buttons" label="Buttons">
              <TreeItem
                itemId="buttons-community"
                label="Button Components"
                onClick={() => {
                  close();
                  navigate('/buttons');
                }}
              />
            </TreeItem>

            {/* ================================================= */}

            <TreeItem itemId="tree-view" label="Home">
              <TreeItem
                itemId="tree-view-community"
                label="Home"
                onClick={() => {
                  close();
                  navigate('/');
                }}
              />

              {/* ----------- */}

              <TreeItem
                itemId="tree-view-community-2"
                label="Also Home"
                onClick={() => {
                  close();
                  navigate('/');
                }}
              />
            </TreeItem>

            {/* ================================================= */}

          </SimpleTreeView>
        </Box>
      </Drawer>
      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}


