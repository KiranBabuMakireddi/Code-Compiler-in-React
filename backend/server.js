import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import apiRouter from './routes/api.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route for root (optional but useful)
app.get("/", (req, res) => {
  res.send("🚀 API is running. Welcome to CodeX Backend!");
});

// Routes
app.use('/api', apiRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
