import React,{useState} from 'react'
import './Index.css'
import {Button,Input} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import {addToCard} from '../../Containers/Action'
import {useDispatch} from 'react-redux'

function Index() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
   
    const style = {
    padding: '7px 16px',
	border: '1px solid',
	borderRadius: '15px',
	fontWeight: 700,
	lineHeight: 1.2,
	cursor: 'pointer',
	color: 'white',
    marginRight: '16px',
    marginLeft:'16px',
    backgroundColor: 'rgb(0, 0, 0, 0.7)',
	borderColor: 'rgb(0, 0, 0, 0.7)'
    }
    const btnIcon={
    marginLeft: '1rem',
    marginRight:'1rem',
	backgroundColor: '#271c6c',
	color: 'blanchedalmond',
	borderRadius: 50,
	border: '2px solid #e1ebfd',
	boxShadow: '2px 4px 10px #271c6c',
    fontSize:40
    }
    return (
        <div className='container'>
          <div className='app_name'>
             <h2>TO DO APP</h2>
            </div>
           
            <div className='input_data'>
            <Input className='input'
                 type='text'
                 onChange={(e)=>setInput(e.target.value)} 
                 value={input}
                placeholder='Create list here !'
            />  
            <Button className='btn'>
            <AddCircleIcon style={btnIcon} 
                           onClick={()=>dispatch(addToCard(input),setInput(''))}
            />
            </Button>
            </div>
            
          
            <div className='status'>
                <Button style={style}>All</Button>
                <Button style={style}>Completed</Button>
            </div>
            
            <div className='mode'>
                ☀️
            </div>
            
        </div>
    )
}

export default Index
