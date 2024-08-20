import React from 'react'
import './Card.css'

const Card = ({...rest}) => {
  return (
    <div id="card" {...rest}>
        <p>Card</p>
    </div>
  )
}

export default Card
