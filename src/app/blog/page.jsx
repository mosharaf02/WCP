import React from "react";
import "./blog.css";
import PostCard from "@/components/postCard/postCard";
const BlogPage = () => {
  return (
    <div className="blogContainer">
      <div className="blogsPost">
        <PostCard />
      </div>
      <div className="blogsPost">
        <PostCard />
      </div>
      <div className="blogsPost">
        <PostCard />
      </div>
      <div className="blogsPost">
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
