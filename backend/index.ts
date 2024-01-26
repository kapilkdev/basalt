import express from 'express';
import indexRouter from './Routes/routes.route';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

const port = process.env.PORT;
const DB = process.env.MONGO_URI || ''

// Enable CORS for all routes
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());

// connect DB
mongoose.connect(DB);
// Use your routes
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
