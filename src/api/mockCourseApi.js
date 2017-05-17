import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "react-intro",
    title: "Building Modern SPA Applications with ReactJS",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "shane-barringer",
    length: "4 days",
    category: "SPA Frameworks"
  },
  {
    id: "restful-apis-with-express",
    title: "Building RESTful APIs with NodeJS and Express",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "mike-hopper",
    length: "4 days",
    category: "Server Side Development",
    tags: 'javascript, server, nodejs'
  },
  {
    id: "angular-intro",
    title: "Introduction to Angular 2 (no, make that 4)",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "brandon-kearns",
    length: "3 days",
    category: "SPA Frameworks"
  },
  {
    id: "react-advanced",
    title: "Advanced React",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "shane-barringer",
    length: "3 days",
    category: "SPA Frameworks"
  },
  {
    id: "javascript-intro",
    title: "Introduction to JavaScript",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "brandon-kearns",
    length: "3 days",
    category: "javascript"
  },
  {
    id: "javascript-advanced",
    title: "Advanced JavaScript",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "mike-hopper",
    length: "3 days",
    category: "javascript"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id === course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          return course.id === courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
