import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [errorPassword, setErrorPassword] = useState('')
    const [success, setSuccess] = useState('');
    const [accepted, setAccepted] = useState(false)
    const { createUser, setReload } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success("Wow! Account Create successfully")
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photoURL = form.photoURL.value;

        setSuccess('')
        setErrorPassword('')

        if (password.length < 8) {
            setErrorPassword('Please input min 8 character')
            return;
        }
        else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setErrorPassword('Please provide two capital letter')
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setErrorPassword('Please provide one special Character')
            return;
        }
        else if (password !== confirm) {
            setErrorPassword('Confirm password did not match');
            toast.warning("oops! Confirm password did not match")
            return;
        }


        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoURL
                }).then(() => {
                    setReload(new Date().getTime());
                }).catch((error) => {

                })
                setSuccess('Account Create Successfully')
                form.reset();
                navigate(from, { replace: true });
                toast.success("Wow! Account Create successfully")

            })
            .catch(error => {
                console.log(error.message)
                setSuccess('')
            })
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }

    return (
        <div className='container mx-auto mt-12 mb-12'>
            <div className="hero min-h-screen">
                <div className="hero-content border p-12 flex">
                    <div>
                        <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=826&t=st=1684419074~exp=1684419674~hmac=dfaa38fb378d435a036454f675f85ac14975dfb060df7dadd255cf25c074bd60" alt="" />
                    </div>
                    <div className="">
                        <h1 className="text-5xl font-bold mb-5">Sign Up Here</h1>
                        <form onSubmit={handleRegister} className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Enter your photo url" name='photoURL' className="input input-bordered" />
                                </div>
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
                                    <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="Enter confirm password" name='confirm' className="input input-bordered" required />
                                </div>
                                <p className='text-red-500'><small>{errorPassword}</small></p>
                                <div className="form-control">
                                    <label className="label">
                                        <input onClick={handleAccepted} type='checkbox' />
                                        <p className="label-text ps-2">Accept <span className='text-blue-500'>Terms & Conditions</span> </p>

                                    </label>

                                </div>
                                <p className='text-green-500'><small>{success}</small></p>
                                <div className="form-control mt-6">
                                    <button disabled={!accepted} className="btn btn-primary">Sign Up</button>
                                    <ToastContainer />
                                </div>
                                <p>Already Have an Account? <Link className='text-purple-600' to='/login'>Please Login</Link></p>
                                <div className="inline-flex items-center justify-center w-full">
                                    <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                                    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                                        <p className='text-xl font-semibold' >or</p>
                                    </div>
                                </div>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline mb-3"><FaGoogle /><span className='ps-2'>SignUp with Google</span> </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;