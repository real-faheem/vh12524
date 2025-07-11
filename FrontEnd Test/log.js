import axios from 'axios';

const LOG_ENDPOINT = 'http://20.244.56.144/evaluation-service/logs';

export default async function logEvent({ token, stack, level, packageName, message }) {
  await axios.post(
    LOG_ENDPOINT,
    {
      stack,
      level,
      package: packageName,
      message
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}
