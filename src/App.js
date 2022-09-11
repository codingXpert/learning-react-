 import React from 'react'   //no need to write this after the react version 17.0

const App = () => {
  return (
    <>
    <h1 className='myClass'> Welcome to my page </h1>
    <p>Paging</p>
    {/* <img src = "" alt = ""> </img> */}
    <MyName/>
    </>
    
  );
};

const MyName = () => {
  return (
    
    <h1>My Name is Vinod</h1>
    
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

