const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())


app.get('/quotes', (req, res) => {

    
    
const options = {
    method: "GET",
    params: {categories: req.query.categories},
    url: "https://api.api-ninjas.com/v2/quotes",
    headers: {
        "X-Api-Key": process.env.APIkey
    },
    
}   
    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch(err => {
        console.error(err)
    })
})

app.listen(PORT, () => console.log(`Backend is running on port ${PORT}`))