import { BasicBars, ComplexBars, BasicPieChart, BasicLineChart } from '@/components/DataTable/BarCharts';

function GraphsPage() {
	return (
		<>
			<BasicBars />
			<ComplexBars />
			<BasicPieChart />
			<BasicLineChart />
		</>
	);
}

export { GraphsPage };
