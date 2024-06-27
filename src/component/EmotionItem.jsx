import "./EmotionItem.css"
import getEmotionImg from "../util/get-emotion-img"


const EmotionItem = ({emotionId, emotionName})=>{
    return <div className="EmotionItem">
        <img src={`${getEmotionImg(emotionId)}`}/>
        <div>{emotionName}</div>
    </div>
}
export default EmotionItem