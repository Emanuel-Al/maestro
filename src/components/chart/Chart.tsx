import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

interface ChartProps {
  val1: number;
  val2: number;
  val3: number;
  val4: number;
}

const Chart = ({ val1, val2, val3, val4 }: ChartProps) => {
  const data = [
    { label: "Quero Aprender", value: val1, color: "#6B7280" },
    { label: "Aprendendo", value: val2, color: "#3B82F6" },
    { label: "Praticando", value: val3, color: "#F97316" },
    { label: "Aprendida", value: val4, color: "#22C55E" },
  ];
  const settings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
  };
  return (
    <div>
      <PieChart
        series={[
          {
            innerRadius: 50,
            outerRadius: 100,
            data,
            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        {...settings}
      />
    </div>
  );
};

export default Chart;
