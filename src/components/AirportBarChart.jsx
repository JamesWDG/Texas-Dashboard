import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { name: "A", value: 42 },
  { name: "B", value: 20 },
  { name: "C", value: 48 },
  { name: "D", value: 27 },
  { name: "E", value: 55 },
  { name: "F", value: 24 },
  { name: "G", value: 38 },
  { name: "H", value: 20 },
  { name: "I", value: 27 },
  { name: "J", value: 23 },
];

export default function AirportBarChart() {
  return (
    <ResponsiveContainer width="100%" height={200} style={{border: "1px solid black"}}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="url(#colorUv)" radius={[6,6,0,0]} />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0b4c7c" />
            <stop offset="100%" stopColor="#ff8c2b" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
}
