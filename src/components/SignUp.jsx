import React, { useContext } from 'react';
import Navbar from './Navbar';
import { AuthContext } from './AuthProvider';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2';

const SignUp = () => {

    const {createUser} =useContext(AuthContext)

const handleSignUp =e=>{
    e.preventDefault()

const name =e.target.name.value    
const email =e.target.email.value
const password =e.target.password.value
console.log(name, email, password)

createUser(email, password)
.then(result =>{
    console.log('user created at fb', result.user);
    const createdAt = result?.user?.metadata?.creationTime;
    const newUser = { name, email, createdAt }
    console.log(result.user)
    // save users info to database
    fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
            'content-type' :'application/json'
        },
        body:JSON.stringify(newUser)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log('user create to db', data)
        Swal.fire({
            title: "congrates",
            text: "user create in db",
            icon: "success"
          });
    })
})
.catch(err =>{
    console.log(err.message)
})
}

    return (
        <div>
            <Navbar></Navbar>
            <div className='my-10'>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                            <p className="py-6">
                                If you are new in this website ...Please sign up ...!
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
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
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;