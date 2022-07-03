import React from 'react'
import { ChartComponent, SeriesCollectionDirective,
SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries} from '@syncfusion/ej2-react-charts'

import { lineCustomSeries,LinePrimaryYAxis,LinePrimaryXAxis } from '../../data/dummy'
import  { useStateContext } from '../../contexts/ContextProvider';


const LineChart = () => {
  const { currentMode,currentColor } = useStateContext();
  return (
    <ChartComponent
    id='line-chart'
    height='420px'
    // X and Y axis data 
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    background={currentMode === 'Dark' ? currentColor : '#FFF'}
    legendSettings={{ background: 'white' }}
    >
      <Inject services = {[LineSeries,DateTime,Legend,Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item,index)=>
         <SeriesDirective ket={index}{...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart