import { useEffect, useState } from 'react';
import { BasicDataTable, EditableBasicDataTable } from '@/components/DataTable/DataTables';

const columns = [
	{ field: 'id', headerName: 'Ref', width: 60 },
	{ field: 'product_id', headerName: 'Product ID', width: 100 },
	{ field: 'product_name', headerName: 'Product Name', width: 200 },
	{ field: 'price', headerName: 'Price (£)', width: 90 },
	{ field: 'stock', headerName: 'Stock', width: 80 },
	{ field: 'required', headerName: 'Required', width: 80 },
	{ field: 'plan_row', headerName: 'Row', width: 60 },
	{ field: 'plan_col', headerName: 'Col', width: 60 },
];

function DataTablesPage() {
	const [tableData, setTableData] = useState<any[]>([]);

	useEffect(() => {
		async function fetchAndSetData() {
			const response = await fetch(
				'https://info.coin-a-drink.co.uk/api/?action=scanner/get_planogram&machine_id=2666'
			);
			const received = await response.json();
			const mappedRows = (received.plan_items || []).map((item: any) => ({
				id: item.plan_ref,
				product_id: item.product_id,
				product_name: item.product_name,
				price: item.price,
				stock: item.stock,
				required: item.required,
				plan_row: item.plan_row,
				plan_col: item.plan_col,
			}));
			setTableData(mappedRows);
		}
		fetchAndSetData();
	}, []);

	return (
		<>
			<BasicDataTable columns={columns} rows={tableData} />
			<EditableBasicDataTable />
		</>
	);
}

export { DataTablesPage };
