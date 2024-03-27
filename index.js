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
            desc:'college xjkldld',
            pdf:'https://drive.google.com/file/d/1CowJQbv6_GvSLKROfriWfb9ZVkUu5PQ3/view?usp=sharing'
        },
        {
            id:2,
            name:'College of Science and Technology',
            desc:'college xjkldld',
            pdf:'https://drive.google.com/file/d/1CowJQbv6_GvSLKROfriWfb9ZVkUu5PQ3/view?usp=sharing'
        },
        {
            id:3,
            name:'College of Science and Technology',
            desc:'college xjkldld',
            pdf:'https://drive.google.com/file/d/1CowJQbv6_GvSLKROfriWfb9ZVkUu5PQ3/view?usp=sharing'
        }

        
    ]

    res.send(college)


})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})