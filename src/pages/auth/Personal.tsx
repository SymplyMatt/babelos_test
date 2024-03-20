import FlowLineMobile from "../../components/auth/common/FlowLineMobile"
import ImageHero from "../../components/auth/common/ImageHero"
import MobileNav from "../../components/auth/common/MobileNav"
import PersonalInfoForm from "../../components/auth/personal/PersonalInfoForm"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
import AnimatedPage from "./AnimatedPage"
const Personal = () => {
  return (
    <AnimatedPage> 
    <AuthPage>
        <ImageHero page="personal"/>
        <MobileNav />
        <FlowLineMobile />
        <AuthMain>
            <PersonalInfoForm />
        </AuthMain>
    </AuthPage>
    </AnimatedPage>
  )
}

export default Personal