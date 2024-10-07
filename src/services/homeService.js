const Volcano = require('../models/Volcano');

exports.getLastVolcano = () => Volcano.find().sort({ _id: -1 });