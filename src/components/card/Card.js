import React from 'react'

//assets
import flowerImage from '../../assets/flower.jpg'

//utils
import generateHTML from '../../utils/generateHTML'

//styles
import './Card.scss';
import styled from 'styled-components'
const CardStyled = styled.div``
const CardHeader = styled.div``
const CardImage = styled.img``
const CardBody = styled.div``
const CardTitle = styled.span``
const CardSubTitle = styled.span``

const Card = ({
  className, children, CardHeaderChildren,
  cardImageData, cardTitle, cardSubtitle,
  ...restProps
}) => {
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      generateHTML('card');
    }
  }, [])

  return (
    <CardStyled className={`card ${className}`} {...restProps}>
      <CardHeader className="card-header">
        <CardImage className="card-image" src={cardImageData.src} alt={cardImageData.alt || cardTitle} />
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

Card.defaultProps = {
  className: '',
  cardImageData: {
    src: flowerImage,
    alt: 'Card Image'
  },
  cardTitle: '',
  cardSubtitle: '',
}

export default Card