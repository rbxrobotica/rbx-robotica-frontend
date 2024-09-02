
// posts will be populated at build time by getStaticProps()
export default function Blog({ posts }) {
  const post = posts.posts[2].content;
  console.log(post);
  console.log('alcaraz');
  return (
    <>
  
    <ul>
      {/* {posts.map((post) => (
        <li>{post.title}</li>
      ))} */}
      {/* {posts.posts} */}
      {post}
    </ul>
    </>
  )
}
 
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/rbxrobotica.wordpress.com/posts/')
  const posts = await res.json()
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}