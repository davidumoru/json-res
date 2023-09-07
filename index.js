const express = require("express");
const app = express();
const PORT = 5003;

app.get("/api", (req, res) => {
  // Get query parameters
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // JSON response
  const jsonResponse = {
    slack_name: slackName,
    current_day: new Date().toLocaleDateString("en-US", { weekday: "long" }),
    utc_time: new Date().toISOString(),
    track: track,
    github_file_url: `https://github.com/davidumoru/json-res/blob/main/index.js`,
    github_repo_url: "https://github.com/davidumoru/json-res",
    status_code: 200,
  };

  res.json(jsonResponse);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
