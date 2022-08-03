import React, { FC, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper
} from '@mui/material';

import { classes, Root } from './style';
import { ObjectWidget } from '../../components/ObjectWidget';
import { IObject } from '../../interfaces';

export const Home: FC = () => {
  const [objectList, setObjectList] = useState();
  const [selectedObject, setSelectedObject] = useState();

  const handleSaveObject = (object: IObject) => {

  };

  return (
    <Root className={classes.root}>
      <Container maxWidth="md">
        <Box className={classes.buttonWrapper}>
          <Button variant="contained">Add Object</Button>
        </Box>
        <Paper className={classes.card}>
          <List className={classes.list}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Item" />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider orientation="vertical" flexItem />

          <Box p={4} flex={1}>
            <ObjectWidget
              object={selectedObject}
              onSave={handleSaveObject}
            />
          </Box>
        </Paper>
      </Container>
    </Root>
  );
};
