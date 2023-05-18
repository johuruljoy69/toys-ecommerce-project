import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    // console.log('login page location', location);
    const from = location.state?.from?.pathname || '/';

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success("Wow! User Login successfully")
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setSuccess('')
        setError('')

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('User Login successfully')
                form.reset();
                navigate(from, { replace: true });
                toast.success("Wow! You Login successfully");
            })
            .catch(error => {
                console.error(error.message)
                setError('Email or password did not match');
                toast.warning("Oops! Invalid Email or Password");
            })
    }
    return (
        <div className='container mx-auto mt-12 mb-12'>
            <div className="hero min-h-screen">
                <div className="hero-content md:flex border p-12 ">
                    <div>
                        <img src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?w=826&t=st=1684418196~exp=1684418796~hmac=e2e4c2f8efd48843a4e11692f364d54bf2aeb7e0cec9dc222759ae2f5a8cb9f1" alt="" />
                    </div>
                    <div className="">
                        <h1 className="text-5xl font-bold mb-5">Login</h1>
                        <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Enter your email address" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <input type='checkbox' />
                                        <p className="label-text ps-2">Remember Me </p>

                                    </label>

                                </div>
                                <p className='text-green-500'><small>{success}</small></p>
                                <p className='text-red-500'><small>{error}</small></p>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                    <ToastContainer />
                                </div>
                                <p>Don't have an Account? <Link className='text-purple-600' to='/signup'>Please Sign Up</Link></p>
                                <div className="inline-flex items-center justify-center w-full">
                                    <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                                        <p className='text-xl font-semibold' >or</p>
                                    </div>
                                </div>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline mb-3"><FaGoogle /><span className='ps-2'>Login with Google</span> </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;