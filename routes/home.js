const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('home', { title: 'Algorit Vision'})
});

module.exports = router;