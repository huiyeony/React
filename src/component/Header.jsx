import './Header.css'

const Header = ({leftChild,center,rightChild})=>{
    return <header className='Header'>
        <div className='header_left'>{leftChild}</div>
        <div className='header_center'>{center}</div>
        <div className='header_right'>{rightChild}</div>
    </header>
}
export default Header