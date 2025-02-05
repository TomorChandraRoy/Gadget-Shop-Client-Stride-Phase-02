import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import swal from 'sweetalert';
// import { updateProfile } from "firebase/auth";


const SignUp = () => {

    const navigate = useNavigate();

    const { createAccount, signInWithGoogle } = useAuth();

    const { register, handleSubmit, watch, formState: { errors }, } = useForm();

    //#  password field show/hide করার জন্য
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const password = watch("password"); // Password ফিল্ডের মান ট্র্যাক করবে watch diye
    console.log("signup password watch : ", password);

    //# createAccount 
    const onSubmit =async  (data) => {
        console.log(data);
        
        // এখানে আপনার API URL দিবেন
        try {
           const createData = await createAccount(data.email, data.password);
           const createlogUser = createData.user
            console.log(createlogUser);
            // await updateProfile(createlogUser{
            //     displayName: name,
            //     photoURL:photo
            //   })  
            
            navigate("/");

            // const response = await axios.post('https://your-api-endpoint.com/save-data', data);

            // if (response.status === 200) {
            //     // সফলভাবে ডাটা সেভ হলে কিছু করতে পারেন, যেমন কনসোল লগ, ইউজারকে ধন্যবাদ জানানো, ইত্যাদি
            //     console.log('create account Data saved successfully:', response.data);
            //     navigate("/");
            // }
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                swal("This email is already registered. Please Try another email.");
              } else {
                console.error('Error saving data firebase createAccount error :',error);
              }
        }

    }

        //     try {
        // // createAccount(data.email, data.password)
        // // .then(Swal.fire({
        // //     title: "Account Created Successfully",
        // //     icon: "success",
        // //     draggable: true
        // // }),
        // //     navigate("/"))
        // // .catch(err => {
        // //     const errorMessage = err.message.split('/')[1];
        // //     const formattedMessage = errorMessage.replace(/-/g, ' ').replace(')', ''); // '-' কে ' ' দিয়ে প্রতিস্থাপন এবং ')' সরানো
        // //     // swal()
        // //     Swal.fire({
        // //         icon: "error",
        // //         title: "Oops...",
        // //         text: `${formattedMessage}`,
        // //     });
        // // });

    //# google SIgnup
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const googleLogIn = result.user
                console.log("google user Info : ", googleLogIn);
                navigate('/')

            })
            .catch(error => {
                console.log("google user Info error : ", error);
            })
    }
    return (
        <>
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div>
                            <img src="https://i.ibb.co.com/rc5SHkH/675d146aed27c4000dd0b7de.png"
                                className="w-32 lg:w-48 mx-auto" />
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">
                                Sign up
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="flex flex-col items-center">
                                    <button onClick={handleGoogleSignIn}
                                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                        <div className="bg-white p-2 rounded-full" >
                                            <svg className="w-4" viewBox="0 0 533.5 544.3">
                                                <path
                                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                    fill="#4285f4" />
                                                <path
                                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                    fill="#34a853" />
                                                <path
                                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                    fill="#fbbc04" />
                                                <path
                                                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                    fill="#ea4335" />
                                            </svg>
                                        </div>
                                        <span className="ml-4">
                                            Sign Up with Google
                                        </span>
                                    </button>

                                    <button
                                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                        <div className="bg-white p-1 rounded-full">
                                            <svg className="w-6" viewBox="0 0 32 32">
                                                <path fillRule="evenodd"
                                                    d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                                            </svg>
                                        </div>
                                        <span className="ml-4">
                                            Sign Up with GitHub
                                        </span>
                                    </button>
                                </div>

                                <p className="text-center font-extrabold my-5">Already have an account? <Link className="text-green-500 hover:underline"
                                    to="/sign-in">Sign In</Link></p>
                                <div className="mb-12 border-b text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        Or sign up with e-mail
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-xs">

                                    {/* name */}
                                    <input {...register("name", { required: true, })}
                                        className="w-full px-8 py-4 mb-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green-400 focus:bg-white"
                                        type="text" placeholder="Your Name" />

                                    {/* Role */}
                                    <select
                                        {...register("role", { required: true, })}
                                        defaultValue="User" 
                                        className="w-full mb-5 px-8 py-4 font-medium text-gray-500 text-sm rounded-lg  bg-gray-100 border border-gray-200  focus:outline-none focus:border-green-400 focus:bg-white"
                                        >
                                        <option disabled className="font-medium text-gray-500 text-sm ">Our Role</option>
                                        <option className="font-medium text-gray-500 text-sm " value="Admin">Admin</option>
                                        <option className="font-medium text-gray-500 text-sm " value="Seller">Seller</option>
                                        <option className="font-medium text-gray-500 text-sm " value="User">User</option>

                                    </select>

                                    {/* email */}
                                    <input
                                        {...register("email", { required: true, })}
                                        className="w-full  px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green-400 focus:bg-white"
                                        type="email" placeholder="Email" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}

                                    {/* Password */}
                                    <input
                                        {...register("password", {
                                            required: true, minLength: 6, maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}

                                        className="w-full px-8  py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green-400 focus:bg-white mt-5"
                                        type={showPassword ? "text" : "password"} placeholder="Password" />

                                    {/* password show  */}
                                    <span className="relative w-[30px] text-xl flex justify-end -top-8 left-[87%] ">
                                        {showPassword ? (
                                            <FaEye
                                                className="hover:cursor-pointer"
                                                onClick={handleShowPassword}
                                            />
                                        ) : (
                                            <FaEyeSlash
                                                className="hover:cursor-pointer"
                                                onClick={handleShowPassword}
                                            />
                                        )}
                                    </span>

                                    {/* password not vaild then error show */}
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                                    {/* Confirm Password  */}
                                    <input
                                        {...register("confirmPassword", {
                                            required: true,
                                            validate: (value) =>
                                                value === password || "Passwords do not match",

                                        })}

                                        className="w-full px-8  py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-green-400 focus:bg-white mt-5"
                                        type="password" placeholder="Confirm Password" />

                                    {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}

                                    <button
                                        className="mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-slate-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">
                                            Sign Up
                                        </span>
                                    </button>
                                    <div className="flex items-center gap-2 justify-center">

                                        <input type="checkbox" {...register("terms", { required: true, })} className="checkbox" />

                                        <p className="mt-4 text-xs text-gray-600 text-center">
                                            I agree to abide by
                                            <a href="#" className="border-b border-gray-500 border-dotted mx-1 text-green-500">
                                                Terms of Service
                                            </a>
                                            and its
                                            <a href="#" className="border-b border-gray-500 border-dotted  mx-1 text-green-500 ">
                                                Privacy Policy
                                            </a>
                                        </p>
                                    </div>
                                    {errors.terms && (<p className="text-red-500 text-xs mt-1">You must agree to the Terms of Service and Privacy Policy</p>)}
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;