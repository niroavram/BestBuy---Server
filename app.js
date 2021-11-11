const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors("http://localhost:3000/"));

var authProducts = require("./routes/authProducts")

app.use(express.json());
app.use(authProducts);

app.listen(PORT,()=>{
    console.log("server running on PORT",PORT)
})

