const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    habit:{
        type : String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    end : {
        type:String
    },
    frequency : {
        type:String,
        required:true
    },
    date:{
        type:String
    },
    time:{
        type:String,
        required:true
    }

})

const Habit = mongoose.model('Habit',habitSchema);

module.exports = Habit;