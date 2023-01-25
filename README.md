## hook-me-up

### A collection of JavaScript react hooks written in Typescript.

<details>
<summary>useAPI</summary>

```js
// Used to fetch data from an API
import { useAPI } from "@letele/hook-me-up"

const url = "https://jsonplaceholder.typicode.com/todos/1"

const content = useAPI(url)

content && console.log(content)

// output
{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}

```
</details>

<details>
<summary>useCanvas</summary>

```js
// Used to return a reference element to draw canvas drawings
import { useCanvas } from "@letele/hook-me-up"

function drawing(ctx){
    ctx.save()
    // draw here.
    ctx.restore()
}

const canvasRef = useCanvas(drawing)
    
return (
    <canvas 
        height={"200px"} 
        width={"200px"} 
        ref={canvasRef} 
    />
);
```
</details>

<details>
<summary>useDidMount</summary>

```js
// Checks whether a component mounted
import { useDidMount } from "@letele/hook-me-up"

const isMounted = useDidMount()

if(isMounted){
    // do something
}

```
</details>

<details>
<summary>useInput</summary>

```js
// Handles input form event values and submit events.
import { useInput } from "@letele/hook-me-up"

const { 
    onChangeI, onChangeII,
    validI, validII,
    valueI, valueII,
    onSubmit,
} = useInput('')

const valid = validI && validII 

const submit = () => {
    // Do something 
}

const SelectForm = (
    <form 
        onSubmit={e => onSubmit(e, submit)}
    >   
        <label>Label 1</label>
        <select value={valueI} onChange={onChangeI}>
            <option hidden disabled value=""></option>
            <option value="option11">option11</option>
            <option value="option12">option12</option>
        </select>
        
        <label>Label 2</label>
        <select value={valueII} onChange={onChangeII}>
            <option hidden disabled value=""></option>
            <option value="option21">option21</option>
            <option value="option22">option22</option>
            <option value="option23">option22</option>
        </select>

        <input disabled={valid} type="submit" value="Submit"></input>
    </form>
)
```
</details>

<details>
<summary>useInterval</summary>

```js
// Creates a timer between two different integers.
import { useInterval } from "@letele/hook-me-up"

const interval = useInterval(-5,5,50)

return (
    // A countup timer between -5 and 5 in 50 milliseconds
    <div>{interval}</div>
) 

```
</details>

<details>
<summary>useWindowDimensions</summary>

```js
// Used to detect viewport of client
import { useWindowDimensions } from "@letele/hook-me-up"

const {height, width} = useWindowDimensions()

console.log(`Window height is ${height}`)

console.log(`Window width is ${width}`)
```
</details>

<details>
<summary>useToggle</summary>

```js
// Toggles a 
import { VscChevronRight, VscChevronDown} from "react-icons/vsc";
import { useToggle } from "@letele/hook-me-up"

const  {mouseOver, ref, setToggled, toggled } = useToggle()

const Chevron = ({val}) => toggled === val?
<VscChevronDown onClick={()=> setToggled(false)} /> :
<VscChevronRight 
    onClick={()=> setToggled(val)} 
    onMouseOver={()=> mouseOver(val)}
/> 

const List = ({val}) => toggle==val &&
<ul>
    <li>list 1</li>
    <li>list 2</li>
    <li>list 3</li>
</ul>

return (
    <> 
        <Chevron val={parent} />
        <List val={parent} />
    </>
)
```
</details>


