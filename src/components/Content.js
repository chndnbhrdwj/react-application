import { Container, Row, Col } from 'react-bootstrap'

export const Content = () => {

    const text = `In some cases formatting a value for display might be an expensive operation. It’s also unnecessary unless a Hook is actually inspected. For this reason useDebugValue accepts a formatting function as an optional second parameter. This function is only called if the Hooks are inspected. It receives the debug value as a parameter and should return a formatted display value.
    For example a custom Hook that returned a Date value could avoid calling the toDateString function unnecessarily by passing the following formatter:`

    return (
        <Container fluid>
            <Row>
                <Col>{text}</Col>
            </Row>
            <Row>
                <Col  xs={2}>{text}</Col>
                <Col>{text}</Col>
                <Col>{text}</Col>
            </Row>
        </Container>


    )
}