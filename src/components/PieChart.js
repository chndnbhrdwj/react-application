import Chart from 'react-google-charts'
import { Container } from "react-bootstrap";

export const PieChartSection = ({ passed, failed }) => {
    const shouldDisplay = () => {
        const jsx = passed || failed ? (
            <Chart
                width={'400px'}
                height={'250px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['Failed', failed],
                    ['Passed', passed],
                ]}
                options={{
                    title: 'Result',
                    colors: ['red', 'green'],
                    is3D: true,
                }}

            />) : (<></>);
        return jsx;
    }

    return shouldDisplay()
}