import { FC, useCallback, useContext } from "react";
import { ThemeContexte, ThemeContexteData } from "../core/contexts/theme";

interface TodoProps{
     textValues:string;
    callback:(name:string)=>void

}

const Todo:FC<TodoProps> = ({textValues,callback}) => {


    const themeCtx = useContext<ThemeContexteData>(ThemeContexte)

    return(
        <div style={{color: themeCtx.theme ==='dark' ? 'orange' : 'white'}}> 
           <div>{textValues}</div>
           <button onClick={() =>callback(textValues)}>X</button>
        </div>
    )
}
export default Todo;