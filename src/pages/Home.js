import React, {useState} from 'react';
import {Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import Exercise from '../components/Exercise';
import SearchExercise from '../components/SearchExercise';

const Home = () => {
  
  const [exercise, setExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  
  return (

    <Box>
      <HeroBanner />
      <SearchExercise 
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercise={setExercise}
      />

      <Exercise 
        setExercise={setExercise}
        bodyPart={bodyPart}  
        exercise={exercise} 
      />
    </Box>
  )
}

export default Home