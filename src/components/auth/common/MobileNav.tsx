import Logo from '../../../assets/logo-mobile.svg'
import HomeIcon from '../../../assets/home_icon.svg'

const MobileNav = () => {
  return (
    <div className="mobile-nav w-full">
        <div className=""><img src={Logo} alt="" /></div>
        <div className=""><img src={HomeIcon} alt="" /> Back home</div>
    </div>
  )
}

export default MobileNav