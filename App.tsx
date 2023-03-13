import './App.css'

import { Theme, ThemeContexte } from './core/contexts/theme';

import HelloWorld from './components/HelloWorld'
import TodoList from './components/TodoList';
import { createPortal } from 'react-dom';
import { useState } from 'react';

function App() {
  
  const[monState, setMonState] = useState<string>();
  const[theme, setTheme] = useState<Theme>('dark');


  const onClickConst = () =>{
    setMonState('JP')  
    
  }

  const setLightTheme = () =>{setTheme('light')}
  const setDarkTheme = () =>{setTheme('dark')}

  return (
    <ThemeContexte.Provider value={{theme}}>
      <button onClick={setLightTheme}>Light</button>
      <button onClick={setDarkTheme}>Dark</button>
      <TodoList/>
    </ThemeContexte.Provider>
   
  )
}

export default App
