const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Alien = require('./alien.js');
router.get('/aliens', async(req, res) => {
    try {
        const data = await Alien.find();
        res.send(data);
    } catch (err) {
        res.send(`error ${err}`);
    }
})


router.get('/alien/:id', async(req, res) => {
    const id = req.params.id;
    try {
        let data = await Alien.findById(id);
        jwt.verify(data.name, 'key', (err, ans) => {
            data.name = ans;
            res.json(data);
        });
    } catch (err) {
        res.send(`error ${err}`);
    }
})


router.post('/aliens', (req, res) => {
    const alien = new Alien({
        name: jwt.sign(req.body.name, 'key'),
        tech: req.body.tech,
        sub: req.body.sub
    });
    alien.save().then((result) => res.json(result))
})


router.patch('/alien/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Alien.findByIdAndUpdate(id, data).then((result) => res.json(result));
})


router.delete('/alien/:id', (req, res) => {
    const id = req.params.id;
    Alien.findByIdAndDelete(id).then((result) => res.json(result))
})
module.exports = router;