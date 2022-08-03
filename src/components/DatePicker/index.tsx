import { FC } from 'react';
import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';

interface IDatePickerProps {
  label?: string;
  format?: string;
  onChange: (date: string | Date | null) => void;
  value: string;
}

// Export datepicker
export const DatePicker: FC<IDatePickerProps> = ({
  label,
  format = 'MM/dd/yyyy',
  onChange,
  value,
}) => {

  const handleChange = (newValue: Date | null) => {
    onChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label={label && label}
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
