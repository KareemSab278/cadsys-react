
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Flex } from '@mantine/core';

// make editablebasicdatatable accept props - no hardcoded vals

export { BasicDataTable, EditableBasicDataTable };


type BasicDataTableProps = {
  columns: GridColDef[];
  apiUrl?: string;
  rows?: any[];
  rowMapper?: (data: any) => any[];
};

function BasicDataTable({ columns, apiUrl, rows, rowMapper }: BasicDataTableProps) {
  const [fetchedRows, setFetchedRows] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 20,
  });

  React.useEffect(() => {
    if (!apiUrl) return;
    setLoading(true);
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
      })
      .then((data) => {
        const mappedRows = rowMapper ? rowMapper(data) : data;
        setFetchedRows(mappedRows);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [apiUrl, rowMapper]);

  // Use rows prop if provided, otherwise use fetchedRows
  const displayRows = rows && rows.length > 0 ? rows : fetchedRows;
  const editable = true;

  if (apiUrl && loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (displayRows.length === 0) return <div>No data found.</div>;

  return (
    <Flex justify="center" align="center" style={{ width: '100%' }}>
      <Box sx={{ height: '10%', width: 'auto'}}>
        <DataGrid
          rows={displayRows}
          columns={columns}
          pagination
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5, 10, 25, 100]}
          
          // checkboxSelection
          // disableRowSelectionOnClick
          
          
        />
      </Box>
    </Flex>
  );
}


const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function EditableBasicDataTable() { // you have to set up the data yourself with this one
  return (
    <Flex justify="center" align="center" style={{ width: '100%' }}>
    <Box sx={{ height: 400, width: 'auto'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </Flex>
  );
}