import FarmForm from "../../components/auth/farm/FarmForm"
import FlowLineMobile from "../../components/auth/common/FlowLineMobile"
import ImageHero from "../../components/auth/common/ImageHero"
import MobileNav from "../../components/auth/common/MobileNav"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
import { useState } from "react"
import OverlayFarm from "../../components/auth/farm/OverlayFarm"
const Farm = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  return (
    <AuthPage>
        <ImageHero page="farm"/>
        <MobileNav />
        <FlowLineMobile page='farm'/>
        <AuthMain>
            <FarmForm setShowOverlay={setShowOverlay}/>
        </AuthMain>
        <OverlayFarm showOverlay={showOverlay}/>
    </AuthPage>
  )
}

export default Farm