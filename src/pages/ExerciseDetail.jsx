import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData,youtubeOptions } from '../utils/fetchData'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail]=useState({})
  const [exerciseVideos,setExerciseVideos]=useState([])
  const [targetMuscleExercises,settargetMuscleExercises]=useState([])
  const [equipmentExercises,setequipmentExercises]=useState([])
  const {id}=useParams()
  useEffect(()=>{
    const fetchExercisesData=async()=>{
      const exerciseDetailData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,exerciseOptions)
      const exerciseVideosData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name} exercise`,youtubeOptions);
      const targetMuscleExercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
      const equipmentExercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData)
      setExerciseVideos(exerciseVideosData.contents)
      settargetMuscleExercises(targetMuscleExercisesData)
      setequipmentExercises(equipmentExercisesData)

    }
    fetchExercisesData()
  },[id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail