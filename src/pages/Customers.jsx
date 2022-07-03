import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, 
Edit, Toolbar, Sort, Filter,Search } from '@syncfusion/ej2-react-grids';
import {customersData, customersGrid} from '../data/dummy' ;
import { Header } from '../components';
import { AddDialogFieldSettings } from '@syncfusion/ej2/gantt';
import { useStateContext } from '../contexts/ContextProvider';


const Customers = () => {
  const { currentColor} = useStateContext();

  return (
    <div style={{ backgroundColor: currentColor }} className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers" />
      <GridComponent
      // pupulate data coming from dummy 
      dataSource={customersData}
      // pagination
      allowPaging
      // sorting for categories
      allowSorting
      toolbar={['Delete','Add','Edit']}
      editSettings={{allowDeleting:true, allowAdding:true,allowEditing:true}}
      width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item,index) => (
          <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/* Next button for pagination */}
        <Inject services ={[Page, Search, Toolbar, Selection, Edit, Sort,Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers