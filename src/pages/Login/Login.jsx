import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';
import Swal from "sweetalert2";

const Login = () => {
    useTitle('Login')
    const { loginUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
                Swal.fire({
                        title: 'Success!',
                        text: 'Login Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                toast.success("Wow! You Login successfully");
            })
            .catch(error => console.log(error))
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
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
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
                <div className=" md:flex items-center justify-center gap-10 border p-12 ">
                    <div className='flex items-center'>
                        <img className='h-1/2' src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?w=740&t=st=1684651109~exp=1684651709~hmac=aa31d63ed983707f074dffb81243de34e43b2fe9660bf5cda8d1d0bd9fb15a40" alt="" />
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