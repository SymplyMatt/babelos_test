import FingerprintForm from "../../components/auth/fingerprint/FingerPrintForm"
import FlowLineMobile from "../../components/auth/common/FlowLineMobile"
import ImageHero from "../../components/auth/common/ImageHero"
import MobileNav from "../../components/auth/common/MobileNav"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
import AnimatedPage from "./AnimatedPage"
const FingerPrint = () => {
  return (
    <AnimatedPage>
      <AuthPage>
          <ImageHero page="fingerprint"/>
          <MobileNav />
          <FlowLineMobile page='fingerprint'/>
          <AuthMain>
              <FingerprintForm />
          </AuthMain>
      </AuthPage>
    </AnimatedPage>
  )
}

export default FingerPrint