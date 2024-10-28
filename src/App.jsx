import './App.css'
import { useState, useReducer, useRef, createContext ,useEffect } from 'react'
import { Routes, Route,useNavigate, Link } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Unknown from './pages/Unknown'
import Edit from './pages/Edit'
import Button  from './component/Button'


function reducer(state,action){
  let nextState = []
  switch(action.type){
    //로컬 스토리지에서 불러오기
    case "INIT":
      return action.data
     
    //일기 생성
    case "CREATE":
      nextState = [ action.data ,...state];
      break;
    case "UPDATE":
      nextState = state.map(item => String(item.id) === String(action.data.id) ? action.data:item);
      break;
    case "DELETE":
      nextState = state.filter( 
        item => String(item.id) !== String(action.data.id));
        break;
    default:
      return state;
      
    
  }
  
  localStorage.setItem("diary", JSON.stringify(nextState))
  return nextState;
   
}

export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()

function App() {

  //1. Home : 모든 일기를 조회하는 Home 페이지 
  //2. New : 새로운 일기를 작성하는 New 페이지
  //3. Diary: 일기의 상세 내역을 보여주는 Diary 페이지
  //4. Edit : 일기를 수정하는 Edit 페이지 
  
  const [isLoading, setIsLoading] = useState(true)
  const [state ,dispatch] = useReducer(reducer , [])
  const idRef = useRef(0)

  const onCreate = (createdDate, emotionId, content)=>{
    dispatch({
      type:"CREATE",
      data :{
        id: idRef.current,
        createdDate,
        emotionId ,
        content
      }
    })
    idRef.current += 1;
  }
  const onUpdate = (id, createdDate, emotionId, content) =>{
    dispatch({
      type:"UPDATE",
      data:{
        id,
        createdDate,
        emotionId,
        content
      }
      
    })
  }
  const onDelete = (id) =>{
    dispatch({
      type:"DELETE",
      data:{
        id:id
      }
    })
  }
  
  useEffect(()=>{
    const storedData = localStorage.getItem("diary")
    if(!storedData){
      setIsLoading(false)
      return;
    }
      
    const parsedData = JSON.parse(storedData)
    if(!Array.isArray(parsedData)){
      setIsLoading(false)
      return;
    }
      

    let maxId = 0;
    parsedData.forEach((item)=> {
      if(item.id > maxId)
        maxId = item.id
    })
    idRef.current = maxId + 1;
  
    dispatch({
      type:"INIT",
      data: parsedData
    })
    setIsLoading(false)

  },[])
    
  
  return (
    <>

    <DiaryStateContext.Provider value = {state}>
      <DiaryDispatchContext.Provider
      value = {{onCreate,onUpdate,onDelete}}>
        <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/diary/:id' element={<Diary/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='*' element={<Unknown/>}/> 
      </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    
    </>
    
  )
}

export default App
