import React from 'react'
import './Card.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DoneAllIcon from '@material-ui/icons/DoneAll';

function CardItem({card}) {
  const style={ 
  alignItems:"center",
  justify:"center",
  display:"flex",
  textAlign:"center",
  justifyContent:"space-between",
}
const cardContent={
  textAlign:"center",
	marginLeft: "30",
  alignItems:"center"
}
 
    return (
      <div>  
         <Card className='card_wrapper' style={style}>
          <CardContent className='card_top' style={cardContent}>
             {card}  
           </CardContent>
           <CardActions>
           <DoneAllIcon className='done_Icon'/>
           </CardActions>
          </Card>
        </div> 
    )
}

export default CardItem
 