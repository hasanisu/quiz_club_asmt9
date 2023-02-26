import React, { useContext } from "react";
import { QuizContext } from "../layout/Root";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Statistic = () => {
  const productData = useContext(QuizContext);
  const data = productData.data;
  console.log(data);
  const { name, total } = data;
  return (
    <div className="lg:w-72 lg:mt-32 lg:mb-56 lg:mx-auto ">
      <LineChart width={450} height={400} data={data}>
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Statistic;
