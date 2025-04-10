import axios from 'axios';

export const compileCode = async ({ source_code, language_id }) => {
  try {
    const res = await axios.post('http://localhost:5000/api/compile', {
      source_code,
      language_id,
    });

    return res.data;
  } catch (error) {
    console.error('Error compiling code:', error);
    throw error;
  }
};
