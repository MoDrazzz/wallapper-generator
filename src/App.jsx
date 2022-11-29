import Router from "@/Router.jsx";
import React, { useRef, useState } from "react";

export const OutputContext = React.createContext();
export const PhotoContext = React.createContext();

const App = () => {
  const outputRef = useRef();
  const [photo, setPhoto] = useState();

  return (
    <OutputContext.Provider value={outputRef}>
      <PhotoContext.Provider
        value={{
          photo,
          setPhoto,
        }}
      >
        <Router />
      </PhotoContext.Provider>
    </OutputContext.Provider>
  );
};

export default App;
