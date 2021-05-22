import PostItem from "./PostItem";
import FeaturedPost from "./FeaturedPost";
import postStyles from "../styles/Posts.module.css";

const Posts = ({ posts }) => {
  const filter = posts[0].title;
  const filteredArray = posts.filter((post) => {
    return post.title != filter;
  });
  return (
    <div className={postStyles.grid}>
      <FeaturedPost posts={posts} />
      {filteredArray.map((post) => {
        return <PostItem key={post.slug} post={post} />;
      })}
    </div>
  );
};

export default Posts;
