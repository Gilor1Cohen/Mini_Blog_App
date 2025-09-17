import { useState } from "react";
import "./CommentCreate.css";
import axios from "axios";

interface CommentCreateProps {
  id: string;
}

function CommentCreate({ id }: CommentCreateProps) {
  const [comment, setComment] = useState<string | null>(null);

  async function handleSubmit() {
    const add = await axios.post<any>(
      "http://localhost:4001/AddComment/" + id,
      {
        comment,
      }
    );

    setComment(add.data);
  }

  return (
    <form className="comment-create" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        id="text"
        value={comment || ""}
        onChange={(e) => setComment(e.target.value)}
      />
      <input type="submit" disabled={!comment} value="Add Comment" />
    </form>
  );
}

export default CommentCreate;
