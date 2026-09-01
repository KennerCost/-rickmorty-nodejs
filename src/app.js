const express = require("express");
const episodeRoutes = require("./routes/episode_routes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    message: "API ZRP!",
  });
});

app.use("/episode", episodeRoutes);

module.exports = app;