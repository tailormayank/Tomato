import  express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app confiq
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDB();

//api endpoint
app.use("/api/food",foodRouter);
app.use("/images" , express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);



app.get("/" , (req, res)=>{
    res.send("Api Working");
});

app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`); 
});

//mongodb+srv://MayankTailor:Mayank123@cluster0.cb0yi1a.mongodb.net/?