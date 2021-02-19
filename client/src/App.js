import './App.css';
import { useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Link} from "react-router-dom";
import {Container, Button} from "semantic-ui-react";
import HeaderContainer from "./containers/HeaderContainer";
import RecommendationsContainer from './containers/RecommendationsContainer';
import SingleGameView from './components/SingleGameView';

function App() {

  return (
    <>
    <Router>
      <Container textAlign='center'>
      <Link to="/"><Button floated='left' size='large' circular icon='home'/></Link>
        <h1>Board Game Recommendations... for YOU! </h1>
        {/* <HeaderContainer /> */}
          <Switch>
            <Route exact path="/" component={RecommendationsContainer} />
            <Route path="/single-game" component={SingleGameView} />
          </Switch>
      </Container>
      </Router>
    </>
  );
}

export default App;
