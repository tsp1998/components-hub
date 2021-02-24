import React from 'react'

//components
import Button from './components/button/Button'
import Card from './components/card/Card'
import Heading from './components/Heading/Heading'

const App = () => {

  return (
    <div id="btn">
      <Button style={{ color: 'red' }}>Hello</Button>
      <Card cardTitle="this is title" cardSubtitle="this is subtitle" />
      <Heading>
        <div>Shubham</div>
        <div>Tandale</div>
      </Heading>
    </div>
  )
}

export default App
