import BankDetailsForm from "../../components/auth/bank/BankDetailsForm"
import FlowLineMobile from "../../components/auth/FlowLineMobile"
import ImageHero from "../../components/auth/ImageHero"
import MobileNav from "../../components/auth/MobileNav"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
const BankRegistration = () => {
  return (
    <AuthPage>
        <ImageHero page="bank"/>
        <MobileNav />
        <FlowLineMobile page='bank'/>
        <AuthMain>
            <BankDetailsForm />
        </AuthMain>
    </AuthPage>
  )
}

export default BankRegistration