import React, { useState, useCallback, useEffect } from "react"
import facebook from "../../assets/facebook.png"
import logo from "../../assets/logo.png"
import google from "../../assets/google.png"
import twiter from "../../assets/twiter.png"
import { IoMdBusiness } from "react-icons/io";
import { GiWorld } from "react-icons/gi";
import { BsPersonStanding } from "react-icons/bs";
import { IoIosPerson, IoIosMail, IoIosLock, IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import Entreprise from "./Entreprise"
import MetterInput from "./MetterInput"
import Ong from "./Ong"
import Personnel from "./Personnel"
import { SiMinutemailer } from "react-icons/si";
import Verification from "./verification"
import { GrNext } from "react-icons/gr";

const Signup = () => {
    const [type, setType] = useState({
        entreprise: false,
        ong: false,
        personnel: true
    })
    const [isFocused, setIsFocused] = useState(false)
    const [nextpage, setNextpage] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [verification, setVerification] = useState(false)
    const [strength, setStrength] = useState({
        strength: 0,
        color: "red"
    })
    const [passwordValue, setPasswordValue] = useState("");

    const debouncedCalculateStrength = useCallback(
        debounce((value) => {
            const result = calcutStrength(value);
            setStrength(result);
        }, 300),
        []
    );

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    useEffect(() => {
        debouncedCalculateStrength(passwordValue);
        return () => debouncedCalculateStrength.cancel;
    }, [passwordValue, debouncedCalculateStrength]);

    const calcutStrength = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLongEnough = password.length >= 6;

        let newStrength = 0;
        let color = "red";

        if (hasUpperCase) newStrength += 1;
        if (hasLowerCase) newStrength += 1;
        if (hasNumbers) newStrength += 1;
        if (hasSpecialChar) newStrength += 1;
        if (isLongEnough) newStrength += 1;

        if (newStrength >= 4) {
            color = "green";
        } else if (newStrength >= 2) {
            color = "yellow";
        }

        return { strength: newStrength, color: color };
    }

    return (
        <div className="bg-[#E3E3E3] w-full h-screen flex lg:px-2 lg:py-10 sm:px-0 md:px-10 ">
            <div className="w-full md:w-4/5 m-auto h-full flex flex-col md:flex-row bg-white lg:rounded-[24px]">
                <div className="w-full md:w-1/3 h-full lg:border-b-2 md:border-b-0 md:border-r-2 border-[#E3E3E3] p-5 md:p-10 rounded-t-[24px] md:rounded-tr-none md:rounded-l-[24px] relative lg:overflow-hidden">
                    <div className="w-full full md:h-[120px] flex items-center justify-center mb-2 px-6 md:px-12">
                        <img src={logo} alt="logo" className="w-full h-full" />
                    </div>
                    <div className="w-full h-max">
                        <div className="w-full mt-10">
                            <div className="text-[#000465] text-[25px] text-center font-bold pb-5 border-b-2 border-[#E3E3E3]"> Bienvenue !</div>
                            <div className="text-[#606060] text-[16px] text-center font-sans  pb-5 pt-5">Sauvons des vies grace a la technologie</div>
                        </div>
                        <div className="w-full flex items-end justify-center">
                            <Link to="/login" className="w-1/2 h-[20px] bg-[#0008e26c] text-white rounded-[15px] text-center flex items-center p-4 justify-center cursor-pointer">
                                Se connecter
                            </Link>
                        </div>
                    </div>
                    <div className="w-full grid justify-items-center mt-5 grid-cols-3 md:h-[150px] h-max md:absolute md:bottom-0 md:right-0 md:bg-[#E0E1FA]  md:rounded-tl-[20rem] md:rounded-tr-[20rem]">
                        <div className="w-[30px] md:top-[35px] sm:top-0 cursor-pointer md:left-[20px] h-[30px]  text-white z-10 rounded-full font-bold flex items-center justify-center md:absolute">
                            <img src={facebook} alt="facebook" className="w-full h-full" />
                        </div>
                        <div className="w-[30px] md:top-[-10px] cursor-pointer left-2/4 h-[30px]  text-white z-10 rounded-full font-bold flex items-center justify-center md:absolute">
                            <img src={google} alt="google" className="w-full h-full" />
                        </div>
                        <div className="w-[30px] md:top-[35px] cursor-pointer md:right-[20px] h-[30px]  text-white z-10 rounded-full font-bold flex items-center justify-center md:absolute">
                            <img src={twiter} alt="twiter" className="w-full h-full" />
                        </div>
                        <div className="w-full md:h-[150px] h-max md:absolute md:bottom-0 md:right-0 md:bg-[#E0E1FA] md:rounded-tl-[20rem] md:rounded-tr-[20rem] md:filter md:blur-[5px] " />

                    </div>
                </div>
                <div className="w-full md:w-2/3 h-full bg-white  md:rounded-b-[24px] md:rounded-l-none md:rounded-r-[24px] p-5 md:p-10">
                    <div >
                        <div className="text-[#000465] text-[25px] text-center font-bold pb-0">Creer un compte</div>
                        <div className="text-[#606060] text-[16px] text-center font-sans  pb-5 pt-5">Quel type de compte voulez vous creer</div>

                        {/* ================les type comptes================= */}
                        <div className="grid grid-cols-3 gap-5 w-full md:w-3/5 m-auto h-[80px]">

                            <div onClick={() => setType({ ong: false, personnel: false, entreprise: true })} className={`bg-[#E9FBFB]  cursor-pointer flex items-center justify-center rounded-2xl flex-col gap-3 hover:border-2 hover:border-[blue] ${type.entreprise ? "border-2 border-[blue]" : ""}`}>
                                <IoMdBusiness className="text-[#606060] text-2xl" />
                                <div className="text-center text-base hover:text-[blue] text-[#606060]">Entreprise</div>
                            </div>
                            <div onClick={() => setType({ personnel: false, entreprise: false, ong: true })} className={`bg-[#E9FBFB] cursor-pointer flex items-center justify-center rounded-2xl flex-col gap-3 hover:border-2 hover:border-[blue] ${type.ong ? "border-2 border-[blue]" : ""}`}>

                                <GiWorld className="text-[#606060] text-2xl" />
                                <div className="text-center text-base hover:text-[blue] text-[#606060]">ONG</div>

                            </div>
                            <div onClick={() => setType({ personnel: true, entreprise: false, ong: false })} className={`bg-[#E9FBFB] cursor-pointer flex items-center justify-center rounded-2xl flex-col gap-3 hover:border-2 hover:border-[blue] ${type.personnel ? "border-2 border-[blue]" : ""}`}>

                                <BsPersonStanding className="text-[#606060] text-2xl" />
                                <div className="text-center hover:text-[blue] text-[#606060] text-base">Personnel</div>

                            </div>
                        </div>

                        <div className="w-[47%] m-auto mt-3 h-1 text-[#E3E3E3] border-b-2" />

                        {/* -==================inputs================== */}
                        {
                            !nextpage && (
                                <div className="md:w-3/5 w-full h-max m-auto mt-7 flex flex-col gap-2">
                                    <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                                        <IoIosPerson className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                                        <input type="text" className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit text-base " name="nom" id="nom" placeholder="Nom" />
                                    </div>
                                    <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                                        <IoIosMail className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                                        <SiMinutemailer onClick={() => setVerification(true)} className="text-[#606060] text-2xl absolute right-2 top-1/2 -translate-y-1/2" />
                                        <input type="text" className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit " name="email" id="eamil" placeholder="Email/Numero de telephone" />
                                    </div>
                                    <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                                        <IoIosLock className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                                        {
                                            showPassword ? <IoIosEyeOff onClick={() => setShowPassword(!showPassword)} className="cursor-pointer text-[#606060] text-2xl absolute right-2 top-1/2 -translate-y-1/2" /> :
                                                <IoIosEye onClick={() => setShowPassword(!showPassword)} className="cursor-pointer text-[#606060] text-2xl absolute right-2 top-1/2 -translate-y-1/2" />
                                        }
                                        <input 
                                            onChange={(e) => setPasswordValue(e.target.value)} 
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            value={passwordValue}
                                            type={showPassword ? "text" : "password"} 
                                            className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit" 
                                            name="password" 
                                            id="password" 
                                            placeholder="Nouveau mot de passe" 
                                        />
                                    </div>
                                    {
                                        isFocused &&  <MetterInput strength={strength.strength} color={strength.color} />
                                    }
                                   
                                    <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                                        <IoIosLock className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                                        <input type="password" className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit" name="password-2" id="password-2" placeholder="Retapez le mot de passe" />
                                    </div>
                                    <div onClick={() => setNextpage(true)} className="w-1/2 h-[20px] bg-[#0008e26c] m-auto text-white rounded-[15px] text-center flex items-center p-4 mt-4 justify-center cursor-pointer">
                                        Continue <GrNext className="text-sm" />
                                    </div>
                                    <Verification verification={verification} setVerification={setVerification} />
                                </div>


                            )
                        }
                        {
                            nextpage && type.entreprise && <Entreprise setNextpage={setNextpage} />
                        }
                        {
                            nextpage && type.ong && <Ong setNextpage={setNextpage} />
                        }
                        {
                            nextpage && type.personnel && <Personnel setNextpage={setNextpage} />
                        }
                        {
                            !nextpage && <div className="w-full grid grid-cols-3 h-max mt-5 ">
                                <div className="text-[#606060] text-center cursor-pointer text-sm">About</div>
                                <div className="text-[#606060] text-center cursor-pointer text-sm">Contact</div>
                                <div className="text-[#606060] text-center cursor-pointer text-sm">Conditions d'utilisation</div>
                            </div>
                        }



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup