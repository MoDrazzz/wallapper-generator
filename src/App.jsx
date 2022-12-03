import { DataProvider } from "@/components/DataProvider";
import Router from "@/Router.jsx";

const App = () => {
  return (
    <DataProvider>
      <Router />
    </DataProvider>
  );
};

export default App;
