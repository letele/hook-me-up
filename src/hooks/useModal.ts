import {  useState } from 'react'
/**
* A react hook used to hide/show react components
* @returns a boolean indicating display status of component, 
* and a function that sets the status
*/

export function useModal() {
    const [modal, setModal ] = useState(false)

    return {modal, setModal}
}

