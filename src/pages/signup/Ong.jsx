import React from "react";
import { MdOutlineNumbers } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";
import { GiWorld } from "react-icons/gi";
import { LuBriefcaseBusiness } from "react-icons/lu";


const Ong = (props) => {
    return (
        <div className="md:w-3/5 w-full h-max m-auto mt-3 flex flex-col gap-2">
            <div className="text-base font-bold mb-2 text-[#0008e2]">Informations de l'ONG</div>
            <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                <GiWorld className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                <input type="text" value={props.data.organisation} onChange={props.handleChangeAdditionalData} className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit text-base " name="organization_name" id="organization_name" placeholder="Nom d'organisation" />
            </div>
            <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                <MdOutlineNumbers className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                <input type="text" value={props.data.numero} onChange={props.handleChangeAdditionalData} className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit " name="registration_id" id="registration_id" placeholder="Numero d'Enregistrement" />
            </div>
            <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                <MdCategory className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                <input type="text" value={props.data.type} onChange={props.handleChangeAdditionalData} className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit " name="organization_type" id="organization_type" placeholder="Type d'organisation" />
            </div>
            <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                <LuBriefcaseBusiness className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                <input type="text" value={props.data.domaine} onChange={props.handleChangeAdditionalData} className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit" name="focus_area" id="focus_area" placeholder="Domaine d'intervention" />
            </div>
            <div className="w-full flex items-center justify-between">
                <div onClick={() => props.setNextpage(false)} className="w-2/5 h-[20px] bg-[#0008e26c] m-auto text-white rounded-[15px] text-center flex items-center p-4 mt-4 justify-center cursor-pointer">
                    <GrPrevious className="text-sm" /> Precedent
                </div>
                <div onClick={props.handleSubmit} className={`w-2/5 h-[20px] ${props.loading ? 'bg-gray-400' : 'bg-[#0008e26c]'} m-auto text-white rounded-[15px] text-center flex items-center p-4 mt-4 justify-center cursor-pointer`}>
                    {props.loading ? <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div> : <div> {'Valider'} </div>}
                </div>
            </div>
            {props.error && <div className="text-red-500 text-sm text-center">{props.error}</div>}

        </div>
    )
}

export default Ong