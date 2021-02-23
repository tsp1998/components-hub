import React from 'react'

//styles
import styled from 'styled-components'
const CardStyled = styled.div``
const CardHeader = styled.div``
const CardImage = styled.div``
const CardBody = styled.div``
const CardTitle = styled.div``
const CardSubTitle = styled.div``

const Card = ({
  className = '', children, CardHeaderChildren,
  cardImageData, cardTitle = '', cardSubtitle = '',
  ...restProps
}) => {

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const componentName = 'card';
      const componentHTML = document.querySelector(`.${componentName}`).outerHTML;
      console.log('{ componentName, componentHTML }', { componentName, componentHTML })
      
      fetch('http://localhost:5000', {
        method: 'POST', body: JSON.stringify({ componentName, componentHTML })
      })
    }
  }, [])

  return (
    <CardStyled className={`card ${className}`} {...restProps}>
      <CardHeader className="card-header">
        {cardImageData && <CardImage className="card-image" src={cardImageData.src} alt={cardImageData.alt || cardTitle} />}
        {CardHeaderChildren && CardHeaderChildren}
      </CardHeader>
      <CardBody className="card-body">
        <CardTitle className="card-title">{cardTitle}</CardTitle>
        <CardSubTitle className="card-subtitle">{cardSubtitle}</CardSubTitle>
        {children && children}
      </CardBody>
    </CardStyled>
  )
}

export default Card