const express = require('express')
const app = express()
const port = process.env.PORT || 500;

const users =[
    {
        id:1,
        name:"jannatuun",
        email:"jannatun@gamil.com"
    },
    {
        id:2,
        name:"fima",
        email:"fima@gamil.com"
    },
    {
        id:3,
        name:"sabana",
        email:"sabana@gamil.com"
    }
]

app.get("/", (req,res)=>{
    res.send('User Management server is running')
})
app.get("/users",(req,res)=>{
    res.send(users)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })