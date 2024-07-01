import "./EmotionItem.css"
import getEmotionImg from "../util/get-emotion-img"



const EmotionItem = ({onClick, emotionId, emotionName, isSelected})=>{
    return <div 
    
    className={`EmotionItem${isSelected? ` emotionItem_${emotionId}_on` : ""}`}
    onClick={()=>{
        onClick({
            target:{
                name:"emotionId",
                value: Number(emotionId)
            }
        })
    }}>
        <img className='emotion_img' 
        src={`${getEmotionImg(emotionId)}`}/>
        <div>{emotionName}</div>
    </div>
}
export default EmotionItem