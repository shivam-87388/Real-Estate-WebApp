const express = require('express');
const property = require('../models/Property');

const router = express.Router();

// get add
router.get('/add',(req, res)=> {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
            
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
        });

//getall
router.get('/getall',(req, res)=> {
     Model.find()
        .then((result) => {
            res.status(200).json(result);
            
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
        });

//getbyid
router.get('/getbyid',(req, res)=> {
    res.send('reponse from property getbyid')
    });

//delete
router.get('/delete',(req, res)=> {
    res.send('reponse from property delete')
    });

//update
router.get('/update',(req, res)=> {
    res.send('reponse from property update')
    });

module.exports = router;
