import React from 'react'

const Card = ({el}) => {
  return (
    <div className='card'>
      <img src={el.image} alt="" />
      <h1>name:{el.name}</h1>
      <h1>age:{el.age}</h1>
    </div>
  )
}

export default Card
