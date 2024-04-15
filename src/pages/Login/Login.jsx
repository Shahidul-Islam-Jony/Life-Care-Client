import { FaUser, FaLock,FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import './LoginStyle.css';

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
                        <div className="divider divider-primary">OR Login With</div>
                    
                        <div className="flex gap-2 mt-4">
                            <button className="btn btn-outline w-1/2 btn-sm hover:bg-blue-800"><FcGoogle /> Google</button>
                            <button className="btn btn-outline w-1/2 btn-sm hover:bg-blue-800"><FaFacebook /> Facebook</button>
                        </div>

                        <div className="logreg-link animation" style={{ '--i': 4, '--j': 25 }}>
                            <p>Do not have an account? <a href="#" onClick={() => setIsClicked(true)} className="register-link hover:text-blue-800">Sign Up</a></p>
                        </div>
                    </form>
                </div>
                {/* Right side Login Text */}
                <div className="info-text login">
                    <h2 className="animation" style={{ '--i': 0, '--j': 20 }}>Welcome Back !</h2>
                    <p className="animation" style={{ '--i': 1, '--j': 21 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ullam!</p>
                </div>
                </div>


                {/* Registration page */}
                <div className="form-box register">
                    <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>Sign Up</h2>
                    <form action="#">
                        <div className="input-box animation" style={{ '--i': 18, '--j': 1 }}>
                            <input type="text" required />
                            <label>Username</label>
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box animation" style={{ '--i': 19, '--j': 2 }}>
                            <input type="Email" required />
                            <label>Email</label>
                            <MdEmail className="icon" />
                        </div>
                        <div className="input-box animation" style={{ '--i': 20, '--j': 3 }}>
                            <input type="password" required />
                            <label>Password</label>
                            <FaLock className="icon" />
                        </div>
                        <button type="submit" className="btn1 animation" style={{ '--i': 21, '--j': 4 }}>Sign Up</button>

                        <div className="logreg-link animation" style={{ '--i': 22, '--j': 5 }}>
                            <p>Already have an account? <a href="#" onClick={() => setIsClicked(false)} className="login-link">Login</a></p>
                        </div>
                    </form>
                </div>
                {/* Left side Register Text */}
                <div className="info-text register">
                    <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>Welcome Back !</h2>
                    <p className="animation" style={{ '--i': 18, '--j': 1 }}>Lorem ipsum dolor sit amet consectetur adipisicing!</p>
                </div>

            </div>
        </div>
    );
};

export default Login;