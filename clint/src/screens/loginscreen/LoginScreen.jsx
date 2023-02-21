import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form,Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ErrorMessage from '../../component/ErrorMessage'
import Loading from '../../component/Loading'
import MainScreen from '../../component/MainScreen'
import './LoginScreen.css'
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../../state/actions/userActions.js'

const LoginScreen = ({history}) => {
    const[email,setEmail] =useState('')
    const[password,setPassword] =useState('')

    const dispatch = useDispatch()
    const userLogin = useSelector((state)=>state.userLogin)

    const { loading,error,userInfo } = userLogin

    useEffect(()=>{
        
    },[history])


    const submitHandler=async(e)=>{
        e.preventDefault()
        dispatch(login(email,password))
    }

  return (
    <MainScreen title='LOGIN'>
        <div className="loginContainer">
            {error && <ErrorMessage variant='danger' >INVALID</ErrorMessage>}
            {loading && <Loading/>}
                {!loading && (
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
