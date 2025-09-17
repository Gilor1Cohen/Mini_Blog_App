const { randomBytes } = require("crypto");
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

let posts = [];

app.get("/GetPosts", (req, res) => {
  res.status(200).send(posts);
});

app.post("/AddPost", async (req, res) => {
  const { post } = req.body;
  if (!post || typeof post !== "string") {
    return res.status(400).send({ error: "Title must be a non-empty string" });
  }

  const id = randomBytes(4).toString("hex");

  const newPost = { id, title: post };

  posts.push(newPost);

  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: { id, title: post },
  });

  res.status(201).send(newPost);
});

app.post("/events", async (req, res) => {
  console.log(req.body.type);
  res.send({ status: "OK" });
});

app.listen(4000, () => {
  console.log("Posts on 4000");
});
