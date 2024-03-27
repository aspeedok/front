export const BASE_URL = "http://localhost:8000";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Произошла ошибка: ${res.status}`);
}

export const addForm = (name, email, theme, created, text) => {
  return fetch(`${BASE_URL}/api/v1/feedback/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      theme: theme,
      created: created,
      text: text,
    }),
  }).then((res) => checkResponse(res));
};
