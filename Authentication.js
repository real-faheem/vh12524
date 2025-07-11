// authToken.js
const axios = require('axios');

const API_URL = 'http://20.244.56.144/evaluation-service/auth';

async function getAuthToken() {
  const payload = {
    email: "faheemhaker@gmail.com",
    name: "Md Faheem M N",
    rollNo: "vh12524",
    accessCode: "CWbqgK",
    clientID: "64aedfb2-6e15-47ee-8422-21f8490b02d5",
    clientSecret: "CsBsykCTRFWPwdPF"
  };

  try {
    const response = await axios.post(API_URL, payload);
    console.log('✅ Access Token Received:');
    console.log('Token Type:', response.data.token_type);
    console.log('Access Token:', response.data.access_token);
    console.log('Expires In:', response.data.expires_in);
  } catch (error) {
    console.error('❌ Auth Failed:', error.response?.data || error.message);
  }
}

getAuthToken();
