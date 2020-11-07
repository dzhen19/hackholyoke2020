import React from 'react'
import Graph from '../components/graph'
import UserInput from '../components/userInput';
import Hours from '../api/hours'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Container>
                <Row>
                    <Col>
                        {Hours()}
                    </Col>
                    <Col>
                        {UserInput()}
                    </Col>
                    <Col>
                        {Graph()}
                    </Col>
                </Row> 
            </Container>
        </div>
    )
}

export default Dashboard;
