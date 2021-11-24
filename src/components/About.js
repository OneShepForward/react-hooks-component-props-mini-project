import React from "react";

function About({ about, image = "https://via.placeholder.com/215" }) {
//   console.log(about, image);
    return (
    <div className="about">
       <aside> 
            <img
                src={image}
                alt="blog logo"
            />
            <p>{about}</p>
        </aside>      
    </div>
  );
}

export default About;