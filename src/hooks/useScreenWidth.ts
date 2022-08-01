import { useState, useEffect } from 'react';
/**
* A react hook used to detect width of clients viewport.
* @returns width of clients viewport
*/

export function useScreenWidth() {

    const [windowWidth, setWindowWidth] = useState<any>(null);
    
    const isWindow = typeof window !== 'undefined';

    const getWidth = () => isWindow ? window.innerWidth : windowWidth;
    
    const resize = () => setWindowWidth(getWidth());
    
    setWindowWidth(getWidth());
    
    useEffect(() => {
        if (isWindow) {
          
            window.addEventListener('resize', resize);
           
            return () => window.removeEventListener('resize', resize);
        }
    //eslint-disable-next-line
    }, [isWindow]);

    return windowWidth;
}
