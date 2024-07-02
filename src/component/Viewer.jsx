import './Viewer.css'
import  getEmotionImg  from '../util/get-emotion-img'
import  { emotionList }   from '../util/constants';


const Viewer = ({ emotionId ,content })=>{
    const getEmotion = (id)=>{
        return emotionList.find(item => Number(item.emotionId) === Number(id))

    }
    return (
    <div className='Viewer'>
        <section className='img_section'>
            <h4>오늘의 감정</h4>
            <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
                <img src={ getEmotionImg(emotionId) }/>
                <div>{ getEmotion(emotionId).emotionName }</div>
            </div>
        </section>
        <section className='content_section'>
            <h4>오늘의 일기</h4>
            <div className='content_wrapper'>
                <p>{content}</p>
            </div>

        </section>
    </div>)

    
}
export default Viewer;