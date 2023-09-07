const express = require('express');
const app = express();
const PORT = 5003;

app.get('/api', (req, res) => {
  // Get query parameters
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // JSON response
  const jsonResponse = {
    slackName: slackName,
    currentDay: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
    utcTime: new Date().toISOString(),
    track: track,
    githubFileUrl: `https://github.com/davidumoru/json-res/blob/main/index.js`,
    githubRepoUrl: 'https://github.com/davidumoru/json-res',
    statusCode: 200,
  };

  res.json(jsonResponse);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
