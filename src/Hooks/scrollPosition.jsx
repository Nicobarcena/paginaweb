import { useEffect, useState }  from "react";

export const useScrollPotition = () => {
    const [scrollPotition, setScrollPotition] = useState(0)

    useEffect(()=> {
        const updatePosition = ()=> {
            setScrollPotition(window.pageYOffset)
        }
        window.addEventListener("scroll", updatePosition)
        updatePosition()
        return()=> window.removeEventListener("scroll", updatePosition)
    },[])
    return scrollPotition
}