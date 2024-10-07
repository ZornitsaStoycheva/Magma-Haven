const router = require('express').Router();
const homeService = require('../services/homeService');

router.get('/', async (req, res) => {
    const volcanoes = await homeService.getLastVolcano().lean();
    res.render('home', { volcanoes})
})

module.exports = router;