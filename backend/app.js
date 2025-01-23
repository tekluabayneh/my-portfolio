const express = require("express");
const app = express();
const port = 5050;
const cors = require("cors");
const Router = require("./email");

// midelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
  })
);

app.use("/email", Router);

app.get("/", (req, res) => {
  res.json("email server is running");
  console.log("email server is running");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`server is running on port ${port}`);
});
