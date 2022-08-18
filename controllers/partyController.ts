import { Party } from '../models/partyModel';

export const allParties = async (req: any, res: any, next: any) => {
  try {
    
    const queryObj = {...req.query};
    const exclFlds: Array<string> = ['sort', 'limit'];
    exclFlds.forEach(el => delete queryObj[el]);

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

export const getParty = async (req: any, res: any, next: any) => {
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

export const getPartyByLoc = async (req: any, res: any, next: any) => {
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

export const createParty = async (req: any, res: any, next: any) => {
  
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

export const updateParty = async (req: any, res: any, next: any) => {
  
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

export const deleteParty = async(req: any, res: any, next: any) => {
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

