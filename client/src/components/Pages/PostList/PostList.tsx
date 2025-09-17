import { useEffect, useState } from "react";
import "./PostList.css";
import axios from "axios";
import PostCard from "../../UI/PostCard/PostCard";

interface PostCardProps {
  PostId: string;
  Title: string;
  Comments: CommentsArr[];
}

interface CommentsArr {
  CommentId: string;
  Content: string;
}

function PostList() {
  const [posts, setPosts] = useState<PostCardProps[] | null>(null);

  useEffect(() => {
    async function fetchPosts(): Promise<void> {
      const add = await axios.get<PostCardProps[]>(
        "http://localhost:4002/GetPosts"
      );

      const postsArray = Object.values(add.data).flat();

      console.log(postsArray);

      setPosts(postsArray);
    }

    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      {posts && posts.length > 0 && (
        <>
          {posts.map((post: PostCardProps) => (
            <PostCard
              key={post.PostId}
              id={post.PostId}
              title={post.Title}
              Comments={post.Comments}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
