import React, { FC, useState } from 'react';
import { Box, Button, Container, Divider, List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material';

import { classes, Root } from './style';
import { ObjectWidget } from '../../components/ObjectWidget';
import { IObject } from '../../interfaces';

export const Home: FC = () => {
  const [objectList, setObjectList] = useState<IObject[]>([]);
  const [selectedObject, setSelectedObject] = useState<IObject | null>();

  const handleSaveObject = (object: IObject) => {
    if (!selectedObject) {
      object.id = Date.now();
      setObjectList([...objectList, object]);
      setSelectedObject(object);
    } else {
      object.id = selectedObject.id;
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
              objectList.map((object, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    selected={object.id === selectedObject?.id}
                    onClick={() => setSelectedObject(object)}
                  >
                    <span
                      className={classes.colorBadge}
                      style={{ background: object.color }}
                    />
                    <ListItemText
                      primary={`${object.point[0]}' ${object.point[1]}"`}
                      secondary={object.date.toDateString()}
                    />
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
