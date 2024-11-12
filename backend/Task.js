const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        n_id : Number,
        task : String,
        created_date : String,
        isDone : Boolean
    }
);
module.exports = mongoose.model("Task",schema,"tasks");