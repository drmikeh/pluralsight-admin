import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './common/Header';
import HomePage from './home/HomePage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage';
import AboutPage from './about/AboutPage';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header/>
        <Route exact path="/" component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:id" component={ManageCoursePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    );
  }
}

export default App;
