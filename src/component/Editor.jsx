import Button from "./Button"
import "./Editor.css"
import EmotionItem from "./EmotionItem"
import { useState , useEffect} from "react"
import { useNavigate } from 'react-router-dom'

const emotionList = [
    {
        emotionId : 1,
        emotionName:"완전 좋음"
    },
    {
        emotionId :2,
        emotionName:"좋음"
    },
    {
        emotionId:3,
        emotionName:"그럭저럭"
    },
    {
        emotionId:4,
        emotionName:"나쁨"
    },
    {
        emotionId:5,
        emotionName:"매우 나쁨"
    }
]

const Editor = ({onSubmit, initData})=>{

    const getStringDate = (date)=>{

        let year = date.getFullYear()
        let month = Number(date.getMonth()) + 1
        let day = date.getDate()

        if(month < 10)
            month = `0${month}`;
        if(day < 10)
            day = `0${day}`;

        return `${year}-${month}-${day}`
    }
    const onChangeInput = (e)=>{
       
        let name = e.target.name;
        let value = e.target.value;

        console.log(name)
        console.log(value)

        if(name === "createdDate")
            value = new Date(value)
        setInput({
            ...input,
            [name] :value
        })
    
    }
    const [input, setInput] = useState({
        createdDate : new Date(),
        emotionId : 3,
        content: ''
    })
    useEffect(
        ()=>{
            if(initData){

            setInput({
                ...initData,
                createdDate : new Date(Number(initData.createdDate))
            })
            }
            
        },[initData])


    const nav = useNavigate()
    
    return <div className="Editor">
        <section className="date_section">
            <h4>오늘의 날짜</h4>
            <input 
            name="createdDate"
            value={getStringDate(input.createdDate)}
            onChange={onChangeInput}
            type="date"/>
        </section>
        <section className="emotion_section">
            <h4>오늘의 기분</h4>
            <section className="emotion_list_wrapper">
                {emotionList.map(
                (item)=> 
                <EmotionItem 
                    key={item.emotionId} 
                    onClick={onChangeInput}
                    {...item} 
                    isSelected ={ Number(input.emotionId) === item.emotionId }/>
                )}
            </section>
        </section>
        <section className="content_section">
            <h4>오늘의 일기</h4>
            <textarea 
            name="content"
            value={input.content}
            onChange={onChangeInput}
            placeholder="오늘 하루는 어땠나요?"/>
        </section>
        <section className="button_section">
            <Button 
            onClick={()=>{
                nav(-1)
            }}
            text={"취소하기"}/>
            <Button 
            onClick={()=>{
                onSubmit(input)
            }}
            text={"완료하기"} type={"POSITIVE"}/>
        </section>
    </div>
}
export default Editor