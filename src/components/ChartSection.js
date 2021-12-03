import Chart from "react-google-charts";
import { Container } from "react-bootstrap";
import {useContext} from 'react'
import { CardContext } from './CardSection'

export const ChartSection = () => {

    const {passed, failed, total} = useContext(CardContext)
    
    const shouldDisplay = () => {
        const jsx = total > 0 ? (
            <Chart
                width={'300px'}
                height={'200px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Multiplication', 'Passed', 'Failed', 'Total'],
                    ['2021', passed, failed, total]
                ]}
                options={{
                    chart: {
                        title: 'Result',
                        subtitle: 'Multiplication Result',
                    },
                    colors: ['green', 'red', 'orange'],
                }}
            />
        ) : (<></>);
        return jsx;
    }
    return shouldDisplay()
}