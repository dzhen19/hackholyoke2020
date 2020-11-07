import React from 'react'
import Graph from '../components/graph'
import UserInput from '../components/userInput';
import Hours from '../api/hours'
import Navbar from '../components/Navbar/Navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Dashboard() {
    return (
        <div>
            <Navbar />
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
