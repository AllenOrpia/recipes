import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const NewRecipe = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        instructions: '', 
        cookTime : 0,
    })

    const handleChange = (e) => {
        setFormData(currData => {
            return {
                ...currData,
                [e.target.name]: e.target.value,
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/recipes/new', {
            name: formData.name,
            description: formData.description,
            instructions: formData.instructions,
            cookTime: formData.cookTime,
        })
            .then(res => {
                console.log(res)
                navigate('/')

            })
            .catch(err => {
                console.log(err)
            })
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Recipe name</label>
        <input type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}/>
        <label htmlFor="description">Description</label>
        <input type="text"
                name='description'
                value={formData.description}
                onChange={handleChange}/>
        <label htmlFor="description">Instructions</label>
        <input type="text"
                name='instructions'
                value={formData.instructions}
                onChange={handleChange}/>
        <label htmlFor="description">Cook Time</label>
        <input type="number"
                name='cookTime'
                value={formData.cookTime}
                onChange={handleChange}/>
        <button type='submit'>Create Recipe</button>
    </form>
  )
}

export default NewRecipe