import React from 'react'

//utils
import generateHTML from '../../utils/generateHTML'

//styles
import styled from 'styled-components'
const ButtonStyled = styled.button`
  
`

const Button = ({ className = '', children, ...restProps }) => {

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      generateHTML('button');
    }
  }, [])

  return (
    <ButtonStyled className={`button ${className}`} {...restProps}>
      {children}
    </ButtonStyled>
  )
}

export default Button