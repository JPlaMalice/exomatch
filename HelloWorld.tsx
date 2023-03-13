import { FC, useState } from "react";

import Counter from "./Counter";
import styles from './HelloWorld.module.css'

interface HelloWorldProps{
    text?: string;
    callback: () => void
}

const onCounterChange = (count:number) => {
    alert(count);
}

const HelloWorld: FC<HelloWorldProps> = ({text, callback}) =>{


    return(
        <div className={styles.compteur}>
            {text}
            <button onClick={callback}>button</button>
            <Counter callback={onCounterChange}></Counter>
        </div>
    )
}
export default HelloWorld;