import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const GetAllRecipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/recipes')
            .then( res => {
                console.log(res.data)
                setRecipes ( currRecipes => {
                    return currRecipes = [...res.data.recipes]
                })
            })
    }, [])
  return (
    <div>
        <h1>All </h1>
        { 
            recipes.map((recipe, index) => (
                <div key={index}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                    <p>{recipe.instructions}</p>
                    <p>{recipe.cookTime}</p>
                    <Link to={`/recipes/${recipe._id}`}>View/edit</Link>
                </div>
            )) 
        }
    </div>
  )
}

export default GetAllRecipes