const Party = require('../models/partyModel');


exports.getParty = async (req, res, next) => {
  try {

    const id = req.params.id;
    const party = await Party.findById(id);
    res.status(200).json({
        status: 'Success',
        data: party
        })
  } catch (err) {
    res.status(400).json({
        status: 'Fail',
        message: err
    })
  }
};

exports.getPartyByLoc = async (req, res, next) => {
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
      // const city = req.body.city
      // const cityUp = city.charAt(0).toUpperCase() + city.slice(1);
      // req.body.city = cityUp;
      // console.log(req.body)
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

exports.updateParty = async (req, res, next) => {
  
  try {
      const id = req.params.id;
      const body = req.body;

      const party = await Party.findByIdAndUpdate(id, body, { 
        new: true, 
        runValidators: true 
      })

      res.status(200).json({
      status: 'Success',
      data: party
      })
  }
  catch (err){
      res.status(404).json({
          status: 'Fail',
          message: err
      })
  }
    
};

exports.deleteParty = async(req, res, next) => {
  try {
      const id = req.params.id;

      const party = await Party.findByIdAndUpdate(id, { active: false } 
      )

      res.status(200).json({
      status: 'Party Deleted',
      })
  }
  catch (err){
      res.status(404).json({
          status: 'Fail',
          message: err
      })
  }
};

// ADMIN
exports.allParties = async (req, res, next) => {
    try {
      const queryObj = {...req.query};
      const exclFlds = ['sort', 'limit'];
      exclFlds.forEach(el => delete queryObj[el]);
      console.log(queryObj)
      const parties = await Party.find(queryObj);
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