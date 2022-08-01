import { 
    useEffect, useState, useRef,
} from 'react'
/**
* A react hook used to toggle menubar lists.
* @returns A mousehandler, toggle status, reference of element, 
* and a function for changing toggle status.
*/

export function useToggle() {
    const [toggle, setToggle ] = useState<boolean|string>(false)

    const mouseOver = (val:string|boolean) => toggle && setToggle(val)
    
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const clickOutside = (e:any) => 
        ref.current && !ref.current.contains(e.target) &&  setToggle(false)
        
        document.addEventListener("mousedown", clickOutside)
        
        const cleanup = () => 
        document.removeEventListener("mousedown", clickOutside)
        
        return cleanup
    }, [ref])

    return {mouseOver, ref, setToggle , toggle, }
}

