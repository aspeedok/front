import React, { useEffect, useState } from "react";
import * as form from "../utils/form";
import { Link } from "react-router-dom";
import Form from "./Form";
import FormAdditionally from "./FormAdditionally";

const PostTitle = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    form
      .listGet()
      .then((data) => {
        setPosts(data);
        const tBody = document.querySelector(".t-body");
        const header = document.querySelector(".t229__positionfixed");
        if (tBody) {
          tBody.style.overflow = "visible";
        }
        if (header) {
          header.style.display = "block";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {posts.length > 0 &&
          posts.map((post) => (
            <div key={post.id}>
              <h2>{post.name}</h2>
              <Link to={{ pathname: "/post", search: `?id=${post.id}` }}>
                <p
                  style={{
                    color: "blue",
                  }}
                >
                  Подробнее...
                </p>
              </Link>
            </div>
          ))}
      </div>
      <Form />
      <FormAdditionally />
    </div>
  );
};

export default PostTitle;
