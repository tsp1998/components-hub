const Card = document.createElement('div')
import flowerImage from '../../../assets/flower.jpg'

import('./index.html').then(htmlModule => {

  function getHTML(props = {}) {
    let newHTML = htmlModule.default;
    
    Object.keys(props).forEach(propKey => {
      newHTML = newHTML.replace("${" + propKey + "}", props[propKey]);
    })

    return newHTML;
  }

  Card.innerHTML = getHTML({ cardImage: flowerImage });
})

export default Card;