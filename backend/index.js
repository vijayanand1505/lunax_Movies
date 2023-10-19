const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("./models/database");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1/react-auth-demo", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

app.post("/", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        //res.json(user);
        res.json("success");
      } else {
        res.json({ error: "Wrong password" });
      }
    } else {
      res.json({ error: "User not found" });
    }
  });
  // .catch((err) => res.json(err));
});

app.post("/signup", (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
