import React, { useState } from 'react'
import { Form,Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../component/MainScreen'
import ErrorMessage from '../../component/ErrorMessage'
import axios from 'axios'
import Loading from '../../component/Loading'

const RegesterScreen = () => {
    const [name,setName] = useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [pic,setPic] = useState('https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [ message,setMessage] = useState(null)
    const [picMessage,setPicMessage] = useState(null)
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)

    const submitHandler=async(e)=>{
      e.preventDefault()

      if(password !== confirmPassword){
        setMessage("Password do't match")
      }else{
        setMessage(null)
        try {
          const conFig={
            headers:{
              "Content-type":"application/json"
            }
          }

          setLoading(true)

          const {data} = await axios.post(
            'http://localhost:5000/api/users',
            {name,pic,email,password},
            conFig
          )
          setLoading(false)
          localStorage.setItem('userInfo',JSON.stringify(data))
        } catch (error) {
          console.log(error)
          setError('error')

        }
      }
    }

    const postDetails=(pics)=>{
      if(pics === 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' ){
        return setPicMessage('Plsase select an Image')
      }
      setPicMessage(null)
      if(pics.type ==='image/jpeg'||pics.type === 'image/png'){
        const data = new FormData()
        data.append('file',pics)
        data.append('upload_preset','notezeeper')
        data.append('cloud_name','dcjuarc7l')
        fetch('https://api.cloudinary.com/v1_1/dcjuarc7l/image/upload',{
          method:'post',
          body:data
        }).then((res)=>res.json()).then((data)=>{
          console.log(data)
          setPic(data.url.toString())
        }).catch((err)=>{
          console.log(err)
        })
      }else{
        return setPicMessage('Plsase select an Image')
      }

    }

  return (
    <MainScreen title='REGISTER'>
      <div className="loginContainer">
        {message && <ErrorMessage variant='danger' >{message}</ErrorMessage>}
        {loading && <Loading/>}
        {pic && <div>{pic}</div>}
        {!loading && (
          <>
                  <Form onSubmit={submitHandler} >
                    <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                    </Form.Group>
                    { picMessage && (
                      <ErrorMessage variant='danger'>{picMessage}</ErrorMessage>
                    )}
                    <Form.Group controlId="pic" className="mb-3">
                      <Form.Label>Profile Picture</Form.Label>
                      <Form.Control type="file" placeholder='Upload your photos' onChange={(e)=>postDetails(e.target.files[0])} />
                    </Form.Group>
                     <Button variant="primary" type="submit">Login</Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    Already Customer?<Link to='/login'>   <b>Login here</b></Link>
                </Col>
            </Row>
          </>
        )}

      </div>
    </MainScreen>
  )
}

export default RegesterScreen
