import { GetStaticPropsContext } from 'next';

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  // Adicione outras propriedades conforme a sua API do WordPress
}

export async function getStaticProps({ params }): Promise<{ props: { post: Post } }> {
  const { id } = params;

  const response = await axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/ldamasio.wordpress.com/posts/${id}`);
  const post: Post = response.data;

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

export default function Post({ post }: { post: Post }) {
  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}
