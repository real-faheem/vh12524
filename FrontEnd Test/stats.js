import axios from 'axios';

const STATS_API = 'http://20.244.56.144/evaluation-service/url';

export default async function getAllStats(token) {
  const res = await axios.get(STATS_API, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
}

