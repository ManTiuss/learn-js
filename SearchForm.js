const searchForm = document.getElementById('searchForm');
const postIdInput = document.getElementById('postId');
const postContainer = document.getElementById('postContainer');
const postDiv = document.getElementById('post');
const loadCommentsButton = document.getElementById('loadComments');
const commentsDiv = document.getElementById('comments');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const postId = postIdInput.value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Пост не знайдено');
            }
            return response.json();
        })
        .then(post => {
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            postContainer.style.display = 'block';
        })
        .catch(error => {
            alert(error.message);
        });
});

loadCommentsButton.addEventListener('click', () => {
    const postId = postIdInput.value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Коментарі не знайдено');
            }
            return response.json();
        })
        .then(comments => {
            let commentsHTML = '';
            comments.forEach(comment => {
                commentsHTML += `
                    <h4>${comment.name}</h4>
                    <p>${comment.body}</p>
                    <hr>
                `;
            });
            commentsDiv.innerHTML = commentsHTML;
        })
        .catch(error => {
            alert(error.message);
        });
});