import React from 'react'

import GlobalStyles from './Global.styles'

//components
// import Button from './components/button/Button'
// import Card from './components/card/Card'
// import Heading from './components/Heading/Heading'
// import ProgressBar from './components/ProgressBar/ProgressBar'
// import Input from './components/Input/Input'
import LoginPage from './components/Login/LoginPage'

const App = () => {

  return (
    <div>
      <GlobalStyles />
      {/* <Button style={{ color: 'red' }}>Hello</Button>
      <Card cardTitle="this is title" cardSubtitle="this is subtitle" />
      <Heading>
        <div>Shubham</div>
        <div>Tandale</div>
      </Heading>
      <ProgressBar /> */}
      {/* <Input /> */}
      <LoginPage />
    </div>
  )
}

export default App
