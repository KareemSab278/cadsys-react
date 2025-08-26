
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Flex } from '@mantine/core';

// make editablebasicdatatable accept props - no hardcoded vals

export { BasicDataTable };

// refer to https://github.com/KareemSab278/booking-system/blob/main/frontend/src/components/BookingsTable.tsx
		// if you want to delete or update fields

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
        />
      </Box>
    </Flex>
  );
}
//===============================================================================================