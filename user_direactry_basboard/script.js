async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error("Network error");
    }

    const posts = await response.json();

    // Take only first 10 posts
    const firstTen = posts.slice(0, 20);

    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = "";

    firstTen.forEach(post => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
      `;

      tableBody.appendChild(row);
    });

  } catch (error) {
    console.error("Error:", error);

    document.querySelector('#userTable tbody').innerHTML =
      `<tr><td colspan="3">⚠️ Failed to load posts</td></tr>`;
  }
}

document.addEventListener("DOMContentLoaded", fetchPosts);