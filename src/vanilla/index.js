// const component = 'Card';
const component = 'Button';

import(`./components/${component}`).then(componentModule => {
  let component = componentModule.default;
  const rootElement = document.getElementById('root')
  rootElement.appendChild(component);
})