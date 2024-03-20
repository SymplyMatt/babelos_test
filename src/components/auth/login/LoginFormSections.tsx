import FlowLine from '../common/FlowLine'
import fingerprint from '../../../assets/fingerprint_login.svg'
import { useEffect, useState } from 'react'
import sendRequest from '../../../config/fetchData';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginInputSections = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigate = useNavigate();
    useEffect(()=>{
        if(username && password){
            setIsValid(true);
        }else{
            setIsValid(false);
        }
    },[username, password]);

    const loginUser = async () => {
        try {
            setLoading(true);
            const reqData = {
                "credential": username,
                "password": password
            }
            const response: any = await sendRequest('post', `/login`,reqData);
            setLoading(false);
            if (response.status === 200) {
                navigate('/auth/verify', { state: { auth : true }});
            } else {
                setLoading(false);
                toast.error(response.message);
            }
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
    };
  return (
    <div className="form-area">
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="one" />
            </div>
            <div className="p-20 w-full flex column gap-10">
                <div className="w-full password-input-container">
                    <div className="label">Email address/ Phone number <span className='font-8'>*</span></div>
                    <div className="input-div w-full password">
                        <input type='password' placeholder='Enter email or phone number' className='' value={username} onChange={(e)=> setUsername(e.currentTarget.value)}/>
                        {/* <div className=""><i className="fa-regular fa-eye"></i></div> */}
                    </div>
                </div>
                <div className="password-checks">
                    <div className="">Phone number must have country code. E.g. +234.</div>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="p-20 w-full flex column gap-10">
                <div className="w-full password-fingerprint-container">
                    <div className="w-full password-input-container">
                        <div className="label">Password <span className='font-8'>*</span></div>
                        <div className="input-div w-full password">
                            <input type={showPassword ? 'text' : 'password'} placeholder='Enter Password' className='' value={password} onChange={(e)=> setPassword(e.currentTarget.value)}/>
                            <div className="pointer" onClick={()=> setShowPassword(!showPassword)}>{!showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}</div>
                        </div>
                    </div>
                    <div className="flex align-center">
                        <img src={fingerprint} alt="" />
                    </div>
                </div>
                <div className="password-checks">
                    <div className="">Phone number must have country code. E.g. +234.</div>
                </div>
            </div>
        </div>
        <div className="section w-80 m-s">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="w-full flex between align-center">
                <div className="font-14 flex align-center">
                    <input type="checkbox" name="" id="" />
                    Remember for 30 days
                </div>
                <div className="font-14 green flex align-center pointer">
                    Forgot Password?
                </div>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="flex column gap-10 w-full center">
                <div className={`w-full form-buttons`}>
                    <div className={`w-full flex align-center justify-center btn ${isValid && !loading ? 'active' : 'inactive'} green`} onClick={()=>{
                        !loading && loginUser();
                    }}
                    >{!loading ? 'Login' :  <i className="fa-solid fa-spinner spinner"></i>}</div>
                </div>
                <div className="font-14">Don't Have an account? <span className='green pointer'>Sign Up</span></div>
            </div>
        </div>
        <ToastContainer />
        
    </div>
  )
}

export default LoginInputSections