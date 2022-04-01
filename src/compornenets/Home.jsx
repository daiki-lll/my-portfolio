import { Typography } from '@mui/material'
import React from 'react'
import "./home.css"
import home from "./img/home.jpg"

const Home = () => {
  return (
    <div className='wrap'>
      <div className="inner">
        <Typography variant='h1'><span>Welcome to 
        my Portfolio</span></Typography>
        <img src={home} alt="" />
      </div>
    </div>
  )
}

export default Home