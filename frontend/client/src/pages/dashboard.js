import React from 'react'
import Graph from '../components/graph'
import UserInput from '../components/userInput';
import hours from '../api/hours'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Dashboard() {
    hours();
    return (
        <div>
            <h1>Dashboard</h1>
            <Container>
                <Row>
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
