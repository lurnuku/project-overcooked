import React, { useEffect, useState } from 'react'


interface RecipeI {
    id: number
    title: string
    ingredients: string[]
    instructions: string
    userId?: number // Optional if a recipe may not belong to a user
}

const MyRecipes: React.FC = () => {
    const [recipes, setRecipes] = useState<RecipeI[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/recipes')
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => console.error('Error fetching data:', error))
    }, [])

    return (
        <>
            <div>MyRecipes</div>
            <div>{recipes[0]?.id}</div>
        </>

    )
}

export default MyRecipes