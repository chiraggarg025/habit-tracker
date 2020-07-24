const Habit = require('../models/habits');

module.exports.details = function(req,res){
    Habit.find({},function(err,habits){
        if(err){
            Console.log('Error in fetching the habits');
            return;
        }
        return res.render('details',{
            title:"LoopBit Weekly",
            habit_list:habits
        });
    })
}