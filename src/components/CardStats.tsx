import Card from "./Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  PM25: number;
  PM10: number;
  NO2: number;
}

interface EstadisticasCardProps {
  title: string;
  content: string;
  data: DataPoint[];
}

export const CardStats = ({ title, content, data }: EstadisticasCardProps) => {
  return (
    <Card title={title} content={content}>
      <div className="mt-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="PM25" fill="#8884d8" name="PM2.5" />
            <Bar dataKey="PM10" fill="#82ca9d" name="PM10" />
            <Bar dataKey="NO2" fill="#ffc658" name="NO2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
