import React, { useContext } from 'react';
import Navbar from './Navbar';
import { AuthContext } from './AuthProvider';

const Login = () => {
const {signInUser} =useContext(AuthContext)
const handleLogin=e=>{
    e.preventDefault()

    const email =e.target.email.value
    const password =e.target.password.value


    signInUser(email, password)
    .then(result =>{
        console.log(result.user)
        // update last login time
        const lastSigninTime =result?.user?.metadata?.lastSignInTime

        const loginInfo ={email, lastSigninTime}
        fetch(`http://localhost:5000/users`,{
            method: 'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(loginInfo)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log('sign in info updated db', data)
        })
    })
}

    return (
        <div>
            <Navbar></Navbar>
            <div className='my-10'>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Log In Now!</h1>
                            <p className="py-6">
                                Already have an account ...Please sign up ...!
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleLogin} className="card-body">
                                
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;