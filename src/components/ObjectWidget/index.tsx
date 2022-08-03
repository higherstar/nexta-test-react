import { FC, useState } from 'react';
import * as React from 'react';
import { Box, FormControl, FormLabel, Stack, TextField } from '@mui/material';
import { DatePicker } from '../DatePicker';

interface IObjectWidgetProps {}

// Export datepicker
export const ObjectWidget: FC<IObjectWidgetProps> = ({}) => {
  const [position, setPosition] = useState([0, 0]);
  const [color, setColor] = useState('');
  const [date, setDate] = useState<string>('');

  return (
    <Stack display="flex" flexDirection="column" spacing={3}>
      <FormControl>
        <FormLabel sx={{ mb: 2 }}>Position</FormLabel>
        <TextField
          size="medium"
          label="X"
          sx={{ mb: 1 }}
        />
        <TextField
          size="medium"
          label="Y"
        />
      </FormControl>

      <FormControl>
        <FormLabel sx={{ mb: 2 }}>Color</FormLabel>
        <TextField
          size="medium"
          label="Color"
          sx={{ mb: 1 }}
        />
      </FormControl>

      <FormControl>
        <FormLabel sx={{ mb: 2 }}>Date</FormLabel>
        <DatePicker
          onChange={(val) => setDate(val as string)}
          value={date}
        />
      </FormControl>
    </Stack>
  );
};
