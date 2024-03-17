import { useNavigate } from "react-router-dom";

interface FormTitleProps {
  page?: string;
}
const TopLinks: React.FC<FormTitleProps>  = ({page = 'signup'}) => {
  const navigate = useNavigate();
  return (
    <div className="">
        <div className="" onClick={()=>navigate(-1)}><i className="fa-solid fa-angle-left"></i> Back home</div>
        {page != 'login' && <div className="">Already Have an account? <span onClick={()=>navigate('/auth/login')}>Log In</span></div>}
    </div>
  )
}

export default TopLinks