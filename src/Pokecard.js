import React from 'react'

const Pokecard = (props) => {
  const {name, type, exp} = props
  return (
    <div className='Pokecard'>
      <h4>{name}</h4>
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  )
}

export default Pokecard