import app from './src/app';
import { config } from './src/config/config';
import connectDB from './src/config/db';

const startServer = async () => {
  const port = config.port || 3000;

  // COnnect the server
  await connectDB();

  app.listen(port, () => {
    console.log(`Listen to the port: ${port} `);
  });
};

startServer();
