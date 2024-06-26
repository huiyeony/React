
import './App.css'
import { useReducer } from 'react'
import { Routes, Route,useNavigate, Link } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Unknown from './pages/Unknown'
import Edit from './pages/Edit'
import Button  from './component/Button'
import Header from './component/Header'

const reducer = (state,action)=>{
  return state;
}

function App() {

  //1. Home : 모든 일기를 조회하는 Home 페이지 
  //2. New : 새로운 일기를 작성하는 New 페이지
  //3. Diary: 일기의 상세 내역을 보여주는 Diary 페이지
  //4. Edit : 일기를 수정하는 Edit 페이지 
  const mockData =[
    {
      id:1,
      createdDate:new Date().getTime(),
      emotionId:1,
      content:""
    },
    {
      id:2,
      createdDate:new Date().getTime(),
      emotionId:2,
      content:""
    },
  ]
  const [state,dispatch] = useReducer(reducer,mockData)
  return (
    <>
    
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/diary/:id' element={<Diary/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='*' element={<Unknown/>}/> 
    </Routes>
    </>
    
  )
}

export default App
