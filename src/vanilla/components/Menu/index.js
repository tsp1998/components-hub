const Menu = document.createElement('div')

import('./index.html').then(htmlModule => {

  function getHTML(props = {}) {
    let newHTML = htmlModule.default;
    
    Object.keys(props).forEach(propKey => {
      newHTML = newHTML.replace("${" + propKey + "}", props[propKey]);
    })

    return newHTML;
  }

  Menu.innerHTML = getHTML();
})

export default Menu;