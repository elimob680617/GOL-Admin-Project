import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';

import { Box, Card, OutlinedInput, Stack, Typography, styled } from '@mui/material';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import ForgetPasswordMessages from './ForgetPassword.messages';
import ResetPassFormStyleCompenent from './ResetPassFormStyleCompenent';
import SecondCountdown from './SecondCountdown ';

type FormValuesProps = {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
};
type ValueNames = 'code1' | 'code2' | 'code3' | 'code4' | 'code5';

const handleDelete = (index: number) => (event: any) => {
  // TODO: add if the key code in number or is Enter do the handleSubmit.
  if (event.keyCode === 46 || event.keyCode === 8) {
    event.currentTarget.parentNode.previousElementSibling?.children[0].focus();
  }
};

const VerifyCodeSchema = Yup.object().shape({
  code1: Yup.string().required('Code is required'),
  code2: Yup.string().required('Code is required'),
  code3: Yup.string().required('Code is required'),
  code4: Yup.string().required('Code is required'),
  code5: Yup.string().required('Code is required'),
});
const ContentStyle = styled(Card)(({ theme }) => ({
  maxWidth: 360,
  margin: 'auto',
  padding: theme.spacing(4),
}));

interface propState {
  username: string;
}

function ConfirmationForgetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = location.state as propState;
  const defaultValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
  };

  const {
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const values = watch();

  useEffect(() => {
    document.addEventListener('paste', handlePasteClipboard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!username) {
      navigate('/auth/forget-password');
    }
  }, [username, navigate]);

  const onSubmit = async (data: FormValuesProps) => {
    const { code1, code2, code3, code4, code5 } = data;
    const verificationCode = `${code1}${code2}${code3}${code4}${code5}`;

    navigate('/auth/reset-password/', { state: { verificationCode: verificationCode } });
  };

  const handlePasteClipboard = (event: ClipboardEvent) => {
    event.preventDefault();
    let data: string | string[] = event?.clipboardData?.getData('Text') || '';

    data = data.split('');

    Object.keys(values).forEach((_, index) => {
      const fieldIndex = `code${index + 1}`;
      setValue(fieldIndex as ValueNames, data[index]);
    });
  };

  const handleChangeWithNextField = (
    event: React.ChangeEvent<HTMLInputElement>,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  ) => {
    const { maxLength, value, name } = event.target;
    const fieldIndex = name.replace('code', '');

    const fieldIntIndex = Number(fieldIndex);

    if (value.length >= maxLength) {
      if (fieldIntIndex < 6) {
        const nextField = document.querySelector(`input[name=code${fieldIntIndex + 1}]`);

        if (nextField !== null) {
          (nextField as HTMLElement).focus();
        }
      }
    }

    handleChange(event);
  };

  const active = values.code1 && values.code2 && values.code3 && values.code4 && values.code5;

  const partialEmail = username.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, '$1*****@$2');
  return (
    <ResetPassFormStyleCompenent title="Forget Password">
      <ContentStyle>
        <Stack alignItems="center">
          <Typography variant="h4" color="text.primary">
            <FormattedMessage {...ForgetPasswordMessages.isItYou} />
          </Typography>
        </Stack>
        <>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary', textAlign: 'center', px: 2 }}>
            <FormattedMessage {...ForgetPasswordMessages.verificationEmailAlertMessage} values={{ partialEmail }} />
          </Typography>
          <Box mt={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack direction="row" spacing={2} justifyContent="center">
                {Object.keys(values).map((name, index) => (
                  <Controller
                    key={name}
                    name={`code${index + 1}` as ValueNames}
                    control={control}
                    render={({ field }) => (
                      <OutlinedInput
                        {...field}
                        onFocus={(e) => {
                          e.target.select();
                        }}
                        type="number"
                        onKeyUp={handleDelete(index)}
                        className="field-code"
                        autoFocus={index === 0}
                        placeholder="-"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          handleChangeWithNextField(event, field.onChange)
                        }
                        sx={{
                          '& fieldset': {
                            borderTop: 'unset',
                            borderRight: 'unset',
                            borderLeft: 'unset',
                            padding: 0,
                            borderRadius: 'unset',
                            borderBottomWidth: 4,
                            borderBottomStyle: 'solid',
                            borderBottomColor: 'grey.300',
                          },
                        }}
                        inputProps={{
                          maxLength: 1,
                          sx: {
                            p: 0,
                            textAlign: 'center',
                            width: 40,
                          },
                        }}
                      />
                    )}
                  />
                ))}
              </Stack>
              <SecondCountdown active={active} isSubmitting={isSubmitting} />
            </form>
          </Box>
        </>
      </ContentStyle>
    </ResetPassFormStyleCompenent>
  );
}
export default ConfirmationForgetPassword;
