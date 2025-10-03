'use client';
import React, { useMemo, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { format } from 'date-fns';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import CustomDatePicker from '@/components/commonComponents/CustomDatePicker/CustomDatePicker';

const Chart = ({ data, dataStartDate, dataLastDate }) => {
    const [dates, setDates] = useState({
        fromDate: null,
        toDate: null,
    });

    const filteredData = useMemo(() => {
        const { fromDate, toDate } = dates;

        if (!fromDate && !toDate) return data;

        return data.filter(({ date }) => {
            const itemDate = new Date(date);
            if (fromDate && itemDate < new Date(fromDate)) return false;
            if (toDate && itemDate > new Date(toDate)) return false;
            return true;
        });
    }, [data, dates]);

    const handleDateChange = (key) => (date) =>
        setDates((prev) => ({
            ...prev,
            [key]: format(date, 'yyyy-MM-dd'),
        }));

    const commonDatePickerProps = {
        minDate: dataStartDate,
        maxDate: dataLastDate,
        dateFormat: 'yyyy-MM-dd',
        required: true,
        errors: '',
    };

    return (
        <Grid container my={3} spacing={2}>
            <Grid size={6}>
                <Typography variant="h5" my={2}>
                    Equity Chart
                </Typography>
            </Grid>

            <Grid size={6}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                    <CustomDatePicker
                        {...commonDatePickerProps}
                        selected={dates.fromDate}
                        onChange={handleDateChange('fromDate')}
                        label="From Date"
                    />
                    <CustomDatePicker
                        {...commonDatePickerProps}
                        selected={dates.toDate}
                        onChange={handleDateChange('toDate')}
                        label="To Date"
                    />
                </Box>
            </Grid>

            <Grid size={12} sx={{ height: 400 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={filteredData}
                        margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="step"
                            strokeWidth={1}
                            dataKey="amount"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Grid>
        </Grid>
    );
};

export default Chart;
