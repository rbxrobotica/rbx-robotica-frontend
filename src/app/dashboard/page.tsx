import React from 'react';
import { PostsProvider } from '@/context/PostsContext';
import { loadPosts } from '@/lib/load-posts';
import Layout from '@/components/layout';

type Post = {
  ID: number;
  title: { rendered: string };
  content: { rendered: string };
};

export default async function QuemSomosPage() {
  const { posts } = await loadPosts();
  const filteredPosts = posts.filter((post: Post) => post.ID === 26);
  
  return (
    <PostsProvider posts={filteredPosts}>
      <Layout title="Dashboard">
        <h1>Dashboard</h1>
        <ul>
          {filteredPosts.map((post: Post) => (
            <li key={post.ID}>
              <h3 dangerouslySetInnerHTML={{ __html: post.content }} />
            </li>
          ))}
        </ul>
      </Layout>
    </PostsProvider>
  );
}
