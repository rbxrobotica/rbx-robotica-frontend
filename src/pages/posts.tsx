import { GetStaticProps } from 'next';
import { loadPosts } from '../lib/load-posts';

type Post = {
  ID: number;
  title: { rendered: string };
  content: { rendered: string };
  // Add more fields as needed
};

type PostsPageProps = {
  posts: { posts: Post[] };
};

// This function runs only on the server side
export const getStaticProps: GetStaticProps = async () => {
  const posts = await loadPosts();

  return { props: { posts } };
};

// This is the default export, which is a React component
const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.posts.map((post) => (
          <li key={post.ID}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
