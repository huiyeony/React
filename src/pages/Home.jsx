import Header from '../component/Header'
import Button from '../component/Button'
import DiaryList from '../component/DiaryList'

const Home = ()=>{
    return <div>
        <Header 
        leftChild={<Button text={"<"}/>}
        center={"2024년 6월"}
        rightChild={<Button text={">"}/>}
        />

        <DiaryList/>
    </div>
}
export default Home