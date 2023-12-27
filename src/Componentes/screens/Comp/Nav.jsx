import React from 'react'
import {Links} from "react-scroll";
const Nav = () => {
const links =[
    {
        id:1,
        link: "Home",
    },
    {
        id:2,
        link:"Services",
    },
    {
        id:3,
        link:"HomeWeWok",
    },
    {
        id:4,
        link:"Benedits"
    }
]

return (
    <div>
        <ul>
            {links.map(x =>(
                <links> {x.link === "HomeWeWork" ? "How We Work" :x.link} </links>
            ))}
        </ul>
    </div>
    )
}

export default Nav