import jwt from 'jsonwebtoken';
const { promisify } = require('util');

const values = () => {
  const secret: any = process.env.JWT_SECRET;
  const expIn: any = process.env.JWT_EXP_IN;
  return { secret, expIn };
};

export const sign = (id: any) => {
  const { secret, expIn } = values();
  return jwt.sign({ id }, secret, {
    expiresIn: expIn,
  });
};

export const verifyToken = (token: string) => {
  const { secret } = values();
  return promisify(jwt.verify)(token, secret);
};
