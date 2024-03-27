import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as detailPost from "../utils/detailPost";

const Post = () => {
  const location = useLocation();
  const postId = new URLSearchParams(location.search).get("id");
  const [post, setPost] = useState({});

  useEffect(() => {
    detailPost
      .detailInfo(postId)
      .then((data) => {
        setPost(data);
        const tBody = document.querySelector(".t-body");
        const header = document.querySelector(".t229__positionfixed");
        if (tBody) {
          tBody.style.overflow = "hidden";
        }
        if (header) {
          header.style.display = "none";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postId]);

  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "white",
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 4,
      }}
    >
      <h2>{post.name}</h2>
      <p>{post.text}</p>
    </div>
  );
};

export default Post;
