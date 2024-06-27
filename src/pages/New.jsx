import Header from "../component/Header"
import Button from "../component/Button"
import Editor from "../component/Editor"
const New = ()=>{
    return <div>
        <Header 
        center={"새 일기 쓰기 "}
        leftChild={<Button text={"<뒤로가기"}/>}/>
        <Editor/>

    </div>
}
export default New