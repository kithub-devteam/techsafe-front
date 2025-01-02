import React, { useState, useCallback, useEffect } from "react"
import facebook from "../../assets/facebook.png"
import logo from "../../assets/logo.png"
import google from "../../assets/google.png"
import twiter from "../../assets/twiter.png"
import { IoMdBusiness } from "react-icons/io";
import { GiWorld } from "react-icons/gi";
import { BsPersonStanding } from "react-icons/bs";
import { IoIosPerson, IoIosMail, IoIosLock, IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Entreprise from "./Entreprise"
import MetterInput from "./MetterInput"
import Ong from "./Ong"
import Personnel from "./Personnel"
import { SiMinutemailer } from "react-icons/si";
import Verification from "./verification"
import { GrNext } from "react-icons/gr";
import api from "../../services/api";
import { useAuth } from "../../Authentications"



const Signup = () => {
    const [loading, setLoading] = useState(false);
    const [isFocused, setIsFocused] = useState(false)//pour savoir si le mot de passe est focus
    const [nextpage, setNextpage] = useState(false)//pour savoir si on est sur la page de additionnal data
    const [showPassword, setShowPassword] = useState(false)//pour savoir si on affiche le mot de passe ou son oeil
    const [verification, setVerification] = useState(false)//pour savoir si on est sur la page de verification
    const [strength, setStrength] = useState({//pour savoir la force du mot de passe
        strength: 0,
        color: "red"
    })
    const navigate = useNavigate();
const {setUser} = useAuth()
    const [data, setData] = useState({//les données de l'utilisateur
        username: "",//le username de l'utilisateur
        email: "",//l'email de l'utilisateur
        password: "",//le mot de passe de l'utilisateur
        password_confirm: "",//le mot de passe de l'utilisateur retapé
        role: "personnel",//le type de compte de l'utilisateur par defaut
        idrole: null,//l'id du role de l'utilisateur par defaut
    })

    const handleChange = ({ currentTarget: input }) => {//pour changer les données de l'utilisateur lors d'un changement de valeur
        setData({ ...data, [input.name]: input.value });
    };

    const handleChangeAdditionalData = ({ currentTarget: input }) => {//pour changer les données additionnelles de l'utilisateur lors d'un changement de valeur
        setData({ ...data, [input.name]: input.value });
    };

    const changeAccountType = (type) => {//pour changer le type de compte de l'utilisateur

        setData({ ...data, role: type });
    };

    const debouncedCalculateStrength = useCallback(//pour calculer la force du mot de passe avec un debounce
        debounce((value) => {
            const result = calcutStrength(value);
            setStrength(result);
        }, 300),
        []
    );

    function debounce(func, wait) {//pour faire un debounce
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

    useEffect(() => {//pour calculer la force du mot de passe avec un debounce lors d'un changement de valeur du mot de passe
        debouncedCalculateStrength(data.password);
        return () => debouncedCalculateStrength.cancel;
    }, [data.password, debouncedCalculateStrength]);

    const calcutStrength = (password) => {//la fonction pour calculer la force du mot de passe
        const hasUpperCase = /[A-Z]/.test(password);//pour savoir si le mot de passe contient une lettre majuscule
        const hasLowerCase = /[a-z]/.test(password);//pour savoir si le mot de passe contient une lettre minuscule
        const hasNumbers = /\d/.test(password);//pour savoir si le mot de passe contient un nombre
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);//pour savoir si le mot de passe contient un caractère spécial
        const isLongEnough = password.length >= 6;//pour savoir si le mot de passe est long enough

        let newStrength = 0;//la force du mot de passe
        let color = "red";//la couleur de la force du mot de passe par defaut

        if (hasUpperCase) newStrength += 1;//si le mot de passe contient une lettre majuscule, on augmente la force de 1
        if (hasLowerCase) newStrength += 1;//si le mot de passe contient une lettre minuscule, on augmente la force de 1    
        if (hasNumbers) newStrength += 1;//si le mot de passe contient un nombre, on augmente la force de 1
        if (hasSpecialChar) newStrength += 1;//si le mot de passe contient un caractère spécial, on augmente la force de 1
        if (isLongEnough) newStrength += 1;//si le mot de passe est long enough, on augmente la force de 1

        if (newStrength >= 4) {
            color = "green";//si la force du mot de passe est >= 4, on change la couleur en green
        } else if (newStrength >= 2) {
            color = "yellow";//si la force du mot de passe est >= 2, on change la couleur en yellow
        }

        return { strength: newStrength, color: color };//on retourne la force et la couleur de la force du mot de passe
    }
    const CheckIsNumberOrEmail = (value) => {//la fonction pour vérifier si la valeur est un numéro de téléphone ou un email
        return /^\d+$/.test(value) || /^\S+@\S+$/.test(value);
    }


    const handleSubmit = async () => {//la fonction pour envoyer les données de l'utilisateur à l'api
        console.log(data);
        if (data.password !== data.password_confirm) {//si les mots de passe ne correspondent pas
            alert("Les mots de passe ne correspondent pas");
            return;
        }
        if (!CheckIsNumberOrEmail(data.email)) {//si l'email ou le numéro de téléphone est invalide
            alert("L'email ou le numéro de téléphone est invalide");
            return;
        }
        for (const key in data) {//pour chaque donnée de l'utilisateur
            if (key === 'additionalData') {
                // Appliquer trim sur toutes les valeurs de additionalData
                for (const subKey in data.additionalData) {
                    if (data.additionalData[subKey]) {
                        data.additionalData[subKey] = data.additionalData[subKey].trim();
                    }
                }
                continue;
            }
            if (!data[key]) continue; // on skip les valeurs vides
            data[key] = data[key].trim();//on retire les espaces
        }
        setLoading(true);
        try {

            if (data.role === "personnel") {
                const responseRoles = await api.get("auth/available-roles/");
                console.log(responseRoles);
                if (responseRoles.status === 200) {
                    let newRole = responseRoles.data.find(rolep => rolep.role === "chercheur")
                    if (newRole) {
                        data.idrole = newRole.id;
                        data.role = newRole.role
                        console.log(data, newRole)
                        const response = await api.post("auth/signup/", data);
                        setUser(response.data.user)
                        localStorage.setItem("access", response.data.access);
                        localStorage.setItem("refresh", response.data.refresh);
                        navigate("/");
                        console.log(response);
                    } else {
                        alert("le role personnel n est disponnible pour le moment")
                        return
                    }
                } else {
                    alert("something went wrong ")
                }
            }
            if (data.role === "ong") {
                const responseRoles = await api.get("auth/available-roles/");
                console.log(responseRoles);
                if (responseRoles.status === 200) {
                    let newRole = responseRoles.data.find(rolep => rolep.role === "acteur_indirect")
                    if (newRole) {
                        data.idrole = newRole.id;
                        data.role = newRole.role
                        console.log(data, newRole)
                        const response = await api.post("auth/signup/", data);
                        setUser(response.data.user)
                        localStorage.setItem("access", response.data.access);
                        localStorage.setItem("refresh", response.data.refresh);
                        navigate("/");
                        console.log(response);
                    } else {
                        alert("le role ONG n est disponnible pour le moment ")
                        return
                    }
                } else {
                    alert("something went wrong ")
                }
            }
            if (data.role === "entreprise") {
                const responseRoles = await api.get("auth/available-roles/");
                console.log(responseRoles);
                if (responseRoles.status === 200) {
                    let newRole = responseRoles.data.find(rolea => rolea.role === "acteur_direct")
                    if (newRole) {
                        data.idrole = newRole.id;
                        data.role = newRole.role
                        const response= await api.post("auth/signup/", data);
                        setUser(response.data.user)
                        localStorage.setItem("access", response.data.access);
                        localStorage.setItem("refresh", response.data.refresh);
                        navigate("/");
                        console.log(response);
                    } else {
                        alert("le role entreprise n est disponnible pour le moment")
                        return
                    }
                } else {
                    alert("something went wrong ")
                }
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
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

                            <div onClick={() => changeAccountType("entreprise")} className={`bg-[#E9FBFB]  cursor-pointer flex items-center justify-center rounded-2xl flex-col gap-3 hover:border-2 hover:border-[blue] ${data.role === "entreprise" ? "border-2 border-[blue]" : ""}`}>
                                <IoMdBusiness className="text-[#606060] text-2xl" />
                                <div className="text-center text-base hover:text-[blue] text-[#606060]">Entreprise</div>
                            </div>
                            <div onClick={() => changeAccountType("ong")} className={`bg-[#E9FBFB] cursor-pointer flex items-center justify-center rounded-2xl flex-col gap-3 hover:border-2 hover:border-[blue] ${data.role === "ong" ? "border-2 border-[blue]" : ""}`}>

                                <GiWorld className="text-[#606060] text-2xl" />
                                <div className="text-center text-base hover:text-[blue] text-[#606060]">ONG</div>

                            </div>
                            <div onClick={() => changeAccountType("personnel")} className={`bg-[#E9FBFB] cursor-pointer flex items-center justify-center rounded-2xl flex-col gap-3 hover:border-2 hover:border-[blue] ${data.role === "personnel" ? "border-2 border-[blue]" : ""}`}>

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
                                        <input type="text" onChange={handleChange} className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit text-base " name="username" id="username" value={data.username} placeholder="Nom" />
                                    </div>
                                    <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                                        <IoIosMail className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                                        <SiMinutemailer onClick={() => setVerification(true)} className="text-[#606060] text-2xl absolute right-2 top-1/2 -translate-y-1/2" />
                                        <input type="text" onChange={handleChange} className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit " name="email" id="eamil" value={data.email} placeholder="Email/Numero de telephone" />
                                    </div>
                                    <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                                        <IoIosLock className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                                        {
                                            showPassword ? <IoIosEyeOff onClick={() => setShowPassword(!showPassword)} className="cursor-pointer text-[#606060] text-2xl absolute right-2 top-1/2 -translate-y-1/2" /> :
                                                <IoIosEye onClick={() => setShowPassword(!showPassword)} className="cursor-pointer text-[#606060] text-2xl absolute right-2 top-1/2 -translate-y-1/2" />
                                        }
                                        <input
                                            onChange={handleChange}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            value={data.password}
                                            type={showPassword ? "text" : "password"}
                                            className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit"
                                            name="password"
                                            id="password"
                                            placeholder="Nouveau mot de passe"
                                        />
                                    </div>
                                    {
                                        isFocused && <MetterInput strength={strength.strength} color={strength.color} />
                                    }

                                    <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                                        <IoIosLock className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                                        <input type="password" onChange={handleChange} className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit" name="password_confirm" value={data.password_confirm} id="password_confirm" placeholder="Retapez le mot de passe" />
                                    </div>
                                    <div onClick={() => setNextpage(true)} className="w-1/2 h-[20px] bg-[#0008e26c] m-auto text-white rounded-[15px] text-center flex items-center p-4 mt-4 justify-center cursor-pointer">
                                        Continue <GrNext className="text-sm" />
                                    </div>
                                    <Verification verification={verification} setVerification={setVerification} />
                                </div>


                            )
                        }
                        {
                            nextpage && data.role === "entreprise" && <Entreprise
                                data={data}
                                setNextpage={setNextpage}
                                handleChangeAdditionalData={handleChangeAdditionalData}
                                handleSubmit={handleSubmit}
                                loading={loading}
                            />
                        }
                        {
                            nextpage && data.role === "ong" && <Ong
                                data={data}
                                setNextpage={setNextpage}
                                handleChangeAdditionalData={handleChangeAdditionalData}
                                handleSubmit={handleSubmit}
                                loading={loading}
                            />
                        }
                        {
                            nextpage && data.role === "personnel" && <Personnel
                                data={data}
                                setNextpage={setNextpage}
                                handleChangeAdditionalData={handleChangeAdditionalData}
                                handleSubmit={handleSubmit}
                                loading={loading}
                            />
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