interface FormTitleProps {
  page?: string;
}
const TopLinks: React.FC<FormTitleProps>  = ({page = 'signup'}) => {
  return (
    <div className="">
        <div className=""><i className="fa-solid fa-angle-left"></i> Back home</div>
        {page != 'login' && <div className="">Already Have an account? <span>Log In</span></div>}
    </div>
  )
}

export default TopLinks