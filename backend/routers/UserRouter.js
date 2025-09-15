const express = require('express');


const router = express.Router();

//getadd
router.get('/add', (req, res) => {
    res.send('reponse from user getadd')
});

//getall
router.get('/getall', (req, res) => {
    res.send('reponse from user getall')
});

//getbyid
router.get('/getbyid', (req, res) => {
    res.send('reponse from user getbyid')
});

//delete
router.get('/delete', (req, res) => {
    res.send('reponse from user delete')
});

//update
router.get('/update', (req, res) => {
    res.send('reponse from user update')
});


module.exports = router;