import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.route.js';

const app = express();
connectDB();

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  'http://localhost:4200',
  'https://your-frontend.vercel.app'
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true
  })
);

app.use('/api', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
