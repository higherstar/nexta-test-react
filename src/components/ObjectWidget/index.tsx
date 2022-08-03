import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { Box, Button, FormControl, FormLabel, Stack, TextField } from '@mui/material';

import { DatePicker } from '../DatePicker';
import { IObject, IPoint } from '../../interfaces';

interface IObjectWidgetProps {
  object?: IObject;
  onSave: (IObject) => void;
}

// Export datepicker
export const ObjectWidget: FC<IObjectWidgetProps> = ({
  object,
  onSave,
}) => {
  const [point, setPoint] = useState<IPoint>([0, 0]);
  const [color, setColor] = useState('');
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    if (object) {
      setPoint(object.point);
      setColor(object.color);
      setDate(object.date);
    }
  }, [object]);

  const handleChangePoint = (e, axis) => {
    point[axis]  = e.target.value;
    setPoint(point);
  }

  const handleSave = () => {
    onSave({
      point,
      color,
      date,
    });
  }

  return (
    <Stack display="flex" flexDirection="column" spacing={3} width="100%">
      <FormControl>
        <FormLabel sx={{ mb: 1 }}>Position</FormLabel>
        <TextField
          size="medium"
          label="X"
          sx={{ mb: 1 }}
          onChange={(e) => handleChangePoint(e, 0)}
        />
        <TextField
          size="medium"
          label="Y"
          onChange={(e) => handleChangePoint(e, 1)}
        />
      </FormControl>

      <FormControl>
        <FormLabel sx={{ mb: 1 }}>Color</FormLabel>
        <TextField
          size="medium"
          label="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel sx={{ mb: 1 }}>Date</FormLabel>
        <DatePicker
          value={date}
          onChange={(val) => setDate(val)}
        />
      </FormControl>

      <Box width="100%" display="flex" justifyContent="flex-end">
        <Button onClick={handleSave}>Save</Button>
      </Box>
    </Stack>
  );
};
