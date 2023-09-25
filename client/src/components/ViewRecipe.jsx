import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ViewRecipe = (props) => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState({
        name: '',
        description: '',
        instructions: '',
        cookTime: 0
    })

    useEffect(() => {
        axios.get(`http://localhost:3000/recipes/${id}`)
        .then(res => {
            console.log(res.data)
            setRecipe(res.data.recipe)
        })
    }, [])
  return (
    <div>
        <h2>View Recipe</h2>
        {Object.entries(recipe).map((entry, i) => (
            <p key={i}>{entry[0]}: {entry[1]}</p>
        ))}
        <Link to={'/'}>Home</Link>
    </div>
  )
}

export default ViewRecipe