import React from "react";
import { GrPrevious } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineInterests } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";

const Personnel = (props) => {
    return (
        <div className="md:w-3/5 w-full h-max m-auto mt-3 flex flex-col gap-2">
            <div className="text-base font-bold mb-2 text-[#0008e2]">Informations du Personnel</div>
            <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                <MdAccountBalance className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                <input type="text" className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit text-base " name="institution" id="institution" placeholder="Institution" />
            </div>
            <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                <LuBriefcaseBusiness className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                <input type="text" className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit " name="poste" id="poste" placeholder="Poste occupé" />
            </div>
            <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                <FaUserGraduate className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                <input type="text" className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit " name="specialite" id="specialite" placeholder="Specialisation" />
            </div>
            <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                <MdOutlineInterests className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                <input type="text" className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit" name="recherche" id="recherche" placeholder="Centre d'interet de recherche" />
            </div>
            <div className="w-full flex items-center justify-between">
                <div onClick={() => props.setNextpage(false)} className="w-2/5 h-[20px] bg-[#0008e26c] m-auto text-white rounded-[15px] text-center flex items-center p-4 mt-4 justify-center cursor-pointer">
                    <GrPrevious className="text-sm" /> Precedent
                </div>
                <div className="w-2/5 h-[20px] bg-[#0008e26c] m-auto text-white rounded-[15px] text-center flex items-center p-4 mt-4 justify-center cursor-pointer">
                    <div>Valider</div>
                </div>
            </div>

        </div>
    )
}

export default Personnel