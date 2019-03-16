const router = require("express").Router();
// const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");
// const logController = require ("../../controller/logController")

router.post("/", authMiddleware.isLoggedIn, function(req, res, next) {
    req.body.log_bc = req.body.log_bc === "true";
    req.body.log_hungover = req.body.log_hungover === "true";
    
    db.Log.create(req.body)
	.then(dbLog => res.json(dbLog))
	.catch(err => res.status(422).json(err));

    // console.log({
    //     user: req.user,
    //     loggedIn: true,
    //     body: req.body
    // });  
    // res.json({
    //     user: req.user,
    //     loggedIn: true,
    //     body: req.body
    // });
});
// router.route("/",authMiddleware.isLoggedIn)
// .get (logController.find)
// .post (logController.create);
// const router = require("express").Router();
// const db = require("../../models");

// router.get("/", function(req, res) {
//     db.log.find(function(err, logs){
//         if(err) {
//             console.log(err);
//         } else {
//             res.json(logs);
//         }
//     });
// });

// router.get('/:id', function(req, res) {
// let id = req.params.id;
// db.Log.findById(id, function(err, log) {
//     res.json(log);
//     });
// });

// router.post("/add", function(req, res){
//     let log = new Log(req.body);
//     db.Log.save()
//     .then(log =>{
//         res.status(200).json({'log': 'log added successfully'});
//     })
//     .catch(err => {
//         res.status(400).send('adding new log failed');
//     });
// });

// router.post('/update/:id', function(req, res) {
//     db.Log.findById(req.params.id, function(err, log) {
//         if(!log)
//         res.status(404).send("data is not found");
//         else
//         log.log_temp = req.body.log_temp;
//         log.log_weight = req.body.log_weight;
//         log.log_sleep = req.body.log_sleep;
//         log.log_spotting = req.body.log_spotting;
//         log.log_hungover = req.body.log_hungover;
//         log.log_bc = req.body.log_bc;
//         log.log_symptoms = req.body.log_symptoms;

//         log.save().then(log => {
//             res.json('Log updated!');
//         })
//         .catch(err => {
//             res.status(400).send("Update not possible");
//         });

        
//     });
// });

// module.exports = router;








module.exports = router;
