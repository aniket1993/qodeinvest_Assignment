import { colors } from '@/theme/theme';
import { FormHelperText, InputLabel } from '@mui/material';
import { borderBottom, padding, styled } from '@mui/system';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StyledPickerWrapper = styled('div')(({ theme }) => ({
    '& .react-datepicker__day--selected, & .react-datepicker__day--keyboard-selected': {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
    },
    '& .react-datepicker__day--selected:hover, & .react-datepicker__day--keyboard-selected:hover': {
        backgroundColor: '#222',
    },
    '& .react-datepicker__day': {
        // width: 36,
        // lineHeight: '36px',
        borderRadius: '50%',
        margin: '0.2rem',
    },
    '& .react-datepicker__view-calendar-icon input': {
        padding: "0px 11px 3px 30px"
    },
    '& .react-datepicker__header': {
        backgroundColor: "#ffffff",
        borderBottom: "none",
        padding: "10px 0"
    },
    '& .react-datepicker-wrapper input.errorClass': {
        border: `1px solid ${colors?.error}`,
    }
}));

export default function CustomDatePicker({ selected,
    onChange,
    label,
    required,
    id,
    errors,
    ...rest }) {
    return (
        <StyledPickerWrapper>
            <InputLabel shrink htmlFor={id}>
                {label} {required && <span style={{ color: 'red' }}>*</span>}
            </InputLabel>
            <DatePicker
                {...rest}
                // showIcon
                // showMonthDropdown
                // showYearDropdown
                // dateFormat="yyyy-MM-dd"
                selected={selected}
                onChange={onChange}
                className={errors[id]?.message ? "errorClass" : ""}
            />
            {errors[id]?.message && <FormHelperText error>{errors[id]?.message}</FormHelperText>}
        </StyledPickerWrapper>
    );
}