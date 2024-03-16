import FlowLineMobile from "../../components/auth/common/FlowLineMobile"
import ImageHero from "../../components/auth/common/ImageHero"
import MobileNav from "../../components/auth/common/MobileNav"
import LoginForm from "../../components/auth/login/LoginForm"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
const Personal = () => {
  return (
    <AuthPage>
        <ImageHero page="personal"/>
        <MobileNav />
        <FlowLineMobile />
        <AuthMain>
            <LoginForm />
        </AuthMain>
    </AuthPage>
  )
}

export default Personal