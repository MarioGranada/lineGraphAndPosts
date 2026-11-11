import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import {
  FormControl,
  Select,
  MenuItem,
  FormLabel,
  Button
} from '@material-ui/core';
import Chart from 'react-apexcharts';

import './LineGraphContainer.scss';

const LineGraphContainer = () => {
  const [csvFileDataState, setCsvFileDataState] = useState({});
  const [csvFileHeadersState, setCsvFileHeadersState] = useState([]);

  const [xAxisState, setXAxisState] = useState('');
  const [yAxisState, setYAxisState] = useState('');

  const [chartState, setChartState] = useState({
    options: {
      chart: {
        id: 'test-chart'
      },
      xaxis: {
        categories: []
      },
      yaxis: {
        categories: []
      }
    },
    series: [
      {
        name: 'chart-default-series',
        data: []
      }
    ]
  });

  const selectXAxisStateHandler = event => {
    setXAxisState(event.target.value);
  };

  const selectYAxisStateHandler = event => {
    setYAxisState(event.target.value);
  };

  const drawChart = () => {
    const xValues = csvFileDataState.map(item => item[xAxisState]);
    const yValues = csvFileDataState.map(item => item[yAxisState]);
    const data = xValues.map((item, index) => ({ x: item, y: yValues[index] }));

    setChartState({
      options: {
        ...chartState.options,
        xaxis: { categories: xValues },
        yaxis: { categories: yValues }
      },
      series: [{ name: 'chart-default-series', data }]
    });
  };

  const csvParseOptions = {
    header: true,
    skipEmptyLines: true,
    dynamicTypiing: true
  };

  const onCSVFileLoaded = data => {
    setCsvFileDataState(data);
    setCsvFileHeadersState(data && data[0] ? Object.keys(data[0]) : []);
  };

  return (
    <div className="line-graph-container">
      <h1> Line Graph</h1>
      <div className="chart-form">
        <h3>Graph data:</h3>
        <FormControl>
          <CSVReader
            onFileLoaded={onCSVFileLoaded}
            parserOptions={csvParseOptions}
            cssClass="react-csv-input"
            label="Select CSV file"
          />
        </FormControl>
        <br />

        <FormControl variant="outlined">
          <FormLabel>X Axis</FormLabel>

          <Select
            labelId="x-axis"
            labelWidth={500}
            value={xAxisState}
            onChange={selectXAxisStateHandler}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {csvFileHeadersState &&
              csvFileHeadersState.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined">
          <FormLabel>Y Axis</FormLabel>

          <Select
            labelId="y-axis"
            labelWidth={500}
            value={yAxisState}
            onChange={selectYAxisStateHandler}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {csvFileHeadersState &&
              csvFileHeadersState.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl>
          <Button color="primary" variant="contained" onClick={drawChart}>
            Apply
          </Button>
        </FormControl>
      </div>
      <div className="chart-box">
        <Chart
          options={chartState.options}
          series={chartState.series}
          type="line"
          width="500"
        />
      </div>
    </div>
  );
};

export default LineGraphContainer;
