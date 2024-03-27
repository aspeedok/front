export const BASE_URL = "http://localhost:8000";
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Произошла ошибка: ${res.status}`);
}

export const detailInfo = (postId) => {
    return fetch(`${BASE_URL}/api/v1/posts/posts/${postId}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => checkResponse(res));
}
