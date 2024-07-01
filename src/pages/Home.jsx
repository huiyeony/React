import Header from '../component/Header'
import Button from '../component/Button'
import DiaryList from '../component/DiaryList'
import { useState, useContext } from 'react'
import { DiaryStateContext } from '../App'

function getMonthlyData(data,pivotDate){
    const beginDate = new Date(
        pivotDate.getFullYear(),
            pivotDate.getMonth(),
            1,
            0,
            0,
            0).getTime()
        
    const endDate = new Date(
        pivotDate.getFullYear(),
            pivotDate.getMonth()+1,
            0,
            0,
            0,
            0).getTime()

    return data.filter(item=> 
        item.createdDate >= beginDate 
        && item.createdDate <= endDate);
}
const Home = ()=>{
    const data = useContext(DiaryStateContext)

    const [pivotDate, setPivotDate] = useState(new Date())
    const onIncreaseMonth = ()=>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }
    const onDecreaseMonth = ()=>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }
    const monthlyData = getMonthlyData(data, pivotDate)//이 달에 해당하는 일기들

    return <div>
        <Header 
        leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
        center={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`}
        rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
        />

        <DiaryList data={monthlyData}/>
    </div>
}
export default Home