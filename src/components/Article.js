import React from "react";

function addCoffee(minutes) {
    let icons = ""
    if (minutes < 30){
        for (let i = minutes; i > 0; i = i - 5){
            icons += "☕️"
            console.log(icons)
        }
        return icons;
    }
    else if (minutes >= 30){
        for (let i = minutes; i > 0; i = i - 10){
            icons += "🍱"
        }
        return icons;
    }
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
//   console.log(about, image);
    return (
    <div className="article">
       <article>
           <h3>{title}</h3>
           <small>{date}</small>
           <p>{preview} - {addCoffee(minutes)} {minutes} min read</p>
       </article>
    </div>
  );
}

export default Article;