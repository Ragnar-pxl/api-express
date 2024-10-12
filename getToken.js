const axios = require('axios');

async function getToken(code) {
  const tokenData = {
    grant_type: 'authorization_code',
    client_id: '21693',
    client_secret: 'g2TCB3Ap000Ok4qBpIIWMScgvsDyc4hzAON4oqqy',
    redirect_uri: 'http://localhost:3000/auth/callback',
    code: code
  };

  try {
    const tokenResponse = await axios.post('https://anilist.co/api/v2/oauth/token', tokenData);
    return tokenResponse.data.access_token;
  } catch (error) {
    console.error('Erreur lors de la demande de token:', error);
    throw error;
  }
}

module.exports = getToken;
