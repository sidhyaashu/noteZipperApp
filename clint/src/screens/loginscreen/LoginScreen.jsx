import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form,Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ErrorMessage from '../../component/ErrorMessage'
import Loading from '../../component/Loading'
import MainScreen from '../../component/MainScreen'
import './LoginScreen.css'

const LoginScreen = () => {
    const[email,setEmail] =useState('')
    const[password,setPassword] =useState('')
    const[error,setError] =useState(false)
    const[loding,setLoding] =useState(false)



    const submitHandler=async(e)=>{
        e.preventDefault()
        try {
            const config={
                Headers:{
                    "Content-Type":"application/json"
                }
            }
            setLoding(true)

            const { data } = await axios.post(
                'http://localhost:5000/api/users/login',
                {
                    email,
                    password
                },
                config
            )
        
            console.log(data)
            localStorage.setItem('userInfo',JSON.stringify(data))
            setLoding(false)
        } catch (error) {
            setError(true)
            setLoding(false)
            setTimeout(() => {
               setError(false) 
            }, 2000);
            
        }
    }

  return (
    <MainScreen title='LOGIN'>
        <div className="loginContainer">
            {error && <ErrorMessage variant='danger' >INVALID</ErrorMessage>}
            {loding && <Loading/>}
                {!loding && (
                    <>
                    <Form onSubmit={submitHandler} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Group>
                     <Button variant="primary" type="submit">Login</Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    New Customer?<Link to='/register'>   <b>Regester here</b></Link>
                </Col>
            </Row>
                    </>
                )}
        </div>
    </MainScreen>
  )
}

export default LoginScreen
