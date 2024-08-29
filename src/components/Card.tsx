import React from "react";

interface CardProps {
  index: number;
  title: string;
  content: string;
}

export const Card = ({ content, index, title }: CardProps) => {
  return (
    <section
      key={index}
      id={title}
      className="scroll-mt-16 bg-white shadow-md rounded-lg overflow-hidden"
    >
      <header className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </header>
      <div className="px-6 py-4">
        <p className="whitespace-pre-line text-gray-600">{content}</p>
        {/* {section.title === "Ejemplo de Datos" && (
      <div className="mt-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sampleData}>
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
    )} */}
      </div>
    </section>
  );
};

export default Card;
