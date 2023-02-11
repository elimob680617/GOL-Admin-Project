import { useMemo } from 'react';
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { Autocomplete, TextField, styled, useTheme } from '@mui/material';

import { Icon } from './Icon';

interface PhoneNumberProps {
  value: string;
  onChange: (val: string) => void;
  placeHolder: string;
  isError?: boolean;
  onBlur?: any;
}

const PhoneNumberStyle = styled(PhoneInput)(({ theme }) => ({
  '&.PhoneInput': {
    width: '49%',
    // border: `1px solid #000 !important`,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#C8D3D9 !important',
    borderRadius: 8,
    height: 40,
    position: 'relative',
    '& .css-1gnsfv9': {
      borderColor: '#000',
    },

    '&:focus-within,&:hover': {
      borderColor: theme.palette.primary.main,
    },
    '& > input': {
      ...theme.typography.body1,
      color: theme.palette.text.disabled,
      fontWeight: 400,
    },

    '& .PhoneInputCountrySelect.Mui-focused': {
      opacity: 1,
      backgroundColor: theme.palette.grey[0],
      zIndex: 4,
      width: '100%',
      borderRadius: 4,
      marginBottom: 2,
      marginRight: 20,
      '& .MuiInputBase-root.MuiOutlinedInput-root': {
        // backgroundColor: surface.default,
        paddingLeft: theme.spacing(2),
        paddingTop: 0,
        paddingBottom: 0,
        '& fieldset': {
          border: 'unset',
        },
        '& input': {
          padding: 0,
        },
      },
    },
    '& .PhoneInputCountryIcon--border': {
      boxShadow: 'unset',
      marginLeft: 10,
      marginRight: 10,
      '& > img': {
        borderRadius: 2,
      },
    },
    '& .PhoneInputCountry': {
      width: '100%',
      '& .MuiAutocomplete-root': {
        backgroundColor: '#fff',
      },
    },
  },
  '& input': {
    border: 'unset',
    zIndex: 3,
    width: '100%',
    borderRadius: 8,
    '&:focus-visible': {
      outline: 'unset',
    },
  },
  '& .arrow-select': {
    marginRight: 10,
    height: 20,
  },
  '& .PhoneInputCountryIcon': {
    borderRadius: 4,
  },
}));

function PhoneNumber(props: PhoneNumberProps) {
  const { onChange, value, placeHolder, isError, onBlur } = props;
  const theme = useTheme();
  return (
    <PhoneNumberStyle
      style={{ borderColor: isError ? theme.palette.error.main : theme.palette.primary.main }}
      placeholder={placeHolder}
      autoComplete="phoneNumber"
      value={value}
      defaultCountry="US"
      onChange={(e) => onChange(e || '')}
      international={false}
      addInternationalOption={false}
      countrySelectComponent={CountrySelect}
      initialValueFormat="national"
      onBlur={(e) => onBlur(e)}
    />
  );
}

export default PhoneNumber;

const CountrySelect = ({ value, onChange, labels, options }: any) => {
  const newOptions = useMemo(
    () =>
      options.map((_: any) => ({
        value: _.value,
        label: `${_.label}  (+${getCountryCallingCode(_.value)})`,
        icon: (
          <img
            width={20}
            alt={_.title}
            style={{ marginRight: '10px' }}
            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${_.value}.svg`}
          />
        ),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <>
      <Autocomplete
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            // InputProps={{
            //   ...params.InputProps,
            //   startAdornment: (
            //     <img
            //     width={20}
            //     style={{marginRight: 8}}
            //       src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${value}.svg`}
            //     />
            //   ),
            // }}
          />
        )}
        options={newOptions}
        value={value}
        onChange={(e, val: any) => onChange(val?.value || undefined)}
        className="PhoneInputCountrySelect"
        size="small"
        disableClearable
        freeSolo
        renderOption={(props, option: any) => (
          <span style={{ width: '100%' }} {...props}>
            {option?.icon && (
              <span>{typeof option.icon === 'string' ? <img src={option.icon} alt="" /> : option.icon}</span>
            )}
            <span>{option?.label}</span>
          </span>
        )}
      />
      <div className="PhoneInputCountryIcon PhoneInputCountryIcon--border">
        <img
          className="PhoneInputCountryIconImg"
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${value}.svg`}
          alt=""
        />
      </div>
      <div style={{ marginLeft: 8, marginRight: 8 }}>+{value ? getCountryCallingCode(value) : ''}</div>
      <div className="arrow-select">
        <Icon name="down-arrow" />
      </div>
    </>
  );
};
