/**
 * @description : file containing all the app routes
 */

const Router = require("express").Router({mergeParams: true})

Router.get("/ping", async (req, res)=> {
    res.status(200).send({status: "online", message: "PONG"});
});

Router.get("/search/:id", async(req, res)=> {
    try {

    } catch(error) {
        res.status(500).json({
            success: false,
            message: error.toString().trim()
        })
    }
})

module.exports = Router;