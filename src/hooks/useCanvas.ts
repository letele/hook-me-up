import { useRef, useEffect } from 'react'
/**
* A react hooks used for drawing on a canvas element.
* @param draw Function that returns the canvas drawing.
* @param {string} strokeStyle Default strokestyle of the canvas element.
* @param {string} fillStyle Default fillstyle of the canvas element.
* @param {string} font Default font of the canvas element.
* @returns canvas reference element to draw from.
*/

export function useCanvas(
    draw:any,strokeStyle:string,fillStyle:string,font:string
){

    const ref = useRef<HTMLCanvasElement>()

    useEffect(() => {
        if(ref.current){
        const canvas = ref.current
        const ctx = canvas.getContext('2d')
            if(ctx){
                ctx.strokeStyle = strokeStyle
                ctx.fillStyle = fillStyle
                ctx.font = font
            
                draw(ctx)
            }
        }
    // eslint-disable-next-line
    }, [])
  
    return ref
}
