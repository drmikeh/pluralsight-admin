import React from 'react';
import { mount, shallow } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';

describe('CourseFormPage', () => {
  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  };

  it('sets an error message when trying to save with empty title', () => {
    const props = {
      authors: [],
      course: course,
      actions: { saveCourse: () => { return Promise.resolve(); }},
      history: {}
    };
    const wrapper = mount(
      <ManageCoursePage {...props} />
    );
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toEqual('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
