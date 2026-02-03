import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", users: 1000 },
  { name: "Feb", users: 1800 },
  { name: "Mar", users: 2300 },
  { name: "Apr", users: 2600 },
  { name: "May", users: 2100 },
  { name: "Jun", users: 2900 },
  { name: "Jul", users: 3700 },
  { name: "Aug", users: 3400 },
];

export default function UserStatsChart() {
  return (
    <ResponsiveContainer width="100%" height={180} style={{border: "1px solid black"}}>
      <AreaChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0b4c7c" />
            <stop offset="100%" stopColor="#ff8c2b" />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="users"
          stroke="#0b4c7c"
          fill="url(#colorUsers)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
