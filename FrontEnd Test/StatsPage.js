import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import getAllStats from '../services/stats';
import auth from '../services/auth';

function StatsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchStats() {
      const token = await auth();
      const stats = await getAllStats(token);
      setData(stats);
    }
    fetchStats();
  }, []);

  return (
    <Box p={4}>
      <Typography variant="h5">Shortened URL Statistics</Typography>
      <List>
        {data.map((item, idx) => (
          <ListItem key={idx}>
            <strong>{item.shortUrl}</strong> → {item.longUrl} (expires in {item.validityInMinutes} mins)
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default StatsPage;
