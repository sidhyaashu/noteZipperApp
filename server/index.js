const express =require('express')
const notes = require('./data/noteD.js')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./db.js')
const userRoutes = require('./routes/userRoutes.js')
// const { notFound , errorHandler } = require('./middleware/errorMiddleware.js')

dotenv.config()
app.use(cors())
app.use(express.json())
// app.use(notFound)
// app.use(errorHandler)






const PORT = process.env.SERVER_PORT || 5500
app.get('/api/notes',(req,res)=>{
    res.json(notes)
})


app.use('/api/users',userRoutes)










//Connection with mongodb
connectDB().then(()=>app.listen(PORT,console.log(`${PORT}`))).catch((err)=>console.log(err))


// 30:12/1:07:03