import React from 'react'
import './Card.css'
import {Card,CardContent,CardActions,Button} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector } from 'react-redux'

function CardItem() {
    let todos = useSelector((state)=>state.app)
    return (
          <Card className='card_wrapper'>
          <CardContent className='card-top'>
             Card
          </CardContent>
          <CardActions>
           <Button className='card_btn' size="small">
            <EditIcon className='edit'/>
           </Button>
           <Button className='card_btn' size="small">
            <DeleteIcon className='delete'/>
            </Button>
           </CardActions>
          
          </Card>
    )
}

export default CardItem
