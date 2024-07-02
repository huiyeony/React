import { useNavigate } from "react-router-dom"
import { DiaryStateContext } from "../App"
import { useContext , useState, useEffect } from "react"
const useDiary = (diaryId) => {
    const data = useContext(DiaryStateContext)
    const [currentDiary, setCurrentDiary] = useState()
    const nav = useNavigate()
    
    useEffect(()=>{

        let curDiaryItem = data.find(item => 
            Number(item.id) === Number(diaryId))
        if(!curDiaryItem){
            window.alert("존재 하지 않는 일기 입니다!")
            nav('/', { replace : true })
        }
        setCurrentDiary(curDiaryItem)

    }, [diaryId, data])

    return currentDiary
}
    
export default useDiary;