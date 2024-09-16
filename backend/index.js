const express = require('express');
const app = express();
const cors = require("cors");
const rootRouter = require("./routes/index");
const db=require("./db");
// console.log(db);
app.use(cors());
app.use(express.json());
db.connect();
app.use("/api/v1", rootRouter);

app.listen(3000,()=>{
    console.log("server running well!")
});