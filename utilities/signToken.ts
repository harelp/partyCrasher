import jwt from 'jsonwebtoken';

const signToken = (id: any) => {
  const secret: any = process.env.JWT_SECRET;
  const expIn: any = process.env.JWT_EXP_IN;
  return jwt.sign({ id }, secret, {
    expiresIn: expIn,
  });
};
export default signToken;
