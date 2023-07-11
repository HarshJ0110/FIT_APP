import React, {useState, useEffect}  from 'react'
import Pagination from '@mui/material/Pagination'
import {Box ,Typography, Stack} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
//import BodyParts from './BodyParts'


const Exercise = ({bodyPart , exercise, setExercise}) => {
  

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions); 
      }
      setExercise(exercisesData);
    };
    fetchExercisesData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyPart]);
 
  const [currentPage , setCurrentPage] = useState(1);
  const exercisePerPage = 9;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercise = exercise.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate = (e,value) => {
    setCurrentPage(value)
    window.scrollTo({top:1800 , behavior: 'smooth'})
  } 

 
  return (
    <Box id="exercise"
    sx={{mt: {lg: "110px"}}}
    mt="50px"
    p="20px"
    >
      <Typography variant='h3' mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap : {lg : "110px", xs : "50px"}}} flexWrap="wrap" justifyContent="center">
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}
          />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
      {exercise.length > 9 &&  (
        <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercise.length/exercisePerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
        ></Pagination>
      )}

    </Stack>
    </Box>
  )
}

export default Exercise