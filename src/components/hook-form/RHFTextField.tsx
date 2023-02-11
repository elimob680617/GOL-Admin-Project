// form
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';

// @mui
import { TextField, TextFieldProps } from '@mui/material';

// ----------------------------------------------------------------------

interface IProps {
  name: string;
  rules?: RegisterOptions;
}

export default function RHFTextField({ name, rules, ...other }: IProps & TextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} fullWidth error={!!error} helperText={error?.message} {...other} />
      )}
    />
  );
}
