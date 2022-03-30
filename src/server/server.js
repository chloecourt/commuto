const express = require("express");
const app = express();
const PORT = 3000;

const working = "it is working!!!";

app.use(express);

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});
app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../styles.css"));
});

app.use();
app.listen(3000, () => console.log(`Listening on port ${PORT}`));
