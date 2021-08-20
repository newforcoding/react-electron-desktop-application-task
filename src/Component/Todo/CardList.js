import React from 'react'
import './Card.css'
import { useSelector } from 'react-redux'
import CardItem from './CardItem'

function CardList() {
const  cardlist = useSelector(state=>state.card)
  console.log('cardlist',cardlist)
  return (
    <div>
      {cardlist.map((card)=>{
            return <CardItem className='card_list'
            key={card.id} card={card.data} />
      })}
    </div>
  )
}

export default CardList

