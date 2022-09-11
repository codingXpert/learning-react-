 import React from 'react'   //no need to write this after the react version 17.0

const App = () => {
  return (
    <>
    <h1> Welcome to my page </h1>
    <p>Paging</p>
    </>
    
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
