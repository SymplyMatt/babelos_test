import FormTitle from "../common/FormTitle"
import LoginInputSections from "./LoginFormSections"

const LoginForm = () => {
  return (
    <div className="form-container">
        <FormTitle title="Welcome back!" description="Welcome back! Please enter your details." step="one" hide={true}/>
        <LoginInputSections />
    </div>
  )
}

export default LoginForm