import axios from 'axios';

const SHORTEN_URL_API = 'http://20.244.56.144/evaluation-service/shorten';

export default async function createShortUrl(token, originalUrl) {
  const res = await axios.post(
    SHORTEN_URL_API,
    {
      longUrl: originalUrl,
      validityInMinutes: 30
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return res.data;
}
