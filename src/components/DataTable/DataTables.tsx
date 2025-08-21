// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { Flex } from '@mantine/core';

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   { field: 'firstName', headerName: 'First name', width: 150, editable: true },
//   { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
//   { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     sortable: false,
//     width: 160,
//     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//   },
//   { field: 'city', headerName: 'City', width: 120 },
//   { field: 'country', headerName: 'Country', width: 120 },
//   { field: 'email', headerName: 'Email', width: 200 },
//   { field: 'status', headerName: 'Status', width: 100 },
// ];
// // ...existing code...
// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, city: 'Winterfell', country: 'Westeros', email: 'jon.snow@got.com', status: 'Active' },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, city: 'Casterly Rock', country: 'Westeros', email: 'cersei.lannister@got.com', status: 'Inactive' },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, city: 'King\'s Landing', country: 'Westeros', email: 'jaime.lannister@got.com', status: 'Active' },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, city: 'Winterfell', country: 'Westeros', email: 'arya.stark@got.com', status: 'Active' },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, city: 'Dragonstone', country: 'Westeros', email: 'daenerys.targaryen@got.com', status: 'Inactive' },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150, city: 'Asshai', country: 'Essos', email: 'melisandre@got.com', status: 'Active' },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, city: 'Braavos', country: 'Essos', email: 'ferrara.clifford@got.com', status: 'Active' },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, city: 'Pentos', country: 'Essos', email: 'frances.rossini@got.com', status: 'Inactive' },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, city: 'Meereen', country: 'Essos', email: 'roxie.harvey@got.com', status: 'Active' },
// ];

// function BasicDataTable() {
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Flex } from '@mantine/core';

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

  if (apiUrl && loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (displayRows.length === 0) return <div>No data found.</div>;

  return (
    <Flex justify="center" align="center" style={{ width: '100%' }}>
      <Box sx={{ height: '10%', width: 'auto' }}>
        <DataGrid
          rows={displayRows}
          columns={columns}
          pagination
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5, 10, 25, 100]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Flex>
  );
}

export default BasicDataTable;