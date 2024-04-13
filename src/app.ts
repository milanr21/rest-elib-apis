import express from 'express';
import createHttpError from 'http-errors';
import globalErrorHandler from './middlewares/globalErrorHandler';

const app = express();

app.get('/', (req, res, next) => {
  const error = createHttpError(400, 'something went wrong');
  throw error;

  res.json({ message: 'Welcome to elib apis' });
});

app.get('/about', (req, res, next) => {
  res.send(
    '<h1 style="text-align: center; color: red; text-transform: uppercase"  >This is the about page</h1>'
  );
});

// Global-error-handler

app.use(globalErrorHandler);

export default app;
