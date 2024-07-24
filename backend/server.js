import  express from "express";
import cors from "cors";

//app confiq
const app = express();
const port = 4000

//middleware
app.use(express.json());
app.use(cors());

app.get("/" , (req, res)=>{
    res.send("Api Working");
});

app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`); 
});

//mongodb+srv://MayankTailor:Mayank123@cluster0.cb0yi1a.mongodb.net/?