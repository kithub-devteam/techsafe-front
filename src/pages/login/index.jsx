import React, { useState } from "react"
import { useAuth } from "../../Authentications"
import facebook from "../../assets/facebook.png"
import logo from "../../assets/logo.png"
import google from "../../assets/google.png"
import twiter from "../../assets/twiter.png"
import { IoIosMail, IoIosLock, IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
    const { login } = useAuth()
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="bg-[#E3E3E3] w-full h-screen flex lg:px-2  md:px-10 lg:py-10 ">
            <div className="w-full md:w-4/5 m-auto h-full flex flex-col md:flex-row bg-white md:rounded-[24px]">
                <div className="w-full md:w-1/3 h-full lg:border-b-2 md:border-b-0 md:border-r-2 border-[#E3E3E3] p-5 md:p-10 rounded-t-[24px] md:rounded-tr-none md:rounded-l-[24px] relative lg:overflow-hidden">
                    <div className="w-full full md:h-[120px] flex items-center justify-center mb-2 px-6 md:px-12">
                        <img src={logo} alt="logo" className="w-full h-full" />
                    </div>
                    <div className="w-full h-max">
                        <div className="w-full mt-10">
                            <div className="text-[#000465] text-[25px] text-center font-bold pb-5 border-b-2 border-[#E3E3E3]"> Bon retour !</div>
                            <div className="text-[#606060] text-[16px] text-center font-sans  pb-5 pt-5">Sauvons des vies grace a la technologie</div>
                        </div>
                        <div className="w-full flex items-end justify-center">
                            <Link to="/signup" className="w-2/3 h-[20px] bg-[#0008e26c] text-white rounded-[15px] text-center flex items-center p-4 justify-center cursor-pointer">
                                creer un compte
                            </Link>
                        </div>
                    </div>
                    <div className="w-full grid justify-items-center mt-5 grid-cols-3 md:h-[150px] h-max md:absolute md:bottom-0 md:right-0 md:bg-[#E0E1FA]  md:rounded-tl-[20rem] md:rounded-tr-[20rem]">
                        <div className="w-[30px] md:top-[35px]  cursor-pointer md:left-[20px] h-[30px]  text-white z-10 rounded-full font-bold flex items-center justify-center md:absolute">
                            <img src={facebook} alt="facebook" className="w-full h-full" />
                        </div>
                        <div className="w-[30px] md:top-[-10px] cursor-pointer left-2/4 h-[30px]  text-white z-10 rounded-full font-bold flex items-center justify-center md:absolute">
                            <img src={google} alt="google" className="w-full h-full" />
                        </div>
                        <div className="w-[30px] md:top-[35px] cursor-pointer md:right-[20px] h-[30px]  text-white z-10 rounded-full font-bold flex items-center justify-center md:absolute">
                            <img src={twiter} alt="twiter" className="w-full h-full" />
                        </div>
                        <div className="w-full md:h-[150px] h-max md:absolute md:bottom-0 md:right-0 bg-[#E0E1FA] md:rounded-tl-[20rem] md:rounded-tr-[20rem] sm:hidden" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 h-full p-5 lg:p-10 bg-white  rounded-b-[24px] md:rounded-l-none md:rounded-r-[24px]  ">
                    <div >
                        <div className="text-[#000465] text-[18px] lg:text-[25px] text-center font-bold pb-0">Se connecter a votre compte</div>
                        <div className="text-[#606060] lg:w-3/5 m-auto text-[16px] text-center font-sans  pb-5 pt-3">Veuillez entrer votre email ou numero de telephone et votre mot de passe</div>

                        <div className="w-[47%] m-auto lg:mt-3 h-1 text-[#E3E3E3] lg:border-b-2" />
                        {/* -==================inputs================== */}

                        <div className="lg:w-3/5 h-max m-auto mt-5 lg:mt-10 flex flex-col gap-4">

                            <div className="w-full h-[50px] rounded-xl  bg-[#E3E3E3] relative">
                                <IoIosMail className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                                <input type="text" className="w-full rounded-xl h-full border-0 outline-0 bg-inherit pl-10  " name="email" id="eamil" placeholder="Email/Numero de telephone" />
                            </div>
                            <div className="w-full h-[50px] rounded-xl  bg-[#E3E3E3] relative">
                                <IoIosLock className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                                {
                                    showPassword ? <IoIosEyeOff onClick={() => setShowPassword(!showPassword)} className="cursor-pointer text-[#606060] text-2xl absolute right-2 top-1/2 -translate-y-1/2" /> :
                                        <IoIosEye onClick={() => setShowPassword(!showPassword)} className="cursor-pointer text-[#606060] text-2xl absolute right-2 top-1/2 -translate-y-1/2" />
                                }
                                <input type={showPassword ? "text" : "password"} className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit" name="password" id="password" placeholder="Nouveau mot de passe" />
                            </div>

                            <div className="w-full h-[40px] bg-[#0008e26c]  text-white rounded-[15px] text-center flex items-center p-4 mt-4 justify-center cursor-pointer">
                                <div>Se connecter</div>
                            </div>

                            <Link to="/forgot-password" className="w-full  text-[blue]    text-end  mt-4 cursor-pointer">
                                <div>Mot de passe oublié</div>
                            </Link>
                        </div>




                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login