const express = require('express');
const Task = require('./Task');
const mongoose = require('mongoose');
const cors = require('cors');
const moment = require('moment');

// require('dotenv').config();

const connectionString = "mongodb+srv://Rishil:RVJani@cluster0.7mv6j.mongodb.net/To-Do_list";
const port = 4000;
var id = 1;
mongoose.connect(connectionString).then(() => {
    console.log("database connected");

    const app = express();
    app.use(express.json());
    app.use(cors());

    // Get All
    app.get("/tasks", async (req, res) => {
        const ans = await Task.find().sort({ n_id: -1 });
        res.send(ans);
    });

    // Get by id
    app.get("/tasks/:id", async (req, res) => {
        const ans = await Task.findOne({ n_id: req.params.id });
        res.send(ans);
    });

    // Create
    app.post("/tasks", async (req, res, next) => {
        try {
            const result = await Task.aggregate([
                {
                    $group: {
                        _id: null,         // Group all documents together
                        maxId: { $max: "$n_id" }  // Replace 'n_id' with your target field
                    }
                }
            ]);

            id = result[0].maxId + 1;
            next();

        } catch (error) {
            console.error("Error finding max n_id:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }, async (req, res) => {
        const str = req.body.mytask;
        const current = moment().format("DD/MM/YYYY").toString();

        const curr = new Task({
            n_id: id,
            task: str,
            created_date: current,
            isDone: false
        });
        id++;
        const ans = await curr.save();

        res.send(ans);
    });


    // when a task is done
    app.put("/tasks/:n_id", async (req, res) => {
        const t = await Task.findOne({ n_id: req.params.n_id });

        t.isDone = req.body.isDone;
        t.task = req.body.task;
        const ans = await t.save();
        const myres = await Task.find().sort({n_id:-1});
        res.send(myres);
    });

    // to delete a task 
    app.delete("/tasks/:id", async (req, res) => {
        const ans = await Task.deleteOne({ n_id: req.params.id });
        const myres = await Task.find().sort({n_id : -1});
        console.log("deleted")
        res.send(myres);
    });

    // search api
    app.get("/tasks/search/:txt",async (req,res)=>{
        
        const ans = await Task.find({
            task : { $regex : req.params.txt}
        }).sort( {n_id : -1});
        res.send(ans);
    });

    app.listen(port, () => {
        console.log("server started at " + port);
    })
});