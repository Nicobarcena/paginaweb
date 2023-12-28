import React, { useEffect, useState } from 'react'
import {Link} from "react-scroll";
import "./Nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
const [navBarOpen, setNavBarOpen] = useState (false)
const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    });

    const detectDimension = ()=>{
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(()=>{
        window.addEventListener("resize", detectDimension)
        windowDimension.width > 800 && setNavBarOpen(false)
        return () =>{
            window.removeEventListener ("resize", detectDimension)
        }
    },[windowDimension])

    const links =[
    {
        id:1,
        link: "Home",
    },
    {
        id:2,
        link:"Servicios",
    },
    {
        id:3,
        link:"HowWeWorks",
    },
    {
        id:4,
        link:"Benedits"
    }
]

return (
    <div className= {!navBarOpen ? "Navbar" : "NavOpen" }>
        {!navBarOpen && <p className='logo'>fojazero</p>}
        {!navBarOpen ? <FontAwesomeIcon size= {100} icon={faBars} onClick={() => setNavBarOpen(!navBarOpen)}  />
        : <FontAwesomeIcon  icon={faX} onClick={() => setNavBarOpen(!navBarOpen)} color='#f1f1f1'  /> }
        {
        navBarOpen && 
        <ul>
        {links.map((x)=>{
            return (
                <div>
                    <Link
                    onClick={()=>setNavBarOpen(false)}
                    to={x.link}
                    smooth duration={500} 
                    className='navlink'> {x.link === "HowWeWorks" ? "How We Works": x.link} </Link>
                    <div className='border' ></div>
                </div>
            )
        } )}
    </ul>
        }
    </div>
    )
}

export default Nav