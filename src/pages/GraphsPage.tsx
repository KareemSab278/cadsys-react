import { useEffect, useState } from 'react';
import {
  BasicBars,
  BasicLineChart,
  BasicPieChart,
  ComplexBars,
} from '../components/DataTable/BarCharts';

function GraphsPage() {
  const [Data, setData] = useState([]);

  //==============================================
  useEffect(() => {
    async function fetchAndSetData() {
      const response = await fetch(
        'https://info.coin-a-drink.co.uk/api/?action=scanner/get_planogram&machine_id=2666'
      );
      const received = await response.json();

      // Map plan_items to { name, value }
      const mapped = Array.isArray(received.plan_items)
        ? received.plan_items.map((item) => ({
            name: item.product_name,
            value: item.stock,
            required: item.required,
            price: item.price,
          }))
        : [];

      setData(mapped);
    }

    fetchAndSetData();
  }, []);
  //==============================================

  return (
    <>
      <p style={{ textAlign: 'center' }}>
        it is possible to get the data into pdf using this:
        https://www.npmjs.com/package/react-to-pdf?activeTab=readme
      </p>

      <BasicBars
        title="Current Stock"
        description="Stock and Required per product"
        apiData={Data}
        labelKey="name"
        seriesKeys={['value', 'required', 'price']}
      />

      <ComplexBars
        title="Complex Stock Chart"
        description="Visualize Stock, Required, and Price"
        apiData={Data}
        labelKey="name"
        seriesKeys={['value', 'required', 'price']}
      />
      
      <BasicPieChart />
      <BasicLineChart />
    </>
  );
}

export { GraphsPage };
