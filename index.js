// import express from 'express' 
//ES6 Module Import add "type": "module" in package.json
const express = require("express"); //commonJS Import older version

const dotenv = require('dotenv')
 dotenv.config()

const PORT = process.env.PORT

const AppRoutes = require("./src/routes");
const { mongoose } = require("mongoose");


const app = express();

/**Middleware */
app.use(express.json());


/**Start Server */
mongoose
  .connect(`${process.env.dbUrl}/${process.env.dbName}`)
  .then(() => {
    app.listen(PORT, () => console.log(`Server listening to port ${PORT}`))
  })
  .catch((error) => {
    console.log("DB connection failed", `${process.env.dbUrl}/${process.env.dbName}`);
  });

/**Router */
app.use("/", AppRoutes);
