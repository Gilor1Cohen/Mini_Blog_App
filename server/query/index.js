const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

let posts = [];

function handleEvent(type, data) {
  if (type === "PostCreated") {
    if (posts.find((p) => p.PostId === data.id)) return;

    posts.push({
      PostId: data.id,
      Title: data.title,
      Comments: [],
    });
  }

  if (type === "CommentCreated") {
    const post = posts.find((c) => c.PostId === data.PostId);
    if (!post) return;

    if (post.Comments.find((c) => c.CommentId === data.commentId)) return;

    post.Comments.push({
      CommentId: data.commentId,
      Content: data.comment,
    });
  }
}

app.get("/GetPosts", async (req, res) => {
  res.send({ data: posts });
});

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  res.send({ status: "OK" });
});

app.listen(4002, async () => {
  console.log("Query on 4002");

  console.log("Syncing events...");
  const events = await axios.get("http://localhost:4005/events");
  console.log("events:", events.data);
  for (let event of events.data) {
    handleEvent(event.type, event.data);
  }
  console.log("Events synced");
});
