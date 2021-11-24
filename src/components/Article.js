import React from "react";

function Article({ title, date = "January 1, 1970", preview }) {
//   console.log(about, image);
    return (
    <div className="article">
       <article>
           <h3>{title}</h3>
           <small>{date}</small>
           <p>{preview}</p>
       </article>
    </div>
  );
}

export default Article;