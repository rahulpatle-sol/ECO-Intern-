async function getPostsAndUsers() {
  try {
    const [postsRes, usersRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/users"),
    ]);

    const posts = await postsRes.json();
    const users = await usersRes.json();

    console.log("Posts:", posts.length);
    console.log("Users:", users.length);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

getPostsAndUsers();
