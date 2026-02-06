const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// These are your challenges from the doc [cite: 5, 41]
const challenges = {
  "1": { title: "Hidden in Plain Sight", flag: "FLAG{metadata_found}", points: 10 }, // [cite: 6, 7]
  "2": { title: "Caesar's Secret Message", flag: "FLAG{rot13_master}", points: 10 } // [cite: 10, 11]
};

app.post('/api/verify', (req, res) => {
  const { id, submission } = req.body;
  if (challenges[id] && submission === challenges[id].flag) {
    res.json({ success: true, message: "Correct! Points awarded." });
  } else {
    res.json({ success: false, message: "Wrong flag. Try again!" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000 - server.js:23"));