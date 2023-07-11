import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExercise = ({bodyPart, setBodyPart, setExercise}) => {
  
  const [search ,setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState(['']);

  useEffect(() => {
    const fetchExercisesData = async ()=> {
    const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions);
    setBodyParts(['all', ...bodyPartsData]);
    
    }
    //Calling fetchExercisesData function
    fetchExercisesData(); 
  },[])

  const handleSearch = async () =>{
    if(search){
      const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises",exerciseOptions);
      const searchedExercise = exerciseData.filter(
      (exercise) => exercise.name.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)
      )
  
      setSearch("");
      setExercise(searchedExercise);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

    }
  } 
  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs:'30px'}}} 
      mb="50px" textAlign="center"
      >
        Awesome Exercise You <br/> Should Know
      </Typography>
      <Box position="relative" mb="72px">
      <TextField
          sx={{input: {fontWeight: "700px", borderRadius: "4px"},
          width: {lg: "800px", xs: '350px'}, 
          backgroundColor: "#fff",
          borderRadius: "40px"
          }}
          height="76px"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value.toLowerCase())
          }}
          placeholder="Search Exercise"
          type="text"
        />
        <Button className='search-btn'
         sx={{
          bgcolor:"#FF2625",
          color:"#fff",
          texttranforms: "none",
          width: {lg: "175px", xs: "80px"},
          fontSize:{lg: "20px", xs: "14px"},
          height: "56px",
          position: "absolute",
          right: "0"      
         }}
         onClick={handleSearch}
        >Search</Button>
      </Box>
      <Box sx={{ position: 'realtive', width: '100%', p: '20px' }}>
         <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts={true}/>
      </Box>
    </Stack>
  )
}

export default SearchExercise