const express = require("express");
const episodeRoutes = require("./routes/episode_routes");

const {
  errorHandler,
  notFound,
} = require("./middlewares/error_handler");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API ZRP!",
  });
});

app.use("/episode", episodeRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;