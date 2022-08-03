import React, { FC, useState } from 'react';
import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material';

import { classes, Root } from './style';

export const Home: FC = () => {
  const [objectList, setObjectList] = useState();
  const [selectedObject, setSelectedObject] = useState();

  return (
    <Root className={classes.root}>
      <Container maxWidth="md">
        <Paper className={classes.card}>
          <List className={classes.list}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Item" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider orientation="vertical" flexItem />
        </Paper>
      </Container>
    </Root>
  );
};
