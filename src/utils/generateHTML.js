export default (componentName) => {
  const componentHTML = document.querySelector(`.${componentName}`).outerHTML;

  fetch('http://localhost:5000', {
    method: 'POST', body: JSON.stringify({ componentName, componentHTML })
  })
}