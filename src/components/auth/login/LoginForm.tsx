import FormTitle from "../common/FormTitle"
import LoginInputSections from "./LoginFormSections"

const LoginForm = () => {
  return (
    <div className="form-container">
        <FormTitle title="Create Account" description="Personal Information" step="one"/>
        <LoginInputSections />
    </div>
  )
}

export default LoginForm