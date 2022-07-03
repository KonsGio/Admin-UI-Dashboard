import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Calendar = () => {
  const { currentColor} = useStateContext();

  return (
    <div style={{ backgroundColor: currentColor }} className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Calendar" />
    {/* ScheduleCOmponent not selfclosing because we need 
    to inject extra services */}
      <ScheduleComponent
      height="650px"
      eventSettings={{dataSource:scheduleData}}
      // This has to do with the dates of events and current date conflict
      selectedDate={new Date(2021 ,0 , 10)}>
        <Inject services = {[Day, Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calendar