import { Outlet } from "react-router-dom";
import Style from "./App.module.css";

function App() {
  return (
    <div className={Style.app}>
      <h1>GitHub Finder</h1>
      <Outlet />
    </div>
  );
}

export default App;
