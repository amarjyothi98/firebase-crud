import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import './home.css'

export default function Home() {

  const [data, setData] = useState({});

  useEffect(() => {
      db.child("contacts").on("value", (snapshot) => {
        if(snapshot.val() !== null) {
          setData({ ...snapshot.val() })
        } else {
          setData({}); 
        }
      })

      return () => {
        setData({});
      };
  }, [])

  

  return (
    <div style={{ marginTop: '100px'}}>
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
            {Object.keys(data).map((id, index) => {
              <tr key={id}>
                <th scope='row'>{'index + 1'}</th>
                <td>{ 'data[id].name' }</td>
                <td>{ 'data[id].email' }</td>
                <td>{ 'data[id].contact' }</td>
              </tr>
            })}
          </tbody>
          
        </table>
    </div>
  )
}
