import React from 'react'
import "./Home.css"
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div className='home'>
    <p>Expand your <br />
    <b>business</b></p>
    <p>
    With the best <br />
    <b>online presence</b>
    </p>
    <div>
    <link to = "Contact" smooth duration = {500} > Get in Touch
    </link>
    <Link> Get a Quote 
    </Link>
    </div>
    </div>
  )
}

export default Home