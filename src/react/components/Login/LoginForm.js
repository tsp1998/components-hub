import React, { useState } from 'react'
import * as LoginFormStyles from './LoginForm.styles'

import avatarImage from './images/avatar.svg'

export const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const usernameChangeHandler = (username) => setUsername(username)
  const passwordChangeHandler = (password) => setPassword(password)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`You Entered ${username} and ${password}`)
  }

  return (
    <LoginFormStyles.LoginFormContainer onSubmit={handleSubmit}>
      <LoginFormStyles.AvatarImage src={avatarImage} />
      <LoginFormStyles.FormHeading>Welcome</LoginFormStyles.FormHeading>
      <LoginFormStyles.FormGroup className="one">
        <LoginFormStyles.IconContainer>
          <LoginFormStyles.Icon className="fas fa-user"></LoginFormStyles.Icon>
        </LoginFormStyles.IconContainer>
        <div>
          <LoginFormStyles.Input
            placeholder="Username"
            type="text"
            value={username}
            onChange={event => usernameChangeHandler(event.target.value)}
          />
        </div>
      </LoginFormStyles.FormGroup>
      <LoginFormStyles.FormGroup className="pass">
        <LoginFormStyles.IconContainer>
          <LoginFormStyles.Icon className="fas fa-user"></LoginFormStyles.Icon>
        </LoginFormStyles.IconContainer>
        <div>
          <LoginFormStyles.Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={event => passwordChangeHandler(event.target.value)}
          />
        </div>
      </LoginFormStyles.FormGroup>
      <LoginFormStyles.Button type="submit">Login</LoginFormStyles.Button>
      <LoginFormStyles.Button type="button">Sign Up</LoginFormStyles.Button>
    </LoginFormStyles.LoginFormContainer>
  )
}

export default Login