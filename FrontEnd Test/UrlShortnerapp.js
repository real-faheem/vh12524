// log.js
const axios = require('axios');

const LOG_ENDPOINT = 'http://20.244.56.144/evaluation-service/logs';

async function log(token) {
  try {
    const response = await axios.post(
      LOG_ENDPOINT,
      {
        stack: "backend",
        level: "error",
        package: "handler",
        message: "received string, expected bool"
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ Log created:', response.data);
    return response.data;
  } catch (err) {
    console.error('❌ Logging failed:', err.response?.data || err.message);
  }
}

module.exports = log;
