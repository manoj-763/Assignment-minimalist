import './Header.css'
import Logo from '../../assets/Frame.png'


const Header = () => {
  return (
    <div className='navbar'>
        <div>
            <img src={Logo}/>
        </div>
    </div>
  )
}

export default Header