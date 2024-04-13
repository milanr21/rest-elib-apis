import mongoose from 'mongoose';
import { config } from './config';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log('Connected to the database sucessfully');
    });

    mongoose.connection.on('error', (err) => {
      console.log('Error in connecting to database', err);
    });

    await mongoose.connect(config.databaseUrl as string);
  } catch (err) {
    console.log('Failed to connect to database', err);
  }
};

export default connectDB;
