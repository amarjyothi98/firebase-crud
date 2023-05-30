import React, { useState, useEffect } from 'react'
import fireDb from '../firebase'
import { Link } from 'react-router-dom'
import './home.css'

export default function Home() {

  const [data, setData] = useState({});

  useEffect(() => {
      fireDb.child('contacts').on('value', (snapshot) => {
        if(snapshot.val()!==null) {
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
    <div>
        home.
    </div>
  )
}
