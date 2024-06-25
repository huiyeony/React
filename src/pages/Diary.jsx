import { useParams } from "react-router-dom"

const Diary = ()=>{
    const params = useParams()
    var id = params.id
    return <>Diary 페이지 {id}</>
}
export default Diary