const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();

// Affichage des titres des 5 premiers posts
posts.slice(0, 5).forEach((post, index) => {
  console.log(`${index + 1} ${post.title}`);
});
