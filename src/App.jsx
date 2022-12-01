import Router from "@/Router.jsx";
import { DataProvider } from "@/components/DataProvider";
import React, { useState, useEffect } from "react";

const App = () => {
  return (
    <DataProvider>
      <Router />
    </DataProvider>
  );
};

export default App;
