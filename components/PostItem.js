import React from "react";
import Link from "next/link";
import postStyles from "../styles/Posts.module.css";
const Post = ({ post }) => {
  const excerpt = "Something short about the post goes here";
  const myDate = new Date(post.published_at).toLocaleDateString();
  let newExpert = "";
  if (post.custom_excerpt.length > 100) {
    newExpert = post.custom_excerpt.substr(0, 100) + "...";
  }
  return (
    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
      <a className={postStyles.card}>
        <img src={post.feature_image} alt="Blog Post Image" />
        <h2>{post.title} &rarr; </h2>
        {post.custom_excerpt && <p>{newExpert}</p>}
        {!post.custom_excerpt && <p>{excerpt}</p>}
        <h5> Published at: {myDate}</h5>
        <span>Read More...</span>
      </a>
    </Link>
  );
};

export default Post;
