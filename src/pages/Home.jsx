import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import './home.css'

import UsersDataServices from '../services/users.services'


export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
      getUsers (); 
  }, [])

  const getUsers = async () => { 
    const data = await UsersDataServices.getAllUsers(); 
    console.log(data.docs);  
    setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }
  

  return (
    <div style={{ marginTop: '100px'}}>
      <pre>{ JSON.stringify(users, undefined, 2)}</pre>
        <table className='styledTable'>
          <thead>
            <tr>
              <th style={{ textAlign: 'center'}}>No.</th>
              <th style={{ textAlign: 'center'}}>Name</th>
              <th style={{ textAlign: 'center'}}>Email</th>
              <th style={{ textAlign: 'center'}}>Contact</th>
              <th style={{ textAlign: 'center'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((doc, index) => {
              return (
                <tr key={doc.id}>
                <th scope='row'>{index + 1}</th>
                <td>{ doc.name }</td>
                <td>{ doc.email }</td>
                <td>{ doc.contact }</td>
                <td>
                  <button variant='secondary' className='edit'>
                    Edit
                  </button>
                  <button variant='danger' className='edit'>
                    Delete
                  </button>
                </td>
              </tr>
              )
            })}
          </tbody>
          
        </table>
    </div>
  )
}
