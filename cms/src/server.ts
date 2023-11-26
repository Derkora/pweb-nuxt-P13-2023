import express from 'express';
import cors from 'cors';
import payload from 'payload';

require('dotenv').config();
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // sesuai dengan domain client
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: http://localhost:3069/${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3069);
};

start();