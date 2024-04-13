import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
  res.json({ message: 'Welcom to elib apis' });
});

app.get('/about', (req, res, next) => {
  res.send(
    '<h1 style="text-align: center; color: red; text-transform: uppercase"  >This is the about page</h1>'
  );
});

export default app;
