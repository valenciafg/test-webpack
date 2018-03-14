import React from 'react';
import NavMenu from './NavMenu';
import Container from './Container';
/*
export default class Main extends Component {
  render() {
    return (
      <div>
        App Component is Rendered!!
      </div>
    );
  }
}
*/
const Main = () => (
  <div>
    <NavMenu />
    <Container />
    App Component is Rendered!!
  </div>
);

export default Main;
