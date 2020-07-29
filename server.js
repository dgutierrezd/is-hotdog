const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const isHotDog = require("ishotdog");
const gcKeyFile = "./isHotDog-f710549c83f8.json";
const projectId = "hotdog";

const getHotDog = async (imageURL) => {
  let res = await isHotDog.notHotDog(gcKeyFile, projectId, imageURL);
  return res;
};

app.post("/hotdog", async (req, res) => {
  getHotDog(req.body.imageURL).then((ans) => res.send(ans));
  // .catch((err) => console.log(`Hubo un error: ${err}`));
});

app.listen(4000, () => console.log("Running on port 4000 🔝"));
