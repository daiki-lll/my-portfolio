import { Typography } from '@mui/material'
import React from 'react'
import "./home.css"
import home from "./img/home.jpg"

const Home = () => {
  return (
    <div className='wrap'>
      <div className="inner">
        <img src={home} alt="" />
        <Typography variant='h1'><span>Welcome to 
        my Portfolio</span></Typography>
      </div>
    </div>
  )
}

export default Home