import React from 'react'

import {
  useDrag,
  useDrop
} from 'react-dnd'

import './Ingredients.scss'


const Ingredients: React.FC = () => {

  const ingredients = ['beans', 'espresso', 'apple', 'banana']

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ingredient',
    drop: (item: { name: string }) => {
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const renderListOfIngredients = () => {
    return ingredients.map((ing, index) => {
      const [{ isDragging }, drag] = useDrag(() => ({
        type: 'ingredient',
        item: { name: ing },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }))

      return (
        <div
          key={index}
          className='ingredients--item--container'
          ref={drag}
          style={{ opacity: isDragging ? 0.5 : 1 }}
        >
          <div className='ingredients--item'>{ing}</div>
          <div className='ingredients--icon'>1</div>
        </div>
      )
    })
  }

  return (
    <div
      className='ingredients--container'
      ref={drop}
      style={{ backgroundColor: isOver ? 'lightblue' : 'white' }}
    >
      <div>List of ingredients</div>
      <br />
      <div>{renderListOfIngredients()}</div>
    </div>
  )
}

export default Ingredients