import ImageHero from "../../components/auth/ImageHero"
import PersonalInfoMain from "../../components/auth/PersonalInfoMain"
import AuthPage from "../../components/common/AuthPage"

const Personal = () => {
  return (
    <AuthPage>
        <ImageHero src="/images/personal_info_hero.svg"/>
        <PersonalInfoMain />
    </AuthPage>
  )
}

export default Personal