import React, { useState } from 'react'
import { Form,Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../component/MainScreen'

const RegesterScreen = () => {
    const[email,setEmail] =useState('')
    const[password,setPassword] =useState('')
  return (
    <MainScreen title='REGISTER'>
      <div className="loginContainer">
        <Form  >
                    <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={email} placeholder="Enter Name" onChange={(e)=>setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasiccPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Group>
                    {/* <Form.Group controlId="pic">
                      <Form.Label>Profile Picture</Form.Label>
                      <Form.File
                        onChange={(e) => postDetails(e.target.files[0])}
                        id="custom-file"
                        type="image/png"
                        label="Upload Profile Picture"
                        // custom
                      />
                    </Form.Group> */}
                     <Button variant="primary" type="submit">Login</Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    Already Customer?<Link to='/login'>   <b>Login here</b></Link>
                </Col>
            </Row>
      </div>
    </MainScreen>
  )
}

export default RegesterScreen
