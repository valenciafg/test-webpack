import _ from 'lodash';
import './styles/main.css';
import Icon from './images/amores.jpg';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  console.log('hola, vamos por mas!!');
  return element;
}

document.body.appendChild(component());
