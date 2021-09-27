const express = require('express');
const router = express.Router();
const axios = require('axios');
const colors = require('colors');
const { dragDisable } = require('d3');



router.post('/saver-webhook',  async (req, res) => {

    const data = req.body;
    console.log(data);

    console.log(data.m);
    console.log(data);

    res.json("{}");

});


module.exports = router;