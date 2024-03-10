import FlowLineMobile from "../../components/auth/FlowLineMobile"
import ImageHero from "../../components/auth/ImageHero"
import MobileNav from "../../components/auth/MobileNav"
import PersonalInfoMain from "../../components/auth/PersonalInfoMain"
import AuthPage from "../../components/common/AuthPage"
const BankRegistration = () => {
  return (
    <AuthPage>
        <ImageHero src="/images/personal_info_hero.svg"/>
        <MobileNav />
        <FlowLineMobile />
        <PersonalInfoMain />
    </AuthPage>
  )
}

export default BankRegistration