import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [showForm, setShowForm] = useState(false);

  const handleCreatePost = () => {
    setShowForm(true);
  };

  const [postData, setPostData] = useState({
    name: "",
    text: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("name", postData.name);
    formData.append("text", postData.text);

    axios
      .post("http://localhost:8000/api/v1/posts/create_post/", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {!showForm && (
        <button
          style={{
            marginTop: "20px",
            cursor: "pointer",
            backgroundColor: "#8cedaf",
          }}
          onClick={handleCreatePost}
        >
          Создать пост
        </button>
      )}
      {showForm && (
        <form
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "10px",
            flexDirection: "column"
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Title"
            value={postData.name}
            onChange={handleChange}
          />
          <textarea
            name="text"
            placeholder="Content"
            value={postData.text}
            onChange={handleChange}
          />
          <button
            style={{
              cursor: "pointer",
            }}
            type="submit"
          >
            Отправить
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
