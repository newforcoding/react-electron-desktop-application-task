import React from 'react'
import { useSelector } from 'react-redux'
import CardItem from './CardItem'

function CardList() {
  const cardlist = useSelector((state)=>state.card)
  console.log('cards',cardlist)
   return (
    <div>
   {cardlist.map((card)=>{
     return <CardItem key={card.id} card={card.data} />
   })}

    </div>
  )
}

export default CardList
