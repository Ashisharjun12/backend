require('dotenv').config()
const express = require('express')

const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/college',(req,res)=>{

    const college = [
        {
            id:1,
            name:'College of Science and Technology',
            desc:'college xjkldld'
        },
        {
            id:2,
            name:'College of Science and Technology',
            desc:'college xjkldld'
        },
        {
            id:3,
            name:'College of Science and Technology',
            desc:'college xjkldld'
        }

        
    ]

    res.send(college)


})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})