export async function loadPosts() {
  console.log(1)
  const res = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/rbxrobotica.wordpress.com/posts/')
  const data = await res.json()
  console.log(1.2)
  // console.log(data)

  return data
}