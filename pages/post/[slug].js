import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import postStyles from "../../styles/Posts.module.css";
import Meta from "../../components/Meta";

const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPost(slug) {
  const res = await fetch(`	
  ${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=custom_excerpt,reading_time,slug,html,feature_image,published_at,title`).then(
    (res) => res.json()
  );
  const posts = res.posts;

  return posts[0];
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading!!!</h1>;
  }

  const myDate = new Date(post.published_at).toLocaleDateString();
  return (
    <>
      <Meta title={post.title} description={post.custom_excerpt} />
      <div className={postStyles.grid}>
        <p className={postStyles.published}>
          Published at: <span> {myDate}</span>
        </p>
        <h3 className={postStyles.title}>{post.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        <Link href="/">
          <a className={postStyles.btn}>Go Back</a>
        </Link>
      </div>
    </>
  );
};

export default Post;
