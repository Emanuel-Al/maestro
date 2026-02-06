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

  return (
    <div className="flex flex-col items-center">
      {/* PieChart */}
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
        width={200}
        height={200}
        hideLegend={true}
      />

      {/* Custom Legend */}
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        {data.map((d) => (
          <div key={d.label} className="flex items-center gap-2">
            {/* Color box */}
            <div
              style={{ backgroundColor: d.color }}
              className="w-4 h-4 rounded-sm"
            ></div>
            {/* Label */}
            <span className="text-gray-800 dark:text-white font-medium">
              {d.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
