import React, { useEffect, useState } from 'react'
import {Link} from "react-scroll";
import "./Nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
const Nav = ()=>{
    const [navBarOpen, setNavBarOpen] = useState (false)
    const links = [
        {
            id:1,
            link:"Home",
        },
        {
            id:2,
            link:"Servicos",
        },
        {
            id:3,
            link:"HowWeWork",
        },
        {
            id:4,
            link:"Benedits",
        },
        {
            id:5,
            link:"Contacto",
        }
    ]

return ( 

<div className= {!navBarOpen ? "Navbar" : "NavOpen" }>
    {!navBarOpen && <p className=''>Foja Zero</p> }
    
        {!navBarOpen ? 
        (  <FontAwesomeIcon  icon={faBars} onClick={() => setNavBarOpen(!navBarOpen)}  />
        ): (  
        <FontAwesomeIcon  icon={faX} onClick={() => setNavBarOpen(!navBarOpen)}   />
        )}
    {
        navBarOpen && <ul>
        {links.map(x => (
            <div>
                <Link> {x.link === "HowWeWork" ? "How We Work" : x.link} </Link>
            </div>
        ))}
    </ul>
    }
</div>
)
};

export default Nav