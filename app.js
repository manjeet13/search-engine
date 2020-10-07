/**
 * @author : Manjeet Kumar
 * @description : the driver file for the app
 */

const express = require("express");
const configs = require("./configs");
const routes = require("./routes");

const app = new express();

app.use(routes);

app.listen(configs.PORT, ()=> {
    console.log("app is listening on PORT: ", configs.PORT);
});