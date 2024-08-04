import React, { useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import './RecipeBoard.scss'

const RecipeBoard: React.FC = () => {
  const [droppedIngredients, setDroppedIngredients] = useState<string[]>([])

  const [{ isOver }, drop] = useDrop({
    accept: 'ingredient',
    drop: (item: { name: string }) => {
      setDroppedIngredients((prev) => {
        if (!prev.includes(item.name)) {
          return [...prev, item.name]
        }
        return prev
      })
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })

  return (
    <div className='recipeboard--container'>
      <div>Recipe Board</div>
      <div
        className='dropped-ingredients'
        ref={drop}
        style={{ backgroundColor: isOver ? 'rgba(255, 255, 0, 0.2)' : 'transparent' }}
      >
        {droppedIngredients.map((ing, index) => (
          <DraggableIngredient key={index} name={ing} />
        ))}
      </div>
    </div>
  )
}

const DraggableIngredient: React.FC<{ name: string }> = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'ingredient',
    item: { name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className='dropped-ingredient'
    >
      {name}
    </div>
  )
}

export default RecipeBoard