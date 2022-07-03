import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    // Orders menu tab
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees" />
      <GridComponent
      // pupulate data coming from dummy 
      dataSource={employeesData}
      // pagination
      allowPaging
      // sorting for categories
      allowSorting
      toolbar={['Search']}
      width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item,index) => (
          <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/* Next button for pagination */}
        <Inject services ={[Page, Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees