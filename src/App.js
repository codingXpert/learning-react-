// import React from 'react'   //no need to write this after the react version 17.0

import React from "react"

const App = () => {
  return (
    <div>
    <h1> Welcome to my page </h1>
    </div>
    <p>Paging</p>
  );
};


//how react is actually looking the above code
// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1" , {} , "Welcome to my page")
//   );
// };

export default App
