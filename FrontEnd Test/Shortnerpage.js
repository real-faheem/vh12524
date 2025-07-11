import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import createShortUrl from '../services/shortUrl';
import logEvent from '../services/log';
import auth from '../services/auth';

function ShortenerPage() {
  const [url, setUrl] = useState('');
  const [short, setShort] = useState('');
  const [token, setToken] = useState('');

  const handleShorten = async () => {
    try {
      if (!token) {
        const newToken = await auth();
        setToken(newToken);
      }

      const shortResult = await createShortUrl(token || newToken, url);
      setShort(shortResult.shortUrl);

      await logEvent({
        token: token || newToken,
        stack: 'frontend',
        level: 'info',
        packageName: 'app',
        message: 'Short URL created'
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h5">URL Shortener</Typography>
      <TextField
        label="Long URL"
        fullWidth
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        sx={{ my: 2 }}
      />
      <Button variant="contained" onClick={handleShorten}>Shorten</Button>
      {short && (
        <Typography mt={2}>
          Short URL: <a href={short} target="_blank" rel="noreferrer">{short}</a>
        </Typography>
      )}
    </Box>
  );
}

export default ShortenerPage;
