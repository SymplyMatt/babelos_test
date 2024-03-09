import ImageHero from "../../components/auth/ImageHero"
import PersonalInfoForm from "../../components/auth/PersonalInfoForm"
import AuthPage from "../../components/common/AuthPage"

const Personal = () => {
  return (
    <AuthPage>
        <ImageHero />
        <PersonalInfoForm />
    </AuthPage>
  )
}

export default Personal