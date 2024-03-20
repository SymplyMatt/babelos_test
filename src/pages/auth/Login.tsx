import ImageHero from "../../components/auth/common/ImageHero"
import MobileNav from "../../components/auth/common/MobileNav"
import LoginForm from "../../components/auth/login/LoginForm"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
import AnimatedPage from "./AnimatedPage"
const Login = () => {
  return (
    <AnimatedPage>
      <AuthPage>
          <ImageHero page="login"/>
          <MobileNav />
          <AuthMain page="login">
              <LoginForm />
          </AuthMain>
      </AuthPage>
    </AnimatedPage>
  )
}

export default Login