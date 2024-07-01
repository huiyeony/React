import { useParams, useNavigate } from "react-router-dom"
import Header from "../component/Header"
import Viewer from "../component/Viewer"
import Button from "../component/Button"
import useDiary  from '../hooks/useDiary'
import getStringDate from "../util/get-string-date"
const Diary = ()=>{
    const nav = useNavigate()
    const params = useParams()

    const curDiaryItem = useDiary(params.id)
    if(!curDiaryItem)
        return <div>데이터를 로드하고 있습니다!</div>

    
    const {createdDate, emotionId, content} = curDiaryItem;
   
    
    return <div>
        <Header
        center={`${getStringDate(new Date(createdDate))} 일기`}
        leftChild={<Button 
            text= "<뒤로가기"
            onClick = {()=>{
            nav(-1)
        }}/>}
        rightChild={<Button 
            text="수정하기"
            onClick={()=>{
                nav(`/edit/${params.id}`)
            }}/>}/>
        <Viewer emotionId={emotionId} content={content}/>
    </div>
}
export default Diary