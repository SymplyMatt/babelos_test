import FarmForm from "../../components/auth/farm/FarmForm"
import FlowLineMobile from "../../components/auth/common/FlowLineMobile"
import ImageHero from "../../components/auth/common/ImageHero"
import MobileNav from "../../components/auth/common/MobileNav"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
import { useState } from "react"
import OverlayFarm from "../../components/auth/farm/OverlayFarm"
import { useNavigate } from "react-router-dom"
const Farm = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const navigate = useNavigate();
  const onClick = () =>{
    navigate('/auth/addfarm', {replace : true, state : {auth : true}});
  }
  return (
    <AuthPage>
        <ImageHero page="farm"/>
        <MobileNav />
        <FlowLineMobile page='farm'/>
        <AuthMain>
            <FarmForm setShowOverlay={setShowOverlay}/>
        </AuthMain>
        <OverlayFarm showOverlay={showOverlay} title="Farm added!" onClickFunction={onClick}/>
    </AuthPage>
  )
}

export default Farm