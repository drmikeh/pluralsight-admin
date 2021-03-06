import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({ loading }) => (
  <nav>
    <NavLink to="/">Home</NavLink>
    {' | '}
    <NavLink to="/courses">Courses</NavLink>
    {' | '}
    <NavLink to="/about">About</NavLink>
    {loading && <LoadingDots interval={100} dots={10} />}
  </nav>
);

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
