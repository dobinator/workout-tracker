const db = require("/models");
const router = require ("express").Router();

const { Workout }= require ("../models");


//api/workouts

router.get ("/workouts", async function(req, res){
    try{
const data = await Workout.aggregate ([
{
    $addFields:{
        totalDuration:{
            $sum:"$exercises.duration",
        },
    },
},
]);
res.json(data);
}catch(err){
    console.log(err);
    res.status(500).send(err);
}
});



//api/workouts/:id
router.put ("/workouts/:id", async function(req, res){

}); 

//api/workouts
router.post ("/workouts", async function(req, res){

});

//api/workouts/range
router.get ("/workouts/range", async function(req, res){

});






module.exports= router; 