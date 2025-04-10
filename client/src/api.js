import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const compileCode = async ({ source_code, language_id }) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/compile`, {
      source_code,
      language_id,
    });
    return res.data;
  } catch (error) {
    console.error("Error compiling code:", error);
    throw error;
  }
};
