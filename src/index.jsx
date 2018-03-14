
import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import 'semantic-ui-css/semantic.css';
import Main from './components/Main';
import './styles/main.css';
import Icon from './images/amores.jpg';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  )
}
console.log('asdas');
render(Main)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Main', () => {
    // if you are using harmony modules ({modules:false})
    render(Main)
    // in all other cases - re-require App manually
    render(require('./components/Main'))
  })
}

/*
if(process.env.NODE_ENV === 'production'){}
  render(<Main />, document.getElementById('app'));
}else{
  const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root'),
    )
  }
  
  render(App)
}
*/
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
