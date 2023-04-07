import express from "express";

const app = express();

app.use(express.json())

app.get("/test", (req, res) => {
    res.json("It works")
})

app.listen(8000, ()=>{
    console.log("Connected!!!!")
});