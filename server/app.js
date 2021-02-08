if(process.env.NODE_ENV === 'development'){
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const errorHandler = require('./middleware/errorHandler')
const routes = require('./routes/index')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(routes)

app.use(errorHandler)

app.listen(port, () => console.log(`Server running in port ${port}`))