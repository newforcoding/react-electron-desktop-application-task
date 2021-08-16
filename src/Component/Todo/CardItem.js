import React,{useState} from 'react'
import './Card.css'
import {Button,Input} from '@material-ui/core'
import {deleteToCard, updateToCard} from '../../Containers/Action'
import {useDispatch} from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';

function CardItem({card}) {
    const [edit,setEdit] = useState(false)
    const [input,setInput] = useState('')
    const dispatch = useDispatch('')
    
    console.log('CardItems',card)
    return (
        <div> 
         <Card className='card_wrapper'>
           <CardContent className='card_top'>
          
              <div>
              {edit ? ( <Input type='text' className='input_edit'
              onChange={(e)=>setInput(e.target.value)}
              value={input}
              />
             )
         :(
             <h4>{card}</h4>
         )}
          </div>
        </CardContent>
           
          <CardActions className='btn_action'>
            <Button size="small">
              <EditIcon className='edit_Icon' onClick={()=>{
                    if(edit){
                        setInput('')
                        dispatch(updateToCard({
                            ...card,
                        }))
                }
                setEdit(!edit)}}
                type='primary'>
                {edit ? "Update" : "Edit"}
                </EditIcon>
            </Button>
        
            <Button size="small">
              <DeleteIcon className='delete_Icon' 
              onClick={()=>dispatch(deleteToCard(card.id))}/>
              </Button>
          </CardActions>
        </Card>
</div>
 )
}

export default CardItem
 