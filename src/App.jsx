import Router from "@/Router.jsx";
import React, { useState, useEffect } from "react";

export const DataContext = React.createContext();

const App = () => {
  // const [photo, setPhoto] = useState();
  // const [details, setDetails] = useState();

  // console.log(photo);

  return (
    // <DataContext.Provider
    //   value={{
    //     photo,
    //     setPhoto,
    //     details,
    //     setDetails,
    //   }}
    // >
    <Router />
    // </DataContext.Provider>
  );
};

export default App;
