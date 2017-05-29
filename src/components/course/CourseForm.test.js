import React from 'react';
import ReactDOM from 'react-dom';
import CourseForm from './CourseForm';
import { shallow, mount, render } from 'enzyme';

function getWrapper(saving) {
  const props = {
    course: {
      id: '',
      watchHref: '',
      title: '',
      authorId: '',
      length: '',
      category: ''
    },
    allAuthors: [],
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  return shallow(<CourseForm {...props} />);
}

describe('CourseForm', () => {
  const wrapper = getWrapper(false);
  const savingWrapper = getWrapper(true);

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
  it('contains an h1', () => {
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });
  it('contains a form', () => {
    expect(wrapper.find('form').length).toBe(1);
  });
  it('has a save button is labeled "Save" when not saving', () => {
    expect(wrapper.find('input').props().value).toBe('Save');
  });
  it('has a save button is labeled "Saving..." when saving', () => {
    expect(savingWrapper.find('input').props().value).toBe('Saving...');
  });
});
