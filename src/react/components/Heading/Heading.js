import React from 'react'
// import './Heading.css'

//utils
import generateHTML from '../../../utils/generateHTML'

const Heading = (props) => {

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      generateHTML('heading');
    }
  }, [])

  return (
    <div className="heading">
      {props.children}
    </div>
  )
}

export default Heading
