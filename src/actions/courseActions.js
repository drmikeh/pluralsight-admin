import CourseApi from '../api/mockCourseApi';
import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return CourseApi.getAllCourses().then((courses) => {
      dispatch(loadCoursesSuccess(courses));
    }).catch((err) => { throw (err); });
  };
}

export function saveCourse(course) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return CourseApi.saveCourse(course).then((savedCourse) => {
      if (course.id) {
        dispatch(updateCourseSuccess(savedCourse));
      } else {
        dispatch(createCourseSuccess(savedCourse));
      }
    }).catch((err) => {
      dispatch(ajaxCallError(err));
      throw (err);
    });
  };
}
