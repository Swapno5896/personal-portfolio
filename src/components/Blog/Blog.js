import React from "react";
import "./Blog.css";
import image from "../../images/hotel.png";
import BlogCard from "../BlogCard/BlogCard";

const Blog = () => {
  const blogs = [
    {
      Title: "This is blog",
      Discription:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eius laboriosam quaerat ratione ea fugit doloribus ipsa rem hic id accusamus quam, minus temporibus consequuntur iste dolores magni aut distinctio.",
      radLink: "www.ww",
    },
    {
      Title: "This is blog",
      Discription:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eius laboriosam quaerat ratione ea fugit doloribus ipsa rem hic id accusamus quam, minus temporibus consequuntur iste dolores magni aut distinctio.",
      radLink: "www.ww",
    },
    {
      Title: "This is blog",
      Discription:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eius laboriosam quaerat ratione ea fugit doloribus ipsa rem hic id accusamus quam, minus temporibus consequuntur iste dolores magni aut distinctio.",
      radLink: "www.ww",
    },
  ];
  return (
    <div className="d-flex justify-content-center">
      <div className="row">
        {blogs.map((bg) => (
          <BlogCard bg={bg} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
