import { FaLock, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import './LoginStyle.css';
import Registration from "../Registration/Registration";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [isClicked, setIsClicked] = useState(false);

    const { login, loginByGoogle } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        login(email, password)
            .then(result => {
                console.log(result);
                toast.success('Login Successful !', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate(location.state || '/');
            })
            .catch(error => {
                toast.error(`${error}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            })
    }

    const handleLoginByGoogle = () => {
        loginByGoogle()
            .then(result => {
                console.log(result);
                toast.success('Login Successful !', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate(location.state || '/');
            })
            .catch(error => {
                toast.error(`${error}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            })
    }

    return (
        <div>
            <div className="flex justify-center mt-28">
                <div className={`wrapper ${isClicked ? 'active' : ''}`}>
                    {/* BG Divider login*/}
                    <span className="bg-animate"></span>
                    {/* BG Divider Registration */}
                    <span className="bg-animate2"></span>

                    {/* Login page */}
                    <div>
                        <div className="form-box login ">
                            <h2 className="animation" style={{ '--i': 0, '--j': 21 }}>Login</h2>    {/* Insert animation class for changing login to reg by animated */}
                            <form onSubmit={handleLogin} action="#">
                                <div className="input-box animation" style={{ '--i': 1, '--j': 22 }}>
                                    <input type="email" required />
                                    <label>Email</label>
                                    <MdEmail className="icon" />
                                </div>
                                <div className="input-box animation" style={{ '--i': 2, '--j': 23 }}>
                                    <input type="password" required />
                                    <label>Password</label>
                                    <FaLock className="icon" />
                                </div>
                                <button type="submit" className="btn1 animation" style={{ '--i': 3, '--j': 24 }}>Login</button>

                                {/* divider */}
                                <div className="animation divider divider-primary" style={{ '--i': 4, '--j': 25 }}>OR Login With</div>

                                <div className="animation flex gap-2 mt-4" style={{ '--i': 5, '--j': 26 }}>
                                    <button onClick={handleLoginByGoogle} className="btn btn-outline w-1/2 btn-sm hover:bg-blue-800"><FcGoogle /> Google</button>
                                    <button className="btn btn-outline w-1/2 btn-sm hover:bg-blue-800"><FaFacebook /> Facebook</button>
                                </div>

                                <div className="logreg-link animation" style={{ '--i': 6, '--j': 27 }}>
                                    <p>Do not have an account? <a href="#" onClick={() => setIsClicked(true)} className="register-link hover:text-blue-800">Sign Up</a></p>
                                </div>
                            </form>
                        </div>
                        {/* Right side Login Text */}
                        <div className="info-text login">
                            <h2 className="animation" style={{ '--i': 0, '--j': 20 }}>Welcome Back !</h2>
                            <p className="animation" style={{ '--i': 1, '--j': 21 }}>LifeCare is always with your side.</p>
                        </div>
                    </div>
                    {/* Registration part */}
                    <Registration setIsClicked={setIsClicked}></Registration>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;