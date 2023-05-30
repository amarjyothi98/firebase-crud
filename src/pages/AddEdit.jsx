import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './addEdit.css'
import app, { db } from '../firebase'
import {toast} from 'react-toastify'

// const initialState = {
//     name: '', 
//     email: '', 
//     contact: ''
// }

export default function AddEdit() {

  // const [state, setState] = useState(initialState); 
  const [data, setData] = useState({}); 

  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(""); 
  const [contact, setContact] = useState(""); 


  // const { name, email, contact } = state; 

  const navigate = useNavigate(); 

  // const handleInputChange = (e) => {
  //   const {name, value} = e.target; 
  //   setState({...state, [name]: value})
  // }

  // console.log(state)

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if(!name || !email || !contact) {
      toast.error("Please provide value in each input field")
      return; 
    } 
    const newUser = { 
      name, 
      email, 
      contact
    }
    console.log(newUser); 
    // setTimeout(() => navigate("/"), 500); 
  }

  return (
    <div style={{ marginTop: '100px'}}> 
    <form style={{
        margin: 'auto',
        padding: '15px',
        maxWidth: '400px',
        alignContent: 'center'
        }}
        onSubmit={handleSubmit}
        > 
        
        <label htmlFor='name'>Name</label>
        <input 
          type="text"
          id='name'
          name='name'
          placeholder='Your Name...'
          value={name}
          onChange={ (e) => setName(e.target.value)} />

        <label htmlFor='name'>Email</label>
        <input 
          type="email"
          id='email'
          name='email'
          placeholder='Your Email...'
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor='contact'>Contact</label>
        <input 
          type="number"
          id='contact'
          name='contact'
          placeholder='Your Contact...'
          value={contact}
          onChange={(e) => setContact(e.target.value)} />

          <input type="submit" value='save' />


        </form>
      
    </div>
  )
}
