import Button from './Button'
import './DiaryItem.css'
import getEmotionImg from '../util/get-emotion-img'
import { useNavigate } from 'react-router-dom'

const DiaryItem = ({id, createdDate, emotionId, context}) => {
    const nav = useNavigate()
    console.log(`다이어리 아이템 ${context}`)
    return <div className='DiaryItem'>    
        <div className={`img_section img_section_${emotionId}`}
            onClick={()=>{nav(`/diary/${id}`)}}>
            <img src={ getEmotionImg(emotionId) }/>
        </div>
        <div className='info_section'
            onClick={()=>{nav(`/diary/${id}`)}}>
            <div className='created_date'>{new Date(createdDate).toLocaleDateString()}</div>
            <div className='content'>{context}</div>
        </div>
        <div className='button_section'
            onClick={()=>{nav(`/edit/${id}`)}}>
            <Button text={"수정하기"}/>
        </div>
       
    </div>
}
export default DiaryItem