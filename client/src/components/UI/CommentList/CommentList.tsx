import "./CommentList.css";

interface CommentListProps {
  Comments: CommentsArr[];
}

interface CommentsArr {
  CommentId: string;
  Content: string;
}

function CommentList({ Comments }: CommentListProps) {
  return (
    <div className="comment-list">
      {Comments &&
        Comments.map((c: CommentsArr) => <p key={c.CommentId}>{c.Content}</p>)}
    </div>
  );
}

export default CommentList;
