import React from 'react'

//styles
import styled from 'styled-components'
const ButtonStyled = styled.button`
  
`

const Button = ({ className = '', children, ...restProps }) => {

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const componentName = 'button';
      const componentHTML = document.querySelector(`.${componentName}`).outerHTML;
      
      fetch('http://localhost:5000', {
        method: 'POST', body: JSON.stringify({ componentName, componentHTML })
      })
    }
  }, [])

  return (
    <ButtonStyled className={`button ${className}`} {...restProps}>
      {children}
    </ButtonStyled>
  )
}

export default Button