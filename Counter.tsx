import { useEffect, useState } from "react";

import { FC } from "react";

interface CounterProps{
    callback:(val: number) => void

}


const Counter:FC<CounterProps> = ({callback}) => {   
    const[count, setCount] = useState<number>(0);

    let isFull:boolean = false;

  //  useEffect( () =>{callback(count)}, [count])
    //useEffect( () =>{alert('use effect empty'),[]} )


    const onClickPlus = () =>{
        

        setCount(count +1);
    }

    const onClickLess = () =>{
        setCount(count-1);
        
    }

    const onClickReset = () => {
        setCount(0);
        
    }


    return(
        <div>
            <div >My value is {count}, {count > 5 &&<div>full</div>}</div>
            <button onClick={onClickPlus}>plus</button>
            <button onClick={onClickLess}>moins</button>
            <button onClick={onClickReset}>reset</button>

        </div>
    )
}

export default Counter;