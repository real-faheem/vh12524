const axios = require('axios');

const API_URL = 'http://20.244.56.144/evaluation-service/register';

async function registerUser() {
  const payload = {
    email: "faheemhaker@gmail.com",
    name: "Md Faheem M N",
    mobileNo: "9360609439",
    githubUsername: "real-faheem",
    rollNo: "vh12524",
    accessCode: "CWbqgK"
  };

  try {
    const response = await axios.post(API_URL, payload);
    console.log('✅ Registration Successful!');
    console.log('Client ID:', response.data.clientID);
    console.log('Client Secret:', response.data.clientSecret);
  } catch (error) {
    console.error('❌ Registration Failed:', error.response?.data || error.message);
  }
}

registerUser();
