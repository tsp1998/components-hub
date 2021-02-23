import React from 'react'

//components
import Button from './components/button/Button'
import Card from './components/card/Card'

const App = () => {

  return (
    <div id="btn">
      <Button style={{ color: 'red' }}>Hello</Button>
      <Card cardTitle="this is title" cardSubtitle="this is subtitle" />
    </div>
  )
}

export default App
