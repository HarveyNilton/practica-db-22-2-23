const {Router} = require('express')

const routes = Router()

routes.get('/',(req,res)=>{
    res.send('Soy el Get')
})

routes.post('/',(req,res)=>{
    const body = req.body
    res.json(body)
    
    console.log(req.body);
})

module.exports = routes