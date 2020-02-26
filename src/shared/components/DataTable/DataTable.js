import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import './DataTable.scss';

const DataTable = ({ keyField, data, columns }) => {
  return (
    <BootstrapTable
      keyField={keyField}
      data={data}
      columns={columns}
      pagination={paginationFactory()}
      boostrap4={true}
    />
  );
};

export default DataTable;
