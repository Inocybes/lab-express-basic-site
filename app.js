/*
    A Home page, that welcomes the visitor and links to the other pages on the website.
    An About page, that shares some basic information about the person.
    A Works page, where you showcase some of the work of the person you chose.
    Bonus: A Photo Gallery page, displaying some pictures of the person/their work.
*/


// start the server
const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

// endpoints

app.get("/", (req, res)=>{
    res.sendFile( __dirname + "/views/home.html")
})

app.get("/about", (req, res)=>{
    res.sendFile( __dirname + "/views/about.html")
})

app.get("/work", (req, res)=>{
    res.sendFile( __dirname + "/views/works.html")
})

app.get("/photos", (req, res)=>{
    res.sendFile( __dirname + "/views/gallery.html")
})



// listener

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })