import FlowLineMobile from "../../components/auth/common/FlowLineMobile"
import ImageHero from "../../components/auth/common/ImageHero"
import MobileNav from "../../components/auth/common/MobileNav"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
import AddFarmForm from "../../components/auth/farm/AddFarmForm"
const AddFarm = () => {
  return (
    <AuthPage>
        <ImageHero page="farm"/>
        <MobileNav />
        <FlowLineMobile page='farm'/>
        <AuthMain>
            <AddFarmForm />
        </AuthMain>
    </AuthPage>
  )
}

export default AddFarm