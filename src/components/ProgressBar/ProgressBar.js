import React from 'react'

//utils
import generateHTML from '../../utils/generateHTML'

//styles
import styled from 'styled-components'
const ProgressBarStyled = styled.div`
  
`

const ProgressBar = () => {

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      generateHTML('progress-bar');
    }
  }, [])

  return (
    <ProgressBarStyled className={`progress-bar`}>
      <progress max="100" value="50"></progress>
    </ProgressBarStyled>
  )
}

export default ProgressBar