import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

export const Result = () => {
    return (
        <>
            <div>
                <Button variant="secondary">
                <Badge bg="danger">3</Badge> Result <Badge bg="success">9</Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>
                
            </div>
        </>
    )
}