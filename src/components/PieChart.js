import Chart from 'react-google-charts'
import {useContext} from 'react'
import { CardContext } from './CardSection';

export const PieChartSection = () => {
    
    const { passed, failed } = useContext(CardContext)
    
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