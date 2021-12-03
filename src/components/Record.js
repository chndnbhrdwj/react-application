import { Card, Table } from "react-bootstrap"


export const Record = ({ history }) => {
    const shouldDisplay = () => {
        const jsx = history.length > 0 ? (
            <Card style={{ width: '25rem', margin: '15px' }} bg="dark">
                <Card.Body>
                    <Card.Header style={{ color: 'white' }}>
                        <h5>Wrong Answers</h5>
                    </Card.Header>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Question</th>
                                <th>Right Answer</th>
                                <th>Your Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {populateTable(history)}
                        </tbody>
                    </Table>

                </Card.Body>
            </Card>
        ) : (<></>);
        return jsx;
    }
    return shouldDisplay()
}

const populateTable = (history) => {
    let jsx = [];
    history.map(h => {
        jsx.push(<tr key={history.indexOf(h)}>
            <td>{history.indexOf(h) + 1}</td>
            <td>{h[0]}</td>
            <td>{h[1]}</td>
            <td>{h[2]}</td>
        </tr>);
    })
    return jsx;
}