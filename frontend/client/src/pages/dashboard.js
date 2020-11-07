import React, {useState, useEffect} from 'react'
import Graph from '../components/graph'
import UserInput from '../components/UserInput/UserInput';
import Hours from '../api/hours'
import Navbar from '../components/Navbar/Navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import axios from 'axios'

function Dashboard() {
    const [data, setData] = useState([])
    useEffect(
        () => {axios.get('/hours').then(
            (res) => {
                const points = res.data.map((point)=>{
                    return {
                        'x': point.hour,
                        'y': point.energy
                    }
                })
                setData(points)
            }
        )}, [])

    return (
        <div>
            <Navbar />
            <Container>
                <Row>
                    <Col>
                        {UserInput()}
                    </Col>
                    <Col>
                        {Graph(data)}
                    </Col>
                </Row> 
            </Container>
        </div>
    )
}

export default Dashboard;
