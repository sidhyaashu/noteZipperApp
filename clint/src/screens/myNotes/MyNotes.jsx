import React, { useEffect, useState } from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../component/MainScreen'
import './MyNotes.css'
import { Accordion } from 'react-bootstrap'
import axios from 'axios'

const MyNotes = () => {

  const [notes,setNotes] = useState([])
  
  const deleteHandler=(id)=>{
    if(window.confirm("Are you sure to delete the note")){

    }
  }

  const fetchApi=async()=>{
    const {data}= await axios.get('http://localhost:5000/api/notes')
    setNotes(data)
  }


  useEffect(()=>{
    fetchApi()
  },[])

  return (
    <MainScreen title="Hi asuthosh sidhya is here ...">
        <Link to='/createnote'>
            <Button style={{marginLeft: 10,marginBottom: 6,}} size='lg'>
                CREATE NEW NOTE
            </Button>
            </Link>

            {
              notes.map((note,index)=>(
                // <Accordion key={index}>
              <Card style={{ margin: 10 }} key={index} >
                <Card.Header style={{ display: "flex" }}>
                  <span
                    // onClick={() => ModelShow(note)}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    {/* <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                     */}
                      {note.title}
                    {/* </Accordion.Toggle> */}
                  </span>

                  <div>
                    <Button href={`/note/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                {/* <Accordion.Collapse eventKey="0"> */}
                  <Card.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      {/* <ReactMarkdown>{note.content}</ReactMarkdown> */}
                      <footer className="blockquote-footer">
                        Created on {note.content}
                        <cite title="Source Title">
                          {note.title}
                          {/* {note.createdAt.substring(0, 10)} */}
                        </cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                {/* </Accordion.Collapse> */}
              </Card>
               // </Accordion> 
              ))
            }
        

    </MainScreen>

    
    // 15:31
  )
}

export default MyNotes


//TUTORIAL 8
