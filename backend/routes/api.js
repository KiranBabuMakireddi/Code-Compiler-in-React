import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const JUDGE0_API_BASE = 'https://judge0-ce.p.rapidapi.com';
const headers = {
  'content-type': 'application/json',
  'X-RapidAPI-Key': process.env.MY_SECRET_API_KEY,
  'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
};

router.post('/compile', async (req, res) => {
  const { source_code, language_id } = req.body;

  try {
    // Submit code
    const { data } = await axios.post(
      `${JUDGE0_API_BASE}/submissions?base64_encoded=false&wait=false`,
      { source_code, language_id },
      { headers }
    );

    const token = data.token;

    // Poll for result
    let result;
    while (true) {
      const { data: pollData } = await axios.get(
        `${JUDGE0_API_BASE}/submissions/${token}?base64_encoded=false`,
        { headers }
      );

      result = pollData;
      if (result.status.id <= 2) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        break;
      }
    }

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Compilation error', details: error.message });
  }
});

export default router;
