import FarmForm from "../../components/auth/farm/FarmForm"
import FlowLineMobile from "../../components/auth/FlowLineMobile"
import ImageHero from "../../components/auth/ImageHero"
import MobileNav from "../../components/auth/MobileNav"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
const Farm = () => {
  return (
    <AuthPage>
        <ImageHero page="farm"/>
        <MobileNav />
        <FlowLineMobile page='farm'/>
        <AuthMain>
            <FarmForm />
        </AuthMain>
    </AuthPage>
  )
}

export default Farm