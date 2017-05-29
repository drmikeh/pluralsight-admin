import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    //arrange
    const initialState = [
      { title: 'A' },
      { title: 'B' }
    ];
    const newCourse = { title: 'C' };
    const action = actions.createCourseSuccess(newCourse);

    //act
    const newState = courseReducer(initialState, action);

    //assert
    expect(newState.length).toBe(3);
    expect(newState[0].title).toBe('A');
    expect(newState[1].title).toBe('B');
    expect(newState[2].title).toBe('C');
  });
  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    //arrange
    const initialState = [
      { id: 'A', title: 'A' },
      { id: 'B', title: 'B' },
      { id: 'C', title: 'C' }
    ];
    const course = { id: 'B', title: 'New Title' };
    const action = actions.updateCourseSuccess(course);

    //act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(c => c.id === course.id);
    const untouchedCourse = newState.find(c => c.id === 'A');

    //assert
    expect(newState.length).toBe(3);
    expect(updatedCourse.title).toBe('New Title');
    expect(untouchedCourse.title).toBe('A');
  });
});
