import app from './src/app';

const startServer = () => {
  const port = process.env.port || 3000;

  app.listen(port, () => {
    console.log(`Listen to the port: ${port} `);
  });
};

startServer();
