'use client';

import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import * as XLSX from "xlsx";
import Chart from './Chart';


const Portfolios = () => {
    const [navMap, setNavMap] = useState(new Map());
    const [excelStartDate, setExcelStartDate] = useState("");
    const [excelLastDate, setExcelLastDate] = useState("");
    const [trailingReturns, setTrailingReturns] = useState({});

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/NAVReport.xlsx");
                if (!response.ok) throw new Error("Failed to load Excel file");

                const arrayBuffer = await response.arrayBuffer();
                const workbook = XLSX.read(arrayBuffer, { type: "array" });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: false });

                const map = new Map();
                let arr = [];

                jsonData.forEach((row, index) => {
                    if (index > 5) {
                        const keys = Object.keys(row);
                        const dateStr = row.Date || row["NAV Date"] || row[keys[0]];
                        const amount = row.NAV || row["Net Asset Value"] || row[keys[1]];

                        if (dateStr && amount && !isNaN(amount)) {

                            arr.push({ date: dateStr, amount: Number(amount) });
                            const date = new Date(dateStr);
                            if (!isNaN(date)) {
                                map.set(date.getTime(), parseFloat(amount));
                            }
                        }
                    }
                });

                // Sort by date (ascending)
                const sortedEntries = Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
                const sortedMap = new Map(sortedEntries);

                if (sortedEntries.length > 0) {
                    setExcelStartDate(new Date(sortedEntries[0][0]).toLocaleDateString());
                    setExcelLastDate(new Date(sortedEntries.at(-1)[0]).toLocaleDateString());
                }
                setChartData(arr);
                setNavMap(sortedMap);
                computeTrailingReturns(sortedMap);
            } catch (error) {
                console.error("Error loading Excel:", error);
            }
        };

        fetchData();
    }, []);

    // Function to compute trailing returns
    const computeTrailingReturns = (map) => {
        const entries = Array.from(map.entries());
        if (entries.length === 0) return;

        const lastEntry = entries.at(-1);
        const lastDate = lastEntry[0];
        const lastNAV = lastEntry[1];

        // Periods in days
        const periods = {
            "1D": 1,
            "1W": 7,
            "1M": 30,
            "3M": 90,
            "6M": 180,
            "1Y": 365,
            "3Y": 365 * 3,
            "5Y": 365 * 5,
            "SI": (lastDate - entries[0][0]) / (1000 * 60 * 60 * 24), // total days
        };

        const results = {};

        for (const [label, days] of Object.entries(periods)) {
            let targetDate = lastDate - days * 24 * 60 * 60 * 1000;

            // Find the closest past NAV
            const pastEntry = entries.find(([date]) => date >= targetDate);
            if (!pastEntry) continue;

            const pastNAV = pastEntry[1];

            if (label.includes("Y") && label !== "1Y") {
                // CAGR for multi-year
                const years = days / 365;
                results[label] = (((lastNAV / pastNAV) ** (1 / years)) - 1) * 100;
            } else {
                // Simple return
                results[label] = ((lastNAV / pastNAV) - 1) * 100;
            }
        }

        // YTD: Jan 1st of current year
        const jan1 = new Date(new Date(lastDate).getFullYear(), 0, 1).getTime();
        const ytdEntry = entries.find(([date]) => date >= jan1);
        if (ytdEntry) {
            const pastNAV = ytdEntry[1];
            results["YTD"] = ((lastNAV / pastNAV) - 1) * 100;
        }

        setTrailingReturns(results);
    };


    return (
        <div>
            <Typography variant='h4'>
                Portfolios
            </Typography>

            <Typography variant='h5' my={2}>
                Trailing Returns (%)
            </Typography>

            <Table>
                <TableHead>
                    <TableRow>
                        {Object.keys(trailingReturns).map((period) => (
                            <TableCell key={period}>{period}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody >
                    <TableRow>
                        {Object.values(trailingReturns).map((val, i) => (
                            <TableCell key={i}>{val.toFixed(2)}%</TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>

            {
                chartData.length != 0 && <Chart data={chartData}
                    dataStartDate={excelStartDate}
                    dataLastDate={excelLastDate}
                />
            }


        </div >
    );
};

export default Portfolios;
