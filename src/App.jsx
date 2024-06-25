
import './App.css'
import { Routes, Route,useNavigate, Link } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Unknown from './pages/Unknown'

function App() {

  //1. Home : 모든 일기를 조회하는 Home 페이지 
  //2. New : 새로운 일기를 작성하는 New 페이지
  //3. Diary: 일기의 상세 내역을 보여주는 Diary 페이지
  const nav = useNavigate()
  const onClickNav = () =>{
    nav('/new')
  }
  return (
    <>
    <Link to={"/"}>Home페이지</Link>
    <Link to={"/new"}>New페이지</Link>
    <Link to={"/diary/1"}>Diary페이지</Link>
    <button onClick={onClickNav}>페이지 이동</button>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/diary/:id' element={<Diary/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='*' element={<Unknown/>}/> 
    </Routes>
    </>
    
  )
}

export default App
