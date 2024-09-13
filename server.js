import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
//import mysql from 'mysql2';
import postsRoutes from './routes/postsRoutes.js';

const app = express();
const port = 8071;

app.use(cors());
app.use(express.json());

app.use('/api', postsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
