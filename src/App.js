import React from 'react'
import {Route , Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExerciseDetails from './pages/ExerciseDetails';
import './App.css'
import Footer from './components/Footer';

const App = () => {
  const apikey = process.env.API_KEY;
  return (
    
    <Box width="400px" sx={{width :{xl: '1488px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home apikey={apikey}/>} />
            {/* console.log(apikey); */}
            <Route path="/exercise/:id" element={<ExerciseDetails />} />
        </Routes>
        <Footer />     
    </Box>
  )
}

export default App