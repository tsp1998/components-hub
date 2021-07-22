// const component = 'Card';
const component = 'Header';

import(`./components/${component}`).then(componentModule => {
  let component = componentModule.default;
  const rootElement = document.getElementById('root')
  rootElement.appendChild(component);
})