import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Orders = () => {
  const { currentColor} = useStateContext();

  return (
    // Orders menu tab
    <div style={{ backgroundColor: currentColor }} className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders"  />
      <GridComponent
      // pupulate data coming from dummy 
      id='gridcomp'
      dataSource={ordersData}
      // pagination
      allowPaging
      // sorting for categories
      allowSorting
      
      >
        <ColumnsDirective>
          {ordersGrid.map((item,index) => (
          <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/* Next button for pagination */}
        <Inject services ={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport,
        Edit, PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Orders