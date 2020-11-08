import React from "react"
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import './style.css'

const register = () => {
  return (
    <div>
      <Container fluid>
        <Row className="spacing">
          <Col id="description" md={8}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis id consectetur purus ut faucibus pulvinar. Donec et odio pellentesque diam volutpat. Sed blandit libero volutpat sed. Euismod in pellentesque massa placerat duis ultricies. Vel quam elementum pulvinar etiam non. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Morbi tristique senectus et netus et malesuada fames ac. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Sit amet dictum sit amet.

          Porta nibh venenatis cras sed. Ultrices mi tempus imperdiet nulla. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Turpis nunc eget lorem dolor sed viverra ipsum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Odio eu feugiat pretium nibh ipsum consequat. Lorem ipsum dolor sit amet consectetur adipiscing elit. Nec ultrices dui sapien eget mi proin sed libero enim. Imperdiet nulla malesuada pellentesque elit eget. Dui accumsan sit amet nulla facilisi morbi. Eget felis eget nunc lobortis mattis aliquam faucibus. In nisl nisi scelerisque eu ultrices vitae auctor. Eu consequat ac felis donec et odio pellentesque. Est ultricies integer quis auctor elit sed vulputate mi sit. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Aliquam ultrices sagittis orci a scelerisque purus semper eget.
          </Col>
          <Col md={3}>
            <Form>
              <h1>Register</h1>
              <Form.Group controlId="first-name">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="John / Jane" />
              </Form.Group>

              <Form.Group controlId="last-name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="email" placeholder="Smith" />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p className="spacing">Already signed up? Log in below!</p>
            <h1>Log In</h1>
            <Form>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
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