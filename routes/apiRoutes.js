// const db = require("./models");
const router = require("express").Router();

const { Workout } = require("../models");

//api/workouts

router.get("/workouts", async function (req, res) {
  try {
    const data = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ]);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

//api/workouts/:id
router.put("/workouts/:id", async function (req, res) {
  try {
    const data = await Workout.updateOne(
      {
        _id: req.params.id,
      },
      {
        $push: {
          exercises: req.body,
        },
      }
    );
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

//api/workouts
router.post("/workouts", function (req, res) {
  Workout.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

//api/workouts/range
router.get("/workouts/range", async (req, res)=> {
  try {
    const data = await Workout.aggregate([
     { $limit :7 },
     {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
        numExercises: {
          $sum: '$execises.name',
        },
        totalWeight: {
          $sum: '$exercises.pounds',
        },
        totalSets: {
          $sum: '$execises.sets'
        },
       totalReps: {
         $sum: '$exercises.rep',
       },
      totalDistance: {
        $sum: '$exercises.distance',
      },
      }
     }
    ]) 
      res.json(data);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});




module.exports = router;
