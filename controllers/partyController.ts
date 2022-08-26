import { nextTick } from 'process';
import Party from '../models/partyModel';
import { AppError } from '../utilities/appError';
import catchAsync from '../utilities/catchAsync';

export const allParties = catchAsync(async (req: any, res: any, next: any) => {
  const queryObj = { ...req.query };
  const exclFlds: Array<string> = ['sort', 'limit'];
  exclFlds.forEach((el) => delete queryObj[el]);

  const parties = await Party.find(queryObj);
  res.status(200).json({
    status: 'Success',
    dataLength: parties.length,
    data: parties,
  });
});

export const getParty = catchAsync(async (req: any, res: any, next: any) => {
  const id = req.params.id;
  const party = await Party.findById(id);

  if (!party) {
    next(new AppError('No party found with that ID', 404));
  } else {
    res.status(200).json({
      status: 'Success',
      data: party,
    });
  }
});

export const getPartyByLoc = catchAsync(async (req: any, res: any, next: any) => {
  const parties = await Party.find();

  res.status(200).json({
    status: 'Success',
    dataLength: parties.length,
    data: parties,
  });
});

export const createParty = catchAsync(async (req: any, res: any, next: any) => {
  // const city = req.body.city
  // const cityUp = city.charAt(0).toUpperCase() + city.slice(1);
  // req.body.city = cityUp;
  // console.log(req.body)
  const newParty = await Party.create(req.body);
  res.status(201).json({
    status: 'Success',
    data: newParty,
  });
});

export const updateParty = catchAsync(async (req: any, res: any, next: any) => {
  const id = req.params.id;
  const body = req.body;

  const party = await Party.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  if (!party) {
    next(new AppError('No party found with that ID', 404));
  } else {
    res.status(200).json({
      status: 'Success',
      data: party,
    });
  }
});

export const deleteParty = catchAsync(async (req: any, res: any, next: any) => {
  const id = req.params.id;
  const party = await Party.findByIdAndUpdate(id, { active: false });

  if (!party || !party.active) {
    next(new AppError('No party found with that ID', 404));
  } else {
    res.status(200).json({
      status: 'Party Deleted',
    });
  }
});
