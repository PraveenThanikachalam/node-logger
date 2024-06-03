import express from "express";
import dotenv from "dotenv";
import router from "./routes/root.js";
import logger from "./middleware/logger.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(logger)

app.use(express.json());

app.use("/",router,()=>{
    console.log("from console");
})

app.listen(port,()=>{console.log(`Server is listening to port : http://localhost:${port}`);})
