
const express = require('express')
const app = express();
const cors = require('cors')
require('./config/mongoose.config')

const recipeRoutes = require('./routes/recipes')

app.use(cors());
app.use(express.json());


app.use('/recipes', recipeRoutes)

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})