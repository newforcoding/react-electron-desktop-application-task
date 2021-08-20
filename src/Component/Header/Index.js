import React,{useState} from 'react'
import './Index.css'
import {Button,Input} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import {addToCard,removeToCard} from '../../Containers/Action'
import {useDispatch} from 'react-redux'
import DarkModeToggle  from 'react-dark-mode-toggle'

function Index() {
    
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const [mode,setMode] = useState(() => false)
    
    return (
        <div className='container' style={{background:`${mode ? "#F8E2CF" : "#C6B4CE"}`}}>
          <div className='app_name'>
             <h2 style={{color: `${mode ? "#8e2657" : "#3D087B"}`}}>

                 {mode ? "TO DO APP" : "TO DO APP"}
             </h2>
            </div>
           
            <div className='input_data'>
            <Input className='input'
                 type='text'
                 onChange={(e)=>setInput(e.target.value)} 
                 value={input}
                placeholder='Create list here !'
                
            />  
            <Button className='btn'>
            <AddCircleIcon  style={{color: `${mode ? "#8e2657" : "#3D087B"}`}} 
                           onClick={()=>dispatch(addToCard(input),setInput(''))}
                           disabled={!input}
            />
            </Button>
            </div>
            
            <div className='status'>
                <Button  style={{color: `${mode ? "#8e2657" : "#3D087B"}`}} onClick={()=>dispatch(removeToCard())}>
                Remove Carts</Button>
            </div>
            
              <DarkModeToggle
              onChange={()=>setMode(!mode)} 
              checked={mode}
              style={{background:`${mode ? "#8e2657" : "#3D087B"}`}}
              size={50}/>

        </div>
    )
}

export default Index
