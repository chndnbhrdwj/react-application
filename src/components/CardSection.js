import React, { useState } from 'react';
import { MDBInput } from "mdbreact";
import { Container } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import FormControl from 'react-bootstrap/FormControl'
import { ChartSection } from './ChartSection'
import { PieChartSection } from './PieChart'

export const CardSection = ({ title, buttonName }) => {
    const [stat, setStat] = useState([0, 0, 0])

    const textInput = React.createRef();
    const card = React.createRef();
    const cardTitle = React.createRef();
    const question = React.createRef();
    const resultRef = React.createRef();

    let result = undefined;
    let background = 'dark';
    let afterText = undefined;

    let failed = stat[0],
        passed = stat[1],
        total = stat[2];

    const [operand1, operand2, answer] = buildQuestion();

    const handleSubmit = (event) => {
        result = (Number(textInput.current.value))
        textInput.current.value = '';
        if (result === answer) {
            passed++;
            total++;
            cardTitle.current.textContent = undefined;
            resultRef.current.textContent = undefined;
        } else {
            failed++;
            total++;
            afterText = `${text} = ${answer}`
            cardTitle.current.textContent = afterText;
            resultRef.current.textContent = `Your answer ${result}`
        }
        //background = result === answer ? 'Success' : 'Danger';
        //card.current.className=`card bg-${background.toLowerCase()}`;
        setStat([failed, passed, total])
    }

    let text = `${operand1} * ${operand2}`;

    return (
        <Container fluid>
            <Stack direction="horizontal" gap={5}>
                <Card ref={card} style={{ width: '25rem', margin: '15px' }} bg={background.toLowerCase()}>
                    <Card.Body>
                        <Card.Header style={{ color: 'white' }}>
                            <h3>{title}</h3>
                        </Card.Header>
                        <Stack direction="horizontal" gap={1}>
                            <Card.Title ref={cardTitle} style={{ color: 'yellow' }}>
                                {afterText}</Card.Title>
                            <Card.Title ref={resultRef} style={{ color: 'red' }}>{result}</Card.Title>
                        </Stack>
                        <Badge style={styling.badge} bg="danger"> {failed}</Badge>
                        <Badge style={styling.badge} bg="success">{passed}</Badge>
                        <Badge style={styling.badge} bg="warning">{total}</Badge>
                        <Form.Text ref={question} style={{ color: 'white' }}>
                            <h3>{text}</h3>
                        </Form.Text>
                        <Form.Control ref={textInput} type="text" placeholder="Answer" />
                        <Button style={{ marginTop: 10 }} onClick={handleSubmit}>Go</Button>
                    </Card.Body>
                </Card>
                <ChartSection passed={passed} failed={failed} total={total} />
                <PieChartSection passed={passed} failed={failed} />
            </Stack>
        </Container>
    )
}

const buildQuestion = () => {
    const operand1 = getRndInteger(12, 19)
    const operand2 = getRndInteger(12, 99)
    const answer = operand1 * operand2
    return [operand1, operand2, answer];
}

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const styling = {
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    badge: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        padding: 5,
        margin: 5
    },
    subContainer: {
        padding: 5,
        flex: 1.5,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    contextButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 3
    },
    contextButtonSubContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 40
    },
    textStyle: {
        fontSize: 22,
        padding: 20,
        color: 'blue',
        justifyContent: 'center'
    },
    numbersView: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 40
    },
    contextButtonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'blue'
    }
};