const { randomBytes } = require("crypto");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());
app.use(express.json());

let comments = [];

app.get("/GetComments/:postId", (req, res) => {
  const postComments = comments.filter((c) => c.PostId === req.params.postId);

  res.status(200).send(postComments);
});

app.post("/AddComment/:postId", async (req, res) => {
  const PostId = req.params.postId;
  const commentId = randomBytes(4).toString("hex");
  const { comment } = req.body;

  comments.push({ PostId, commentId, comment });

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: { PostId, commentId, comment },
  });

  const postComments = comments.filter((c) => c.PostId === req.params.id);

  res.status(200).send(postComments);
});

app.post("/events", async (req, res) => {
  console.log(req.body.type);
  res.send({ status: "OK" });
});

app.listen(4001, () => {
  console.log("Comments on 4001");
});
