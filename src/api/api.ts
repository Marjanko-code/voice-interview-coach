import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const fetchQuestions = async () => {
  const res = await axios.get(`${BASE_URL}/questions`);
  return res.data;
};

export const fetchAnswers = async () => {
  const res = await axios.get(`${BASE_URL}/answers`);
  return res.data;
};

export const postQuestion = async (text: string) => {
  const res = await axios.post(`${BASE_URL}/questions`, { text });
  return res.data;
};
