import FingerprintForm from "../../components/auth/fingerprint/FingerPrintForm"
import FlowLineMobile from "../../components/auth/FlowLineMobile"
import ImageHero from "../../components/auth/ImageHero"
import MobileNav from "../../components/auth/MobileNav"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
const FingerPrint = () => {
  return (
    <AuthPage>
        <ImageHero page="fingerprint"/>
        <MobileNav />
        <FlowLineMobile page='fingerprint'/>
        <AuthMain>
            <FingerprintForm />
        </AuthMain>
    </AuthPage>
  )
}

export default FingerPrint