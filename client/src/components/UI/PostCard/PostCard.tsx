import CommentCreate from "../CommentCreate/CommentCreate";
import CommentList from "../CommentList/CommentList";
import "./PostCard.css";

interface PostCardProps {
  title: string;
  id: string;
  Comments: CommentsArr[];
}

interface CommentsArr {
  CommentId: string;
  Content: string;
}

function PostCard({ title, id, Comments }: PostCardProps) {
  return (
    <div id="PostCard">
      <h1 id="PostCardH">{title}</h1>
      <CommentList Comments={Comments} />
      <CommentCreate id={id} />
    </div>
  );
}

export default PostCard;
