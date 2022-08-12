const Party = require('../models/partyModel');


exports.getParty = async (req, res, next) => {
  try {
    const parties = await Party.find();
    res.status(200).json({
        status: 'Success',
        dataLength: parties.length,
        data: parties
        })
  } catch (err) {
    res.status(400).json({
        status: 'Fail',
        message: err
    })
  }
};

exports.createParty = async (req, res, next) => {
  
    try {
        const newParty = await Party.create(req.body)
        res.status(201).json({
        status: 'Success',
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


exports.allParties = async (req, res, next) => {
    try {
      const parties = await Party.find();
      res.status(200).json({
          status: 'Success',
          dataLength: parties.length,
          data: parties
          })
    } catch (err) {
      res.status(400).json({
          status: 'Fail',
          message: err
      })
    }
  };