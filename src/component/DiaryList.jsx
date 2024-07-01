import './DiaryList.css'
import Button from './Button'
import DiaryItem from './DiaryItem'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const  DiaryList = ({data})=>{
    const [sortedType, setSortedType] = useState("oldest")
    const getSortedData = ()=>{
            return data.toSorted(
                (a,b)=>  {
            if (sortedType === "oldest")
                return (Number(a.createdDate) - Number(b.createdDate));
            else
                return Number(b.createdDate) - Number(a.createdDate);})
            
}
    
    const onChangeSortedType = (e)=>{
        setSortedType(e.target.value)
       
    }
    const nav = useNavigate()
    const sortedData = getSortedData()
    return <div className='DiaryList'>
        <div className='menu_bar'>
            <select value={sortedType} onChange={onChangeSortedType}>
                <option value={"latest"}>최신 순</option>
                <option value={"oldest"}>오래된 순</option>
            </select>
            <Button type={"POSITIVE"} text={"새로운 일기 작성"}
            onClick={()=>{nav('/new')}}/>
            
            
        </div>
        <div className='list_wrapper'>
            {sortedData.map(item=>(<DiaryItem key={item.id} {...item}/>))}
        </div>

    </div>
}
export default DiaryList