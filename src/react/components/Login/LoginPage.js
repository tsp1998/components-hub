import React from 'react'
import {
  ImageContainer, LoginContent, LoginPageContainer, WaveImage
} from './LoginPage.styles'

import LoginForm from './LoginForm'

import backgroundImage from './images/background.svg'
import waveImage from './images/wave.png'

const LoginPage = () => {
  return (
    <LoginPageContainer className="auth-page">
      <WaveImage className="wave" src={waveImage} />
      <div className="container">
        <ImageContainer className="img">
          <img src={backgroundImage} />
        </ImageContainer>
        <LoginContent className="login-content">
          <LoginForm />
        </LoginContent>
      </div>
    </LoginPageContainer>
  )
}

export default LoginPage