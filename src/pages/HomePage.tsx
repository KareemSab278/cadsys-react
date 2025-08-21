import { useEffect, useState } from 'react';
import  {BasicDataTable, EditableBasicDataTable}  from '@/components/DataTable/DataTables';
import { BasicForm, TextInputField } from '@/components/Forms/InputForm';
import { BasicSelectInput } from '@/components/SelectInput/SelectInputs';
import {
  ButtonPrimaryRound,
  ButtonPrimarySquare,
  DangerButtonRound,
  DangerButtonSquare,
  SuccessButtonRound,
  SuccessButtonSquare,
} from '../components/Buttons/Buttons';
import { BasicNavBar } from '../components/Navigation/NavigationBar';
import { BasicBars, ComplexBars, BasicPieChart, BasicLineChart } from '@/components/DataTable/BarCharts';


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

export function HomePage() {
  const [selected, setSelected] = useState('React');
  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAndSetData() {
      const response = await fetch(
        'https://info.coin-a-drink.co.uk/api/?action=scanner/get_planogram&machine_id=2666'
      );
      const received = await response.json();
      // Map the received data to table rows
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
      {/* <BasicNavBar /> */}
      {/* buttons */}
      <ButtonPrimaryRound
        text="Primary Round"
        onClick={() => {
          alert('Primary Round Button Clicked!');
        }}
      />
      <ButtonPrimarySquare
        text="Primary Square"
        onClick={() => {
          alert('Primary Square Button Clicked!');
        }}
      />
      <DangerButtonRound
        text="Danger Round"
        onClick={() => {
          alert('Danger Round Button Clicked!');
        }}
      />
      <DangerButtonSquare
        text="Danger Square"
        onClick={() => {
          alert('Danger Square Button Clicked!');
        }}
      />
      <SuccessButtonRound
        text="Success Round"
        onClick={() => {
          alert('Success Round Button Clicked!');
        }}
      />
      <SuccessButtonSquare
        text="Success Square"
        onClick={() => {
          alert('Success Square Button Clicked!');
        }}
      />
      {/* buttons */}
      <BasicForm />
      <TextInputField /> {/* this can be styled btw just refer to online docs */}
      <BasicDataTable columns={columns} rows={tableData} />
      <EditableBasicDataTable />
      <BasicSelectInput
        data={['React', 'Angular', 'Vue', 'Svelte', 'burger']}
        value={selected}
        onChange={(value) => setSelected(value ?? '')} // cannot accept null
      />

      <BasicBars />
      <ComplexBars />
      <BasicPieChart />
      <BasicLineChart />
    </>
  );
}
