import React from 'react'
import Alert from '@mui/material/Alert';

const AlertComponent = () => {
  return (
    <Alert variant="filled" sx={{ width: '100%' }} severity="error">
      This is an error alert — check it out!
    </Alert>
  )
}

export default AlertComponent;