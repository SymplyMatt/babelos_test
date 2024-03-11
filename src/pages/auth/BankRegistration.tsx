import BankDetailsMain from "../../components/auth/BankDetailsMain"
import FlowLineMobile from "../../components/auth/FlowLineMobile"
import ImageHero from "../../components/auth/ImageHero"
import MobileNav from "../../components/auth/MobileNav"
import AuthPage from "../../components/common/AuthPage"
const BankRegistration = () => {
  return (
    <AuthPage>
        <ImageHero src="/images/bank_registration.svg"/>
        <MobileNav />
        <FlowLineMobile page='bank'/>
        <BankDetailsMain />
    </AuthPage>
  )
}

export default BankRegistration