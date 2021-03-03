const component = document.createElement('div')

import('./index.html').then(htmlModule => {

  function getHTML(props = {}) {
    let newHTML = htmlModule.default;
    
    Object.keys(props).forEach(propKey => {
      newHTML = newHTML.replace("${" + propKey + "}", props[propKey]);
    })

    return newHTML;
  }

  component.innerHTML = getHTML();
}).catch(err => console.log('err', err))

export default component;