import React from 'react'
import "./about.css"
import { Avatar ,Typography , Rating } from '@mui/material'
import avatar from "./img/avatar.PNG"
import html from "./img/html.png"
import css from "./img/css.png"
import js from "./img/js.png"
import java from "./img/java.png"
import react from "./img/react.png"


const About = () => {
  return (
    <div className='wrap2'>
        <div className="inner2">
            <div className="name">
                <Avatar
                alt=""
                src={avatar}
                sx={{ width: 100, height: 100 }}
                />
                <p>及川 大暉<br/>岩手県の商業高校3年生
                <br/>最近は麻雀にはまっていると言いつつもやっていない。<br/>
                夢はフロント/バック/インフラ/デザイン何でもできるPerfect web developer。</p>
            </div>
            <div className='skill'>
                <h3>skill</h3>
                <ul>
                    <li>
                        <img src={html} alt="" />
                        <Typography component="legend"><p>HTML</p></Typography>
                        <Rating name="read-only" value={3} readOnly />
                    </li>
                    <li>
                        <img src={css} alt="" />
                        <Typography component="legend"><p>CSS</p></Typography>
                        <Rating name="read-only" value={3} readOnly />
                    </li>
                    <li>
                        <img src={react} alt="" />
                        <Typography component="legend"><p>React</p></Typography>
                        <Rating name="read-only" value={1} readOnly />
                    </li>
                    <li>
                        <img src={js} alt="" />
                        <Typography component="legend"><p>JavaScript</p></Typography>
                        <Rating name="read-only" value={1} readOnly />
                    </li>
                    <li>
                        <img src={java} alt="" />
                        <Typography component="legend"><p>Java</p></Typography>
                        <Rating name="read-only" value={1} readOnly />
                    </li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default About