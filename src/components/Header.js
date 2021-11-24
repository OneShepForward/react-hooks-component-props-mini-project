import React from "react";

function Header({ name }) {
//   console.log(props);
// console.log({name})
    return (
    <div className="header">
        <header>
            <h1>{name}</h1>
        </header>
    </div>
  );
}

export default Header;