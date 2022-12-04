import React, {useContext} from 'react'
import './App.css';

// Import MUI Elements
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

// Import Components
import Navbar from './components/Navbar';
import ScoreBoard from './components/ScoreBoard';
import QuestionCard from './components/QuestionCard';
import Navigation from './components/Navigation';
import Spinner from './components/common/Spinner';
import Alert from './components/common/Alert';

// Import Context
import globalContext from './context/global/globalContext';

const App = () => {
  const { startQuiz, allQuestions, loading } = useContext(globalContext);
  
  return (
    <>
    <Navbar />
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#f7f7f7', height: 'auto', padding: '10px', marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          {
            allQuestions.length === 0 ? (
              <Button color='secondary' variant="contained" onClick={startQuiz}>Start Quiz</Button>
            ) : (
              <>
              <ScoreBoard />
              <QuestionCard />
              <Navigation />
              </>
            )
          }
          <Alert />
          {
            loading && <Spinner />
          }
        </Box>
      </Container>
    </>
  )
}

export default App