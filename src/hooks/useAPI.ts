import { useEffect, useState } from "react";
/**
* A react hook for fetching data.
* @param {string} url The url where data is to be fetched.
* @returns data from the endpoint of url.
*/

export const useAPI = (url:string) => {
    const [data,setData ] = useState(null)

    useEffect(() => {
        let isMounted:boolean =true;
        
        fetch(url).then(response => response.json())
        .then(res => isMounted && setData(res))
        .catch(err => console.log(err));

        return () =>{ isMounted =false;}
    //eslint-disable-next-line
    },[])

    return data
}
