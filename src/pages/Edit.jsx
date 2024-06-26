import { useParams } from "react-router-dom"
const Edit = ()=> {
    const params = useParams()
    return <div>Edit {params.id}페이지</div>
}
export default Edit