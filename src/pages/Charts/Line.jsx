import React from 'react';
import { ChartsHeader, LineChart } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Line = () => {
  const { currentColor} = useStateContext();

  return (
  <div style={{ backgroundColor: currentColor }} className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
    <ChartsHeader category="Chart" title="Inflation Rate" />
    <div className="w-full">
      <LineChart />
    </div>
  </div>
)
  }
export default Line