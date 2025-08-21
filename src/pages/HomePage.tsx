import { useEffect, useState } from 'react';
import {
  ButtonPrimaryRound,
  ButtonPrimarySquare,
  DangerButtonRound,
  DangerButtonSquare,
  SuccessButtonRound,
  SuccessButtonSquare,
} from '../components/Buttons/Buttons';
import { BasicForm, TextInputField } from '@/components/Forms/InputForm';
import { BasicSelectInput } from '@/components/SelectInput/SelectInputs';
import { BasicDataTable, EditableBasicDataTable } from '@/components/DataTable/DataTables';
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
    <div style={{ padding: 32, maxWidth: 1200, margin: '0 auto' }}>
      <h1>CADSYS React Component Showcase</h1>
      <section>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
          <ButtonPrimaryRound text="Primary" onClick={() => alert('Primary Round Button Clicked!')} />
          <DangerButtonRound text="Danger" onClick={() => alert('Danger Round Button Clicked!')} />
          <SuccessButtonRound text="Success" onClick={() => alert('Success Round Button Clicked!')} />
          {/* <ButtonPrimarySquare text="Primary" onClick={() => alert('Primary Square Button Clicked!')} /> */}
          {/* <DangerButtonSquare text="Danger" onClick={() => alert('Danger Square Button Clicked!')} /> */}
          {/* <SuccessButtonSquare text="Success" onClick={() => alert('Success Square Button Clicked!')} /> */}
        </div>
      </section>
      <section>
        <h2>Form & Select Input</h2>
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', marginBottom: 24 }}>
          <BasicForm />
          <TextInputField />
          <BasicSelectInput
            data={['React', 'Angular', 'Vue', 'Svelte', 'burger']}
            value={selected}
            onChange={(value) => setSelected(value ?? '')}
          />
        </div>
      </section>
      <section>
        <h2>Data Table</h2>
        <BasicDataTable columns={columns} rows={tableData} />
        <EditableBasicDataTable />
      </section>
      <section>
        <h2>Charts</h2>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 24 }}>
          <BasicBars />
          <ComplexBars />
          <BasicPieChart />
          <BasicLineChart />
        </div>
      </section>
    </div>
  );
}
