import PostItem from "./PostItem";
import postStyles from "../styles/Posts.module.css";

const Posts = ({ posts }) => {
  return (
    <div className={postStyles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default Posts;
