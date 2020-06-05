import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import MovieReal from "./component/MovieReal";
import MovieSch from "./component/MovieSch";
import BoxWeek from "./component/BoxWeek";
import BoxMonth from "./component/BoxMonth";
import BoxYear from "./component/BoxYear";
import News from "./component/News";

function App() {
  return (
      <Router>
        <Header />
        <div className="jumbotron">
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route path={"/movie_real"} component={MovieReal} />
                <Route path={"/movie_sch"} component={MovieSch} />
                <Route path={"/box_week"} component={BoxWeek} />
                <Route path={"/box_month"} component={BoxMonth}/>
                <Route path={"/box_year"} component={BoxYear} />
                <Route path={"/news"} component={News}/>
            </Switch>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
