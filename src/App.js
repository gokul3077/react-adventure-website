import "./App.css";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        {/* <NavBar2 /> */}
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
