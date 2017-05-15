import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: { title: '' }
    };
  }

  onTitleChange = (event) => {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState( {course: course } );
  }

  onClickSave = () => {
    this.props.dispatch(courseActions.createCourse(this.state.course));
    this.setState({
      course: { title: '' } 
    });
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses   // courses is one of our reducers in our rootReducer
  };
}

export default connect(mapStateToProps)(CoursesPage);
