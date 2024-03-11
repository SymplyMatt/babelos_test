import FlowLineMobile from "../../components/auth/FlowLineMobile"
import ImageHero from "../../components/auth/ImageHero"
import MobileNav from "../../components/auth/MobileNav"
import PersonalInfoForm from "../../components/auth/personal/PersonalInfoForm"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
const Personal = () => {
  return (
    <AuthPage>
        <ImageHero src="/images/personal_info_hero.svg"/>
        <MobileNav />
        <FlowLineMobile />
        <AuthMain>
            <PersonalInfoForm />
        </AuthMain>
    </AuthPage>
  )
}

export default Personal