import FlowLineMobile from "../../components/auth/common/FlowLineMobile"
import ImageHero from "../../components/auth/common/ImageHero"
import MobileNav from "../../components/auth/common/MobileNav"
import PersonalInfoForm from "../../components/auth/personal/PersonalInfoForm"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
const Personal = () => {
  return (
    <AuthPage>
        <ImageHero page="personal"/>
        <MobileNav />
        <FlowLineMobile />
        <AuthMain>
            <PersonalInfoForm />
        </AuthMain>
    </AuthPage>
  )
}

export default Personal