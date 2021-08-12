import React from 'react'
import './App.css'
import {Input,Button} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ThemeProvider } from 'styled-components';

function App(){
return (
<div className='container'>
    <h3 className='head'>TO DO APP</h3>
      <Input className='input' />  
       <Button className='btn'>
          <AddCircleIcon className='btnIcon'/>
       </Button>
       {/* <ThemeProvider >
          <Dark/Light Mode>
       </ThemeProvider> */}

    </div>
)
}
export default App


