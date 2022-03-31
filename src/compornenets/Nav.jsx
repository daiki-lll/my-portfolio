import { Typography } from '@mui/material';
import React from 'react';
import "./nav.css";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';

const nav = () => {
  return (
    <header>
        <div className='icon'>
            <PersonOutlineIcon fontSize="large" />
        </div>
        <ul>
            <li className='navtext'><Link to="/"><Typography variant='h6'><span>home</span></Typography></Link></li>
            <li className='navtext'><Link to="/about"><Typography variant='h6'><span>about</span></Typography></Link></li>
            <li className='navtext'><Link to="/work"><Typography variant='h6'><span>work</span></Typography></Link></li>
        </ul>
    </header>
  )
}

export default nav