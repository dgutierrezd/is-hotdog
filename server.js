const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const isHotDog = require("ishotdog");
const gcKeyFile = "./isHotDog-f710549c83f8.json";
const projectId = "hotdog";

const getHotDog = async (imageURL) => {
  return isHotDog.notHotDog(
    gcKeyFile,
    projectId,
    // "https://media.revistagq.com/photos/5ca5f2b9f464889534f49388/master/pass/hot_dog_perrito_bajo_cero_7406.png"
    // "https://animapedia.org/wp-content/uploads/2018/07/aguila.jpg",
    imageURL
  );
};

app.post("/hotdog", async (req, res) => {
  getHotDog(req.body.imageURL).then((ans) => res.send("Es hot dog!"));
});

app.listen(4000, () => console.log("Running on port 4000 🔝"));
