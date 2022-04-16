import Sidebar from "./components/Sidebar/Sidebar";
import Signup from "./components/Signup/Signup";
import {Redirect, Route, Switch} from "react-router";
import Blog from "./components/Blog/Blog";
import Admired from "./components/Admired/Admired";
import Niche from "./components/Niche/Niche";
import Talkathon from "./components/Talkathon/Talkathon";
import Contour from "./components/Contour/Contour";

function App() {
  return (
      <>
          <Switch>
              <Route exact path="/"> <Signup/> </Route>
              <Sidebar>
                  <Route path="/Blog"> <Blog/> </Route>
                  <Route path="/Admired"> <Admired/> </Route>
                  <Route path="/Niche"> <Niche/> </Route>
                  <Route path="/Talkathon"> <Talkathon/> </Route>
                  <Route path="/Contour"> <Contour/> </Route>
              </Sidebar>
              <Redirect to="/"/>
          </Switch>
      </>
  );
}

export default App;
