const express=require('express')
const app=express()
const PORT = process.env.PORT || 8080;


const baseUrl="/calculator"

app.use(express.json())

const baseRouter = express.Router();


baseRouter.get("/greetings",(req,res)=>{
    return res.send("Hello There!");
});

baseRouter.post("/add",(req,res)=>{
    const data=req.body();

    let a=data["first"];
    let b=data["second"];

    res.json({ result: f + s });
});


app.use(baseUrl, baseRouter);
app.listen(PORT,()=>{
    console.log("Working");
});