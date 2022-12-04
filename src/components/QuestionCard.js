import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function QuestionCard() {
  return (
    <Card sx={{ minWidth: 275, width: '100%' }}>
      <CardContent>
        <Chip label="General Knowledge" color="primary" />
        <Typography sx={{ fontSize: 14, marginTop: '10px' }} color="text.secondary" gutterBottom>
          Question
        </Typography>
        <Typography variant="h5" component="div">
          {bull} This is dummy question?
        </Typography>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        fullWidth
      >
        {
          [
            <Button color='success' key="one">One</Button>,
            <Button key="two">Two</Button>,
            <Button color='error' key="three">Three</Button>,
            <Button key="four">Four</Button>,
          ]
        }
      </ButtonGroup>
      </CardContent>
    </Card>
  );
}