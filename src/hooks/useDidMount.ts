import { useEffect, useRef } from 'react';
/**
* A react hook that checks whether a component mounted.
* @returns Returns current mount status of component. 
*/

export function useDidMount() { 
    const ref = useRef<any>()
    
    useEffect(() => {
        ref.current = true
    }, [])
    
    return ref.current
}