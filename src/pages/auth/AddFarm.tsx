import FlowLineMobile from "../../components/auth/common/FlowLineMobile"
import ImageHero from "../../components/auth/common/ImageHero"
import MobileNav from "../../components/auth/common/MobileNav"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
import AddFarmForm from "../../components/auth/farm/AddFarmForm"
import { useState } from "react"
import OverlayAddFarm from "../../components/auth/farm/OverlayAddFarm"
const AddFarm = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  return (
    <AuthPage>
        <ImageHero page="farm"/>
        <MobileNav />
        <FlowLineMobile page='farm'/>
        <AuthMain>
            <AddFarmForm setShowOverlay={setShowOverlay} />
        </AuthMain>
        <OverlayAddFarm showOverlay={showOverlay}/>
    </AuthPage>
  )
}

export default AddFarm