import { FC } from "react";
import Todo from "./Todo";
import { useState } from "react";

const TodoList= ({}) => {

    const[todoList, setTodoList] = useState<string[]>(['bonjour', 'test']);
    const[nameState, setmonNameState] = useState<string>('');

    const addTodo = () =>{

        if (!todoList.includes(nameState)){
            setTodoList([...todoList,nameState])
            console.log("bijour",todoList)
            setmonNameState("");
        }else(console.log("deja present"))
    }
    const supprThisOne = (thisName:string) =>{
  
        let copy = [...todoList];
        copy.splice(todoList.indexOf(thisName),1)
        setTodoList(copy)
        console.log(copy)
        

    }

    const clearAll = () =>{
        setTodoList(['bonjour', 'test']);
    }

    return(
        <div>
            <div>          
                {todoList.map(num => (<Todo key={num} callback={supprThisOne} textValues={num}/>))}
                
                <input type="text" onChange={event =>(setmonNameState(event.target.value) )} value={nameState}/>
                <button type="submit" onClick={addTodo}>OK</button>
            </div>
            <div>
                <button onClick={clearAll}> Suppresion all</button>
            </div>

        </div>
        
 
    )
}
export default TodoList;