const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb+srv://ch_amorim21:C98633318@cluster0.ckwrp.mongodb.net/crud-react?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

app.listen(3001, () => console.log("started on port 3001"));
