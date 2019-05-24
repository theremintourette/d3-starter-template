import '../styles/index.scss';
import * as d3 from 'd3';

// set the dimensions and margins of the graph
const margin = {
  top: 10,
  right: 40,
  bottom: 30,
  left: 30,
};
const width = 450 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select('#scatter_area')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr(
    'transform',
    `translate(${margin.left},${margin.top})`,
  );

// Create data
const data = [
  {
    x: 10,
    y: 20,
  },
  {
    x: 40,
    y: 90,
  },
  {
    x: 80,
    y: 50,
  },
];

// X scale and Axis
const x = d3
  .scaleLinear()
  .domain([0, 100]) // This is the min and the max of the data: 0 to 100 if percentages
  .range([0, width]); // This is the corresponding value I want in Pixel

svg
  .append('g')
  .attr(
    'transform',
    `translate(0, ${height})`,
  )
  .call(d3.axisBottom(x));

// X scale and Axis
const y = d3.scaleLinear()
  .domain([0, 100]) // This is the min and the max of the data: 0 to 100 if percentages
  .range([height, 0]); // This is the corresponding value I want in Pixel
svg
  .append('g')
  .call(d3.axisLeft(y));

// Add 3 dots for 0, 50 and 100%
svg
  .selectAll('whatever')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', d => x(d.x))
  .attr('cy', d => y(d.y))
  .attr('r', 7);
