import React, { useEffect, useState } from 'react'
import {Link} from "react-scroll";
import "./Nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

const Nav = ()=>{
    const [navBarOpen, setNavBarOpen] = useState (false)
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    const detectDimension = ()=>{
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    useEffect(()=>{
        window.addEventListener ("resize", detectDimension)
        windowDimension.width >800 && setNavBarOpen(false)
        return ()=>{
            window.removeEventListener("resize", detectDimension)
        }
    },[windowDimension])

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
            {!navBarOpen && <p className='logo'>Foja Zero</p> }
            
            {!navBarOpen && windowDimension.width <800  ? 
            ( <FontAwesomeIcon icon={faBars} onClick={() => setNavBarOpen(!navBarOpen)} />
            ): windowDimension.width <800 &&
                (  
            <FontAwesomeIcon color='#f1f1f1f1' icon={faX} onClick={() => setNavBarOpen(!navBarOpen)}   />
            )}
            {navBarOpen || (
                windowDimension.width > 800 ||
                (windowDimension.width < 800 && (
                <ul className='linksconteiner' > 
                    {links.map((x) => {
            return (
                <div>
                    <Link
                    onClick={() => setNavBarOpen(false)}
                    to={x.link}
                    smooth
                    duration={500}
                    className={"navLink"}
                    >
                    {x.link === "HowWeWork" ? "How We Work" : x.link}
                    </Link>
            <div className="border"></div>
            </div>
        );
        })}
    </ul>
    ))
)}
        </div>
    )
};

export default Nav