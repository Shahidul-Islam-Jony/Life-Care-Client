import { FaUser, FaLock, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import './LoginStyle.css';
import Registration from "../Registration/Registration";

const Login = () => {
    const [isClicked, setIsClicked] = useState(false);
    return (
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
                        <form action="#">
                            <div className="input-box animation" style={{ '--i': 1, '--j': 22 }}>
                                <input type="text" required />
                                <label>Username</label>
                                <FaUser className="icon" />
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
                                <button className="btn btn-outline w-1/2 btn-sm hover:bg-blue-800"><FcGoogle /> Google</button>
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
    );
};

export default Login;