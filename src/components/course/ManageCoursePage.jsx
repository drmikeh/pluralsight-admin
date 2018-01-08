import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from '../common/toastr';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { authorsFormattedForDropdown } from '../../selectors/selectors';

export class ManageCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({ course: Object.assign({}, nextProps.course) });
    }
  }

  updateCourseState = (event) => {
    const field = event.target.name;
    const course = this.state.course;
    course[field] = event.target.value;
    console.log('updated course field', field, 'with value', course[field]);
    return this.setState({ course });
  }

  courseFormIsValid() {
    const [formIsValid, errors] = this.state.course.title.length < 5 ?
      [false, { title: 'Title must be at least 5 characters.' }] :
      [true, {}];
    this.setState({ errors });
    return formIsValid;
  }

  saveCourse = (event) => {
    event.preventDefault();
    if (!this.courseFormIsValid()) {
      return;
    }
    this.setState({ saving: true });
    this.props.actions.saveCourse(this.state.course)
    .then(() => this.redirect())
    .catch((err) => {
      toastr.error(err);
      this.setState({ saving: false });
    });
  }

  redirect = () => {
    this.setState({ saving: false });
    toastr.success('Course saved');
    this.props.history.push('/courses');
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function getCourseById(courses, id) {
  const found = courses.filter(course => course.id === id);
  return found.length > 0 ? found[0] : null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.match.params.id;       // from the path /course/:id
  let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  return {
    course,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
