 import React from 'react'   //no need to write this after the react version 17.0

const App = () => {
  return (
    <React.Fragment>
    <h1> Welcome to my page </h1>
    <p>Paging</p>
    </React.Fragment>
    
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
