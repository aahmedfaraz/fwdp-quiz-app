import React, { useContext } from 'react'
import Typography from '@mui/material/Typography';

// Import Context
import globalContext from '../context/global/globalContext';

const ScoreBoard = () => {
  const {score} = useContext(globalContext);

  return (
    <>
    <Typography variant="h4" gutterBottom>
        Your Score: {score}
      </Typography>
    </>
  )
}

export default ScoreBoard