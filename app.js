const expres = require('express')
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes.js')

const app = expres()

app.use(morgan('tiny'))
app.use(expres.json())
app.use(userRoutes)

app.listen(2023,()=>{
    console.log('Servidor corriendo en el port 2023');
})