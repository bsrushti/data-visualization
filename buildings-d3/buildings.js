const data = [
  {
    "name": "Burj Khalifa",
    "height": "828"
  },
  {
    "name": "Shanghai Tower",
    "height": "623"
  },
  {
    "name": "Abraj Al-Bait Clock Tower",
    "height": "601"
  },
  {
    "name": "Ping An Finance Centre",
    "height": "599"
  },
  {
    "name": "Lotte World Tower",
    "height": "544.5"
  },
  {
    "name": "One World Trade Center",
    "height": "541.3"
  },
  {
    "name": "Guangzhou CTF Finance Center",
    "height": "530"
  }
];

const main = () => {
  const svgHeight = 600;
  const myScale = d3.scaleLinear()
    .domain([0, 500])
    .range([0, 850]);

  const svg = d3.select("body")
    .append("svg")
    .attr("width", 600)
    .attr("height", svgHeight);

  const bar = svg.selectAll("g")
    .data(data)
    .enter()
    .append("g");

  bar.append("rect")
    .attr("fill", (d, i) => d3.schemeBlues[i+3][0])
    .attr("x", (d, i) => 70 + i * 65)
    .attr("y", d => svgHeight - myScale.invert(d.height))
    .attr("height", d => myScale.invert(d.height))
    .attr("width", 40);

  bar.append("text")
    .attr("x", (d, i) => 75 + i * 65)
    .attr("y", svgHeight - 20)
    .text(d => d.height);

  svg.append("line")
    .attr("x1", 0)
    .attr("y1", svgHeight)
    .attr("x2", 600)
    .attr("y2", svgHeight)
};

window.onload = main;
