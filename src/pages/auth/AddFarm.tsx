import FlowLineMobile from "../../components/auth/common/FlowLineMobile"
import ImageHero from "../../components/auth/common/ImageHero"
import MobileNav from "../../components/auth/common/MobileNav"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
import AddFarmForm from "../../components/auth/farm/AddFarmForm"
import { useContext, useState } from "react"
import OverlayFarm from "../../components/auth/farm/OverlayFarm"
import { Context } from "../../context/AuthContext"
import AnimatedPage from "./AnimatedPage"
const AddFarm = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const { formInputs } = useContext(Context);
  const onClick = () =>{
    setShowOverlay(false);
  }
  return (
    <AnimatedPage>
      <AuthPage>
          <ImageHero page="farm"/>
          <MobileNav />
          <FlowLineMobile page='farm'/>
          <AuthMain>
              <AddFarmForm setShowOverlay={setShowOverlay} showOverlay={showOverlay}/>
          </AuthMain>
          <OverlayFarm
          showOverlay={showOverlay}
          title={`You have added ${formInputs.farmDetails.length} ${formInputs.farmDetails.length > 1 ? 'farms' : 'farm'}!`}
          onClickFunction={onClick}
  />

      </AuthPage>
    </AnimatedPage>
  )
}

export default AddFarm