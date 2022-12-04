import React, {useState} from 'react'
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

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const start = () => setQuizStarted(true);
  
  return (
    <>
    <Navbar />
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#f7f7f7', height: 'auto', padding: '10px', marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          {
            !quizStarted ? (
              <Button color='secondary' variant="contained" onClick={start}>Start Quiz</Button>
            ) : (
              <>
              <ScoreBoard />
              <QuestionCard />
              <Navigation />
              </>
            )
          }
          {/* <Alert />
          <Spinner /> */}
        </Box>
      </Container>
    </>
  )
}

export default App