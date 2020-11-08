import React from "react"
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import './style.css'

const register = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem('auth','true')
    window.location.href='/'
    
  }
  return (
    <div>
      <Container fluid>
        <Row className="spacing">
          <Col id="description" md={8}>
          <div id="desc-text">
            <p><b>Hourly</b> is an app that helps you track your daily energy levels, analyze the results, and predict when your energy will peak. It allows you to shift meetings, errands, and other busywork to other times of the day – thus ensuring that your "Prime" never gets taken up by things you know you could do half-asleep.</p>
            <p>If you're the type that likes to wake up early in the morning, maybe you find that your energy and ability to focus are at their highest peak during those early hours.
            Or maybe you're a night owl – you find that you're on fire at 1 A.M., hacking away on a project while everyone else sleeps.
            You can probably dredge up some basic answers to these questions from your memory. But what if you knew exactly when your energy level would hit its peak on an average day?</p>
            <br />
            <p>Created by Derrick Zhen, Rodas Jateno, and Zhihan Chen</p>
          </div>
          
          
          </Col>
          <Col md={3} className="h-100">
            {/* <Form>
              <h2>Register</h2>
              <Form.Group controlId="first-name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="John / Jane" />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
            
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form> */}
            
            <h2>Log In</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit" style={{ backgroundColor: "purple", opacity: "70%" }}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    

  ) 
}

export default register;