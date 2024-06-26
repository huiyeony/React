import Button from './Button'
import './DiaryItem.css'
import getEmotionImg from '../util/get-emotion-img'

const DiaryItem = () => {
    const emotionId = 1
    return <div className='DiaryItem'>    
        <div className={`img_section img_section_${emotionId}`}>
            <img src={ getEmotionImg(emotionId) }/>
        </div>
        <div className='info_section'>
            <div className='created_date'>{new Date().toLocaleDateString()}</div>
            <div className='content'>일기 내용</div>
        </div>
        <div className='button_section'>
            <Button text={"수정하기"}/>
        </div>
       
    </div>
}
export default DiaryItem