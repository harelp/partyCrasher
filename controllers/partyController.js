const Party = require('../models/partyModel');

exports.createParty = async(req, res, next) => {
  
    try {
        const newParty = await Party.create(req.body)
        res.status(201).json({
        status: 'success',
        data: newParty
        })
    }
    catch (err){
        res.status(400).json({
            status: 'Fail',
            message: err
        })
    }
      
};


exports.updateParty = (req, res, next) => {
  
};

exports.deleteParty = (req, res, next) => {
  
};

exports.allParties = (req, res, next) => {
  
};

exports.getParty = (req, res, next) => {
  
};