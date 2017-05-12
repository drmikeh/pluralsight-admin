import React from 'react';

/* We use a class instead of a (stateless) function due to current
** limitations with Hot Reloading where all stateless components need
** to be nested inside a container component.
**/
class AboutPage extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <hr/>
        <h3>This application uses the following technologies:</h3>
        <div className="technologies">
          <button className="btn btn-primary btn-block">React</button>
          <button className="btn btn-primary btn-block">Redux</button>
          <button className="btn btn-primary btn-block">React Router</button>
          <button className="btn btn-primary btn-block">Twitter Bootstrap</button>
          <button className="btn btn-primary btn-block">WebPack</button>
          <button className="btn btn-primary btn-block">Babel</button>
        </div>
      </div>
    );
  }
}

export default AboutPage;
