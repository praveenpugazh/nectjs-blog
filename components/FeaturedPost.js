import React from "react";
import Link from "next/link";
import postStyles from "../styles/Posts.module.css";

const FeaturedPost = ({ posts }) => {
  const excerpt = "Something short about the post goes here";
  const myDate = new Date(posts[0].published_at).toLocaleDateString();
  const altImg = "https://static.ghost.org/v4.0.0/images/welcome-to-ghost.png";
  const imageUrl = posts[0].feature_image;
  return (
    <div className={postStyles.featured}>
      <div className={postStyles.featuredImg}>
        {posts[0].feature_image && <img src={imageUrl} alt="Blog Post Image" />}
        {!posts[0].feature_image && <img src={altImg} alt="Blog Post Image" />}
      </div>
      <div className={postStyles.featuredDiv}>
        <Link href="/post/[slug]" as={`/post/${posts[0].slug}`}>
          <a>
            <h1>{posts[0].title} &rarr;</h1>
            {posts[0].custom_excerpt && <p>{posts[0].custom_excerpt}</p>}
            {!posts[0].custom_excerpt && <p>{excerpt}</p>}
            <h5> Published at: {myDate}</h5>
            <span>Read More...</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;
