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
  const [objectList, setObjectList] = useState<IObject[]>([]);
  const [selectedObject, setSelectedObject] = useState<IObject | null>();

  const handleSaveObject = (object: IObject) => {
    if (!selectedObject) {
      const id = Date.now();
      object.id = id;
      setObjectList([...objectList, object]);
      setSelectedObject(object);
    } else {
      setObjectList(
        objectList.map((objectItem) =>
          objectItem.id === selectedObject.id ? object : objectItem)
      );
    }
  };

  const handleAddClick = () => {
    setSelectedObject(null);
  };

  return (
    <Root className={classes.root}>
      <Container maxWidth="md">
        <Box className={classes.buttonWrapper}>
          <Button
            variant="contained"
            onClick={handleAddClick}
          >
            Add Object
          </Button>
        </Box>
        <Paper className={classes.card}>
          <List className={classes.list}>
            {
              objectList.map((object) => (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={object.date.toString()} secondary={object.color} />
                  </ListItemButton>
                </ListItem>
              ))
            }
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
