import React, { useState } from "react";
import footerlogo from "../../assets/footerlogo.png";
import logo from "../../assets/logo.png";
import chatbot1 from "../../assets/chatbot 1.png";
import violance from "../../assets/violance.jpg";
import kithub from "../../assets/kithub.webp";
import {
  FaBookOpen,
  FaFacebook,
  FaInstagramSquare,
  FaPlay,
  FaYoutube,
} from "react-icons/fa";
import { MdGroups, MdMenu, MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useAuth } from "../../Authentications";

const Introduction = () => {
  const [openModal, setopenModal] = useState(false);
  const { user } = useAuth();
  return (
    <div className="bg-white w-full h-screen ">
      <div className="w-[90%] mx-auto ">
        <div className="w-full h-[4rem] flex mt-3 items-center justify-between sticky top-0 z-10 bg-white">
          <div className="h-full w-20 flex items-center justify-center mr-5">
            <img src={logo} alt="logo" />
          </div>
          <div className=" hidden md:flex  h-full justify-between items-center md:w-[92%]">
            <div className="w-4/5">
              <div className="w-4/5 m-auto flex items-center justify-between rounded-[30px] py-3 px-4 bg-[#E8F9F3]">
                <div className="text-sm text-green-400 font-bold border-b border-b-green-400 ">
                  Acceuil
                </div>
                <div className="text-sm">A propos</div>
                <div className="text-sm">Activite</div>
                <div className="text-sm">Recherches</div>
                <div className="text-sm">Contacter</div>
              </div>
            </div>
            <div className="w-1/5 flex justify-between items-center">
              <Link to={"/conversations"} className="w-[4rem] cursor-pointer ">
                {" "}
                <img src={chatbot1} alt="robot" />
              </Link>
              {!user ? (
                <Link
                  to={"/login"}
                  className="bg-green-400 text-white font-bold py-2 px-3 rounded-[30px] cursor-pointer "
                >
                  Connexion
                </Link>
              ) : (
                <Link
                  to={"/"}
                  className="bg-green-400 rounded-md text-white font-bold py-2 px-3 cursor-pointer "
                >
                  {user.username}
                </Link>
              )}
            </div>
          </div>

          <MdMenu
            className="text-4xl md:hidden"
            onClick={() => setopenModal(true)}
          />
        </div>
        {/* ===================start popup drawer=========================== */}
        {openModal && (
          <div className="fixed z-10 filter bg-white top-0 left-0 h-screen w-full md:hidden">
            <div className="w-full h-[4rem] flex items-center justify-between px-4">
              <MdMenu
                className="text-4xl md:hidden"
                onClick={() => setopenModal(false)}
              />
              <div className="w-[150px] flex justify-end items-center ">
                {!user ? (
                  <Link
                    to={"/login"}
                    className="bg-green-400 text-white font-bold py-2 px-3 rounded-md ursor-pointer "
                  >
                    Connexion
                  </Link>
                ) : (
                  <Link
                    to={"/"}
                    className="bg-green-400 text-white font-bold py-2 px-3 rounded-md cursor-pointer "
                  >
                    {user.username}
                  </Link>
                )}
              </div>

            </div>

            <div className="w-full mr-auto py-20 px-4 ">
              <div className="bg-[#E8F9F3] text-[#4D54FE] px-3 py-4 my-1 rounded-md">
              <Link to={"/introduction"}>  Acceill</Link>   
              </div>
              <div className="bg-[#E8F9F3] px-3 py-4 my-1 rounded-md   ">
                A propos
              </div>
              <div className="bg-[#E8F9F3] px-3 py-4 my-1 rounded-md   ">
                Activite
              </div>
              <div className="bg-[#E8F9F3] px-3 py-4 my-1 rounded-md   ">
                Recherches
              </div>
              <div className="bg-[#E8F9F3] px-3 py-4 my-1 rounded-md   ">
                Contact
              </div>
              <div className="bg-[#E8F9F3] px-3 py-4 my-1 rounded-md   ">
              <Link to={"/conversations"}>  Discuter un bot</Link> 
                
              </div>
            </div>
          </div>
        )}

        {/* ===================end popup drawer=========================== */}

        <div className="mt-20 mb-5 md:w-max w-full">
          <div className="font-bold text-[35px] md:text-[45px] leading-none text-[#b9b9b9]  ">
            Ensembles <span className="text-[#5155BA] font-normal">Contre</span>{" "}
            Les
          </div>
          <div className="text-[35px] md:text-[45px] text-[#5155BA] font-normal">
            VIOLANCES BASEES SUR LE GENRE
          </div>
        </div>
        <div>Bâtissons un monde sain et sécure pour notre communauté</div>
        <div className="bg-green-400 w-max text-white font-bold py-2 px-3 rounded-[30px] cursor-pointer mt-2 ">
          Découvrir notre mission
        </div>

        <div className="w-full mt-10 h-max">
          <div className="w-full flex gap-5 flex-col md:flex-row">
            <div className="h-[15rem] relative w-full md:w-[30%] bg-[#E3E3E3] rounded-[1.1rem]">
              <div className="w-full h-full rounded-[1.1rem] flex items-center justify-start flex-col ">
                <div className="text-[8rem]">
                  <MdGroups />
                </div>
                <div className=" text-[#29292F] text-lg">
                  Rejoignez notre espace <br /> D'echange et de soutien
                </div>
              </div>
              <div className="absolute w-[11rem] flex gap-3 items-center justify-center p-4 h-16 bottom-[-17px] right-[-18px] bg-white rounded-[1.1rem]">
                <div className="font-bold text-sm text-black border-b-2 border-black">
                  Forums
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-green-400 text-white flex justify-center items-center">
                  <MdOutlineArrowOutward />
                </div>
              </div>
            </div>
            <div className="h-[15rem] relative w-full md:w-[40%] mx-auto bg-[#E3E3E3] rounded-[1.1rem]">
              <img
                src={kithub}
                alt="violance"
                className="w-full h-full rounded-[1.1rem] object-cover"
              />
              <div className="w-full h-full absolute top-0 left-0 rounded-[1.1rem] px-8 flex flex-col justify-center ">
                <div className="text-2xl font-semibold text-black">
                  Concours de jeune
                </div>
                <div className="text-base text-gray-800">
                  La solution moderne pour <br /> vos déplacements, celui de vos
                  biens{" "}
                </div>
              </div>
              <div className="absolute w-[15rem] flex gap-3 items-center justify-center p-4 h-16 bottom-[-17px] right-[-18px] bg-white rounded-[1.1rem]">
                <div className="font-bold text-sm text-black border-b-2 border-black">
                  Evènements
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-green-400 text-white flex justify-center items-center">
                  <MdOutlineArrowOutward />
                </div>
              </div>
            </div>
            <div className="h-[15rem] relative w-full md:w-[30%] bg-[#E3E3E3] rounded-[1.1rem]">
              <div className="w-full h-full rounded-[1.1rem] flex items-center justify-center flex-col ">
                <div className="text-[5rem]">
                  <FaPlay />
                </div>
                <div className=" text-[#29292F] text-lg">
                  Des vidéos pour Former et <br /> Accompagner
                </div>
              </div>
              <div className="absolute w-[11rem] flex gap-3 items-center justify-center p-4 h-16 bottom-[-17px] right-[-18px] bg-white rounded-[1.1rem]">
                <div className="font-bold text-sm text-black border-b-2 border-black">
                  Voir plus
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-green-400 text-white flex justify-center items-center">
                  <MdOutlineArrowOutward />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-5 mt-10 flex-col md:flex-row">
            <div className="h-[15rem] relative w-full  md:w-[30%]  rounded-[1.1rem]">
              <div className="w-full h-full flex justify-center  items-center flex-col">
                <img src={chatbot1} alt="robot" className="w-[9.5rem] mb-3" />

                <Link
                  to={"/converisations"}
                  className="bg-green-400 text-white font-bold py-2 px-3 rounded-[30px] cursor-pointer "
                >
                  Discuter avec notre chatbot
                </Link>
              </div>
            </div>

            <div className="h-[15rem] relative w-full  md:w-[30%] bg-[#E3E3E3] rounded-[1.1rem]">
              <div className="w-full h-full rounded-[1.1rem] flex items-center justify-center flex-col ">
                <div className="text-[5rem]">
                  <FaBookOpen />
                </div>
                <div className=" text-[#29292F] text-lg">
                  Découvrez des livres et articles <br /> Pour une bonne culture
                </div>
              </div>
              <div className="absolute w-[11rem] flex gap-3 items-center justify-center p-4 h-16 bottom-[-17px] right-[-18px] bg-white  rounded-[1.1rem]">
                <div className="font-bold text-sm text-black border-b-2 border-black">
                  Ressources
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-green-400 text-white flex justify-center items-center">
                  <MdOutlineArrowOutward />
                </div>
              </div>
            </div>
            <div className="h-[15rem] relative w-full md:w-[40%] mx-auto bg-[#E3E3E3] rounded-[1.1rem]">
              <img
                src={violance}
                alt="violance"
                className="w-full h-full rounded-[1.1rem] object-cover"
              />
              <div className="w-full h-full absolute top-0 left-0 rounded-[1.1rem] px-8 flex flex-col justify-center ">
                <div className="text-2xl font-semibold text-white">
                  Ce qu'ils disent de nous
                </div>
                <div className="text-base text-gray-100">
                  La solution moderne pour <br /> vos déplacements, celui de vos
                  biens{" "}
                </div>
              </div>
              <div className="absolute w-[15rem] flex gap-3 items-center justify-center p-4 h-16 bottom-[-17px] right-[-18px] bg-white rounded-[1.1rem]">
                <div className="font-bold text-sm text-black border-b-2 border-black">
                  Explorez les témoignages
                </div>
                <div className="w-[20px] h-[20px] rounded-full bg-green-400 text-white flex justify-center items-center">
                  <MdOutlineArrowOutward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================footer============================ */}
      <div className="w-full h-max bg-[#29292F]">
        <div className="w-[95%] md:w-full  mx-auto h-max bg-[#29292F] grid grid-cols-2  md:flex items-start  md:justify-around md:items-center gap-5 md:gap-0 mt-20">
          <div className="w-[165px] h-[149px] mt-10 md:mt-0 flex items-center justify-center ">
            <img src={footerlogo} alt="logo" />
          </div>

          <div className="mt-10 h-[288px] ">
            <div className="font-bold text-white mb-3">En Savoir plus</div>
            <div className="font-extralight text-[#e3e3e3] py-1">Tech Safe</div>
            <div className="font-extralight text-[#e3e3e3] py-1">
              Nos Articles
            </div>
            <div className="font-extralight text-[#e3e3e3] py-1">Evenement</div>
            <div className="font-extralight text-[#e3e3e3] py-1">Livres</div>
            <div className="font-extralight text-[#e3e3e3] py-1">
              Privecy policy
            </div>
            <div className="font-extralight text-[#e3e3e3] py-1">
              Contact us
            </div>
          </div>
          <div className="mt-10 h-[288px]">
            <div className="font-bold text-white mb-3">Contact Us</div>
            <div className="font-extralight text-[#e3e3e3] py-1">Tech Safe</div>
            <div className="font-extralight text-[#e3e3e3] py-1">
              Nos Articles
            </div>
            <div className="font-extralight text-[#e3e3e3] py-1">Evenement</div>
            <div className="font-extralight text-[#e3e3e3] py-1">Livres</div>
            <div className="font-extralight text-[#e3e3e3] py-1">
              Privecy policy
            </div>
            <div className="font-extralight text-[#e3e3e3] py-1">
              Contact us
            </div>
          </div>
          <div className="mt-10 h-[288px] flex items-center flex-col">
            <div className="font-bold text-white mb-3">Social Media</div>
            <div className="w-[90%] grid grid-cols-4 gap-2">
              <div className="w-10 h-10 font-semibold flex items-center justify-center  rounded-lg text-blue-800 text-xl">
                <FaFacebook />
              </div>
              <div className="w-10 h-10 font-semibold flex items-center justify-center  rounded-lg text-rose-500 text-xl">
                <FaInstagramSquare />
              </div>
              <div className="w-10 h-10 font-semibold flex items-center justify-center  rounded-lg text-red-500 text-xl">
                <FaYoutube />
              </div>
              <div className="w-10 h-10 font-semibold flex items-center justify-center  rounded-lg text-black text-xl">
                <FaSquareXTwitter />
              </div>
            </div>
            <div className="w-[100px] h-[149px] flex items-center justify-center ">
              <img src={chatbot1} alt="robot" />
            </div>
          </div>
        </div>
        <div className="flex justify-center border-t text-sm text-[#e3e3e3] border-t-[#e3e3e3b7] p-2 w-[80%] m-auto">
          @2024 Tech Safe | All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Introduction;
