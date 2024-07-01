import './Viewer.css'
import  getEmotionImg  from '../util/get-emotion-img'
import  { emotionList }   from '../util/constants';


const Viewer = ({ emotionId ,content })=>{
    const getEmotion = (id)=>{
        return emotionList.find(item => Number(item.emotionId) === Number(id))

    }
    return <div className='Viewer'>
        <h4>오늘의 감정</h4>
        <section className={`img_section img_section_${ emotionId }`}>
            <img src={ getEmotionImg(emotionId) }/>
            <div>{getEmotion(emotionId).emotionName}</div>
        </section>
        <h4>오늘의 일기</h4>
        <p>
            {content}
        </p>
    </div>

    
}
export default Viewer;