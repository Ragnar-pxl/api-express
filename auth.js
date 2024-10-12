const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/auth', (req, res) => {
  const redirectUri = encodeURIComponent('http://localhost:3000/auth/callback');
  const clientId = '21693'; 
  const authUrl = `https://anilist.co/api/v2/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`;
  res.redirect(authUrl);
});

router.get('/auth/callback', async (req, res) => {
  const { code } = req.query;
  console.log('Authorization code:', code);

  if (!code) {
    return res.status(400).json({ error: 'Code d\'autorisation manquant' });
  }

  const tokenData = {
    grant_type: 'authorization_code',
    client_id: '21693', 
    client_secret: 'g2TCB3Ap000Ok4qBpIIWMScgvsDyc4hzAON4oqqy', 
    redirect_uri: 'http://localhost:3000/auth/callback',
    code: code
  };

  try {
    const tokenResponse = await axios.post('https://anilist.co/api/v2/oauth/token', tokenData);
    const accessToken = tokenResponse.data.access_token;
    console.log('Access Token:', accessToken);
    res.json({ message: 'Token reçu', token: accessToken });
  } catch (error) {
    console.error('Erreur lors de la demande de token:', error);
    res.status(500).json({ error: 'Erreur lors de la demande de token' });
  }
});

module.exports = router;
