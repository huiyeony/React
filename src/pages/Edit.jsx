import { useNavigate, useParams } from "react-router-dom"
import Header from "../component/Header"
import Button  from "../component/Button"
import Editor from "../component/Editor"
import { useContext, useEffect, useState } from "react"
import { DiaryDispatchContext , DiaryStateContext } from "../App"
import  useDiary  from '../hooks/useDiary'

const Edit = ()=> {
    const params = useParams()
    const nav = useNavigate()
    

    const { onDelete, onUpdate } = useContext(DiaryDispatchContext)
    
    //현재 일기 불러오기
    let diary = useDiary(params.id)
  
    const onClickDelete = ()=>{
        if(window.confirm("정말 삭제할까요? 한번 삭제된 일기는 복구되지 않아요!")){
            //삭제 로직 
            onDelete(params.id)
            nav('/', {replace:true})
        }
        
    }
    const onSubmit = (input)=>{
        if(window.confirm("정말 수정할까요? 한번 수정된 일기는 복구되지 않아요!")){
            onUpdate(
                params.id, 
                input.createdDate.getTime(),
                Number(input.emotionId),
                input.content
        )
            nav('/', { replace:true })
        }
    }
    
    return <div>
        <Header center={"수정하기"}
        leftChild={<Button 
            text={"<뒤로 가기"}
            onClick={ ()=> {nav(-1)} }/>}
        rightChild={<Button
            type={"NEGATIVE"}
            text={"삭제하기"}
            onClick={onClickDelete}/>
        }
        />
        <Editor 
        onSubmit = {onSubmit} 
        initData={diary}/>
    </div>
}
export default Edit