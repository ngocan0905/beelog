const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("hello ngoc an"));
app.listen(port, () =>
  console.log(`app is listening at http://localhost:${port}`)
);
