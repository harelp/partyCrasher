import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

interface IUser {
  name: string;
  email: string;
  photo: string;
  password: any;
  confPassword: any;
  rating: number;
  partiesCreated: number;
  premium: boolean;
  signDate: number;
  active: boolean;
}

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
  },
  confPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (this: IUser, el: any) {
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
  rating: {
    type: Number,
    default: 0,
  },
  partiesCreated: {
    type: Number,
    default: 0,
  },
  premium: {
    type: Boolean,
    default: false,
  },
  signDate: {
    type: Number,
    default: Math.floor(Date.now() / 1000),
  },
  active: {
    type: Boolean,
    default: true,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confPassword = undefined;
});

export default mongoose.model<IUser>('User', userSchema);
// const User = mongoose.model<IUser>('User', userSchema);
// export default User;

//convert secs to date
// const date = new Date(1661485128 * 1000);
//console.log(date.toLocaleDateString(), date.toLocaleTimeString())
