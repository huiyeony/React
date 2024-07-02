import Header from "../component/Header"
import Button from "../component/Button"
import Editor from "../component/Editor"
import { useContext} from "react"
import { useNavigate } from "react-router-dom"
import { DiaryDispatchContext } from "../App"
import usePageTitle from "../hooks/usePageTitle"


const New = ()=>{
    const nav = useNavigate()

    usePageTitle("새로운 일기 작성")
    const {onCreate} = useContext(DiaryDispatchContext)
    const onSubmit = (input)=>{
        onCreate(
            input.createdDate.getTime(),
            Number(input.emotionId),
            input.content
)
        nav('/', { replace : true})
    }
    return <div>
        <Header 
        center={"새 일기 쓰기 "}
        leftChild={<Button text={"<뒤로가기"} 
        onClick={()=>{
            nav(-1)
        }}/>}/>
        <Editor onSubmit={onSubmit}/>

    </div>
}
export default New