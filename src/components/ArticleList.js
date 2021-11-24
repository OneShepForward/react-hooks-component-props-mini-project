import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  console.log(posts);
// console.log({name})
    return (
    <div className="articleList">
        <main>
            {posts.map(post => 
                <Article 
                    title = {post.title}
                    date = {post.date}
                    preview = {post.preview}
                    key = {post.id}
                />
            )}
        </main>
    </div>
  );
}

export default ArticleList;