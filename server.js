import express from 'express';
import dotenv from 'dotenv';
import indexRouter from "./routes/index.js";
import { dbConnection } from './config/db.config.js';

dotenv.config();

dbConnection();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 3001

// app.get('/', (req, res) =>{
//     console.log("We are here");
//     res.end("Hello World!");
// })
app.set("view engine", "ejs");
app.use('/api/v1', indexRouter);

app.listen(PORT, () =>{
    console.log('listening on port', PORT);
})