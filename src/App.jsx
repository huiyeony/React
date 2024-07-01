import './App.css'
import { useReducer, useRef, createContext } from 'react'
import { Routes, Route,useNavigate, Link } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Unknown from './pages/Unknown'
import Edit from './pages/Edit'
import Button  from './component/Button'


function reducer(state,action){
  switch(action.type){
    //일기 생성
    case "CREATE":
      return [ action.data ,...state];
    case "UPDATE":
      return state.map(item => String(item.id) === String(action.data.id) ? action.data:item);
    case "DELETE":
      return state.filter( 
        item => String(item.id) !== String(action.data.id));
    default:
      throw Error('Unknown action: ' + action.type);
  }
   
}
const mockData =[
  {
    id:1,
    createdDate : new Date("2024-07-26").getTime(),
    emotionId:1,
    content:"1번째 일기장"
  },
  {
    id:2,
    createdDate : new Date("2024-07-27").getTime(),
    emotionId:2,
    content:"2번째 일기장"
  },
  {
    id:3,
    createdDate : new Date("2024-06-26").getTime(),
    emotionId:3,
    content:"3번째 일기장"
  },
]
export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()

function App() {

  //1. Home : 모든 일기를 조회하는 Home 페이지 
  //2. New : 새로운 일기를 작성하는 New 페이지
  //3. Diary: 일기의 상세 내역을 보여주는 Diary 페이지
  //4. Edit : 일기를 수정하는 Edit 페이지 
  
  const [state ,dispatch] = useReducer(reducer , mockData)
  const idRef = useRef(4)

  const onCreate = (createdTime, emotionId, content)=>{
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
