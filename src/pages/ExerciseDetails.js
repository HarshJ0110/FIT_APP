import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideo from '../components/ExerciseVideo'
import SimilarExercise from '../components/SimilarExercise' 
import {fetchData, exerciseOptions, ytOptions } from '../utils/fetchData'


const ExerciseDetails = () => {
  const [exerciseDetail , setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises , setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {

      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, ytOptions)
      setExerciseVideos(exerciseVideosData.contents);
      

      const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExerciseData);
      console.log(targetMuscleExercises)

      const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExerciseData);
      console.log(equipmentExercises)     
    } 
    
    
    
    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail= {exerciseDetail}/>
      <ExerciseVideo  name={exerciseDetail.name} exerciseVideos={exerciseVideos}/>
      <SimilarExercise targetMuscleExercise={targetMuscleExercises} equipmentExercise={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetails