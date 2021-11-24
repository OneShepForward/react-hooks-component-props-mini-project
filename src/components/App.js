import React from "react";
import blogData from "../data/blog";

import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!

      {/* Header component receives blogData  */}
      <Header name = {blogData.name} />

      {/* {/* About component receives image and about */}
      <About
        image = {blogData.image}
        about = {blogData.about}
      />

      {/* ArticleList component receives posts */}
      <ArticleList
        posts = {blogData.posts}
      />

    </div>
  );
}

export default App;
