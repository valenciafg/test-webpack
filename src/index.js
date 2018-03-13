import _ from 'lodash';
import './styles/main.css';
import Icon from './images/amores.jpg';

  function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    /*var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);*/
    console.log('hola');
    return element;
  }

  document.body.appendChild(component());