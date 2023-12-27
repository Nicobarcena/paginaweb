import React from 'react'

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
        link:"Home We Wok",
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