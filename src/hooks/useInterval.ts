import {  useEffect, useState } from 'react'
/**
* A react hook used create timer between intervals
* @param {number} start Integer value that specifies start of interval.
* @param {number} end Integer value that specifies end of interval.
* @param {number} delay Positive Integer value that spefies delay in milliseconds.
* @returns count value that specifies each interval step
*/

export function useInterval(start:number, end:number,delay:number) {
    const [count, setCount] = useState(start)
  
    useEffect(() => {
        
        const intervalId:ReturnType<typeof setInterval> = (start < end) ?
        setInterval(() => (count < end)? 
            setCount(count + 1):clearInterval(intervalId)
        , delay) : 
        setInterval(() => (count > end) ?
            setCount(count - 1):clearInterval(intervalId)
        , delay)

      return () => clearInterval(intervalId)
    }, [count])
  
    return count
}


