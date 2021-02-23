import React from 'react'

//styles
import styled from 'styled-components'
const ButtonStyled = styled.button`
  
`

const Button = ({ children, ...restProps }) => {
  return (
    <ButtonStyled {...restProps}>
      {children}
    </ButtonStyled>
  )
}

export default Button