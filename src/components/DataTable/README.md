# BasicDataTable Component

This README might not be fully useful but have fun.

A reusable React component for displaying tabular data using Material UI's DataGrid, with Mantine Flex for layout.

## Features
- Accepts custom columns and rows
- Can fetch data from an API (with optional row mapping)
- Responsive and centered layout
- Pagination, selection, and more

## Usage

### 1. Import the component
```tsx
import BasicDataTable from '@/components/DataTable/DataTables';
```

### 2. Define your columns
```tsx
const columns = [
  { field: 'id', headerName: 'Ref', width: 60 },
  { field: 'product_id', headerName: 'Product ID', width: 100 },
  { field: 'product_name', headerName: 'Product Name', width: 200 },
  // ...other columns...
];
```

### 3. Pass your data
#### Static data
```tsx
const rows = [
  { id: 1, product_id: 'A1', product_name: 'Cola' },
  // ...more rows...
];

<BasicDataTable columns={columns} rows={rows} />
```

#### API data (fetch in parent)
```tsx
const [tableData, setTableData] = useState([]);
useEffect(() => {
  fetch('https://your.api/endpoint')
    .then(res => res.json())
    .then(data => setTableData(data));
}, []);

<BasicDataTable columns={columns} rows={tableData} />
```

#### API data (let component fetch)
```tsx
const rowMapper = data => (data.items || []).map(item => ({
  id: item.id,
  product_id: item.product_id,
  product_name: item.product_name,
  // ...
}));

<BasicDataTable columns={columns} apiUrl="https://your.api/endpoint" rowMapper={rowMapper} />
```

## Props
- `columns` (required): Array of column definitions (see MUI DataGrid docs)
- `rows`: Array of row objects
- `apiUrl`: API endpoint to fetch data (optional)
- `rowMapper`: Function to map API response to row objects (optional)

## Example
```tsx
<BasicDataTable columns={columns} rows={tableData} />
// or
<BasicDataTable columns={columns} apiUrl="https://your.api/endpoint" rowMapper={rowMapper} />
```

## Notes
- If both `rows` and `apiUrl` are provided, `rows` takes precedence.
- The table is centered and takes up 60% of the screen width.
- See the source code for more advanced usage.
