import { useState, useEffect } from 'react';
/**
* A react hook used to detect width of clients viewport.
* @returns width of clients viewport
*/

interface WindowDimentions {
    width: number;
    height: number;
}


export function useWindowDimensions(): WindowDimentions  {
    const [windowDimensions, setWindowDimensions] = useState({
        width:window.innerWidth, height:window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => setWindowDimensions({
            width:window.innerWidth, height:window.innerHeight
        });
        

      window.addEventListener('resize', handleResize);
      return ():void => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}