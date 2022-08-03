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

import { ObjectWidget } from '../../components/ObjectWidget';
import { classes, Root } from './style';

export const Home: FC = () => {
  const [objectList, setObjectList] = useState();
  const [selectedObject, setSelectedObject] = useState();

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

          <Box p={4}>
            <ObjectWidget />
          </Box>
        </Paper>
      </Container>
    </Root>
  );
};
