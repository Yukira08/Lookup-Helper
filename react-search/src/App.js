import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import { HashRouter  as Router, Switch, Route } from "react-router-dom";
import Tutorials from "./pages/Tutorials";
import TutorialDetail from "./pages/TutorialDetail";
import Resources from "./pages/Resources";
import SearchPaper from "./pages/SearchPaper";
import Tools from "./pages/Tools";
import AuthForm from "./components/auth/AuthForm";
import { useState } from "react";
import Databases from "./pages/Resources";

function App() {
  const [authIsShown, setAuthIsShown] = useState(false);

  const showAuthHandler = () => {
    setAuthIsShown(true);
  };

  const hideAuthHandler = () => {
    setAuthIsShown(false);
  };
  return (
    <Router>
      <Sidebar onShowAuth={showAuthHandler}/>
        {authIsShown && <AuthForm onClose={hideAuthHandler} />}
        <Switch>
          <Route path="/" exact component={SearchPaper}/>
          <Route path="/tutorials" exact component={Tutorials} />
          <Route path="/tutorials/:tutorialId" component={TutorialDetail}/>
          <Route path="/resources/databases" exact component={Databases} />
          <Route path="/resources/tools" exact component={Tools} />
          <Route path="/searchpaper" exact component={SearchPaper} />
        </Switch>
    </Router>
  );
}

export default App;

// our-domain.com/ => Main Page
// our-domain.com/tutorials => List of Tutorials
//
