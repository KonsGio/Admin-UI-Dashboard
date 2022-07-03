import React from 'react';
import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Pie = () => {
const { currentColor} = useStateContext();
return (
  <div style={{ backgroundColor: currentColor }} className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
    <ChartsHeader category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
 )
}
export default Pie