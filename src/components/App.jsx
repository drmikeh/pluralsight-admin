import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './common/Header';
import HomePage from './home/HomePage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage';
import AboutPage from './about/AboutPage';

const App = () =>
  (
    <Router>
      <main className="App container-fluid">
        <Header loading={this.props.loading} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/courses-new" component={ManageCoursePage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/courses/:id" component={ManageCoursePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </main>
    </Router>
  );

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
