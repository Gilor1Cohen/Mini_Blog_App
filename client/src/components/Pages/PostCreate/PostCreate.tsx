import { useState } from "react";
import "./PostCreate.css";
import axios from "axios";

function PostCreate() {
  const [post, setPost] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(post: string): Promise<void> {
    const add = await axios.post("http://localhost:4000/AddPost", { post });

    if (add.status !== 200) {
      setError("Failed to create post. Please try again.");
      return;
    }

    setPost(null);
    return;
  }

  return (
    <div className="post-create-container">
      <h1 className="post-create-title">Create Post</h1>
      <form
        id="post-form"
        className="post-create-form"
        onSubmit={() => handleSubmit(post as string)}
      >
        <input
          type="text"
          name="PostText"
          id="post-text"
          className="post-input"
          placeholder="Write something..."
          value={post || ""}
          onChange={(e) => setPost(e.target.value)}
        />
        <input
          type="submit"
          value="Submit"
          id="post-submit"
          className="post-submit-btn"
          disabled={!post}
        />
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default PostCreate;
