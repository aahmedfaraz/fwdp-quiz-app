import React, { useState, useContext, useEffect} from 'react';

// Import MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

// Import Context
import globalContext from '../context/global/globalContext';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function QuestionCard() {
  const { allQuestions, currentQuestion, incrementScore } = useContext(globalContext);
  const {category,correctAnswer,options,question} = allQuestions[currentQuestion];

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  useEffect(() => {
    setSelectedAnswer(null)
  }, [currentQuestion])

  const checkAnswer = (givenAnswer) => {
    if(!selectedAnswer) {
      if(givenAnswer === correctAnswer) {
        incrementScore();
      }      
      setSelectedAnswer(givenAnswer);
    }
  }

  return (
    <Card sx={{ minWidth: 275, width: '100%' }}>
      <CardContent>
        <Chip label={category} color="primary" />
        <Typography sx={{ fontSize: 14, marginTop: '10px' }} color="text.secondary" gutterBottom>
          {currentQuestion + 1}. Question
        </Typography>
        <Typography variant="h5" component="div">
          {bull} {question}
        </Typography>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        fullWidth
      >
        {
          options.map(opt => <Button color={`${opt === correctAnswer && selectedAnswer !== null ? 'success' : selectedAnswer === opt ? 'error' : 'primary'}`} key={opt} onClick={() => checkAnswer(opt)}>{opt}</Button>)
        }
      </ButtonGroup>
      </CardContent>
    </Card>
  );
}