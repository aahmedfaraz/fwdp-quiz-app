import React, {useContext} from 'react'
import Alert from '@mui/material/Alert';
// Import Context
import globalContext from '../../context/global/globalContext';

const AlertComponent = () => {
  const { error } = useContext(globalContext);
  return (
    <>
    {
      error &&
      <Alert variant="filled" sx={{ width: '100%' }} severity="error">
        {error}
      </Alert>
    }
    </>
  )
}

export default AlertComponent;