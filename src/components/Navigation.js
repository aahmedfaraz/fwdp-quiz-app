import React, {useContext} from 'react'
import Button from '@mui/material/Button';

// Import Context
import globalContext from '../context/global/globalContext';

const Navigation = () => {
  const { currentQuestion, moveToNextQuestion } = useContext(globalContext);
  return (
    <div style={{width: '100%', display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
      <Button variant="contained" onClick={moveToNextQuestion}>{currentQuestion < 9 ? 'NEXT' : 'END QUIZ'}</Button>
    </div>
  )
}

export default Navigation