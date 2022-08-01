import { useState,ChangeEvent,FormEvent } from "react"
/**
* A react hook that can manage up to three form input fields.
* @param {string | boolean} initValue Initial value of the input field.
* @returns Returns values, onchange functions, valid conditions and a submit handler. 
*/

export function useInput(initValue:(string|boolean)) {
    const [valueI, setValueI] = useState(initValue)
    const [valueII, setValueII] = useState(initValue)
    const [valueIII, setValueIII] = useState(initValue)
    
    const validI = valueI === '' 
    const validII =  valueII===''
    const validIII =  valueIII===''

    const onChangeI = (e:ChangeEvent<HTMLInputElement>) => setValueI(e.target.value)
    const onChangeII = (e:ChangeEvent<HTMLInputElement>) => setValueII(e.target.value)
    const onChangeIII =(e:ChangeEvent<HTMLInputElement>) => setValueIII(e.target.value)

    const onSubmit = (e:FormEvent,func:any) =>  {
        func()
        e.preventDefault()
    }
    
    return { 
        onChangeI, onChangeII,onChangeIII, 
        validI, validII,validIII, 
        valueI, valueII,valueIII, 
        onSubmit,
    } 
}