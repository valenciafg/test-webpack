
import React from 'react';
import _ from 'lodash';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.css';
import Main from './components/Main';
import './styles/main.css';
import Icon from './images/amores.jpg';

render(<Main />, document.getElementById('app'));


function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  console.log('hola, vamos por mas!!');
  console.log(`Looks like we are in ${process.env.NODE_ENV} mode!`);
  return element;
}

document.body.appendChild(component());
