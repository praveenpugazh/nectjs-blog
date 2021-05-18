import PostsList from "../components/PostsList";

const { BLOG_URL, CONTENT_API_KEY } = process.env;

export default function Home({ posts }) {
  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
}
async function getPosts() {
  const res = await fetch(`	
 ${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}f&fields=reading_time,slug,custom_excerpt,feature_image,published_at,title`).then(
    (res) => res.json()
  );
  const posts = res.posts;

  return posts;
}
export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};
