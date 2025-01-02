import React from "react";
import { IoMdBusiness } from "react-icons/io";
import { MdOutlineNumbers } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";


const Entreprise = (props) => {
    return (
        <div className="md:w-3/5 w-full h-max m-auto mt-7 flex flex-col gap-2">
            <div className="text-base font-bold mb-2 text-[#0008e2]">Informations de l'entreprise</div>
            <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                <IoMdBusiness className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                <input type="text" value={props.data.entreprise} onChange={props.handleChangeAdditionalData} className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit text-base " name="company_name" id="company_name" placeholder="Nom d'entreprise" />
            </div>
            <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                <MdOutlineNumbers className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                <input type="text" value={props.data.numero} onChange={props.handleChangeAdditionalData} className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit " name="registration_number" id="registration_number" placeholder="Numero d'Enregistrement" />
            </div>
            <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                <FaUserGroup className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                <input type="text" value={props.data.taille} onChange={props.handleChangeAdditionalData} className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit " name="company_size" id="company_size" placeholder="Taille d'entreprise" />
            </div>
            <div className="w-full h-[40px] rounded-xl  bg-[#E3E3E3] relative">
                <MdCategory className="text-[#606060] text-2xl absolute left-2 top-1/2 -translate-y-1/2" />
                <input type="text" value={props.data.secteur} onChange={props.handleChangeAdditionalData} className="w-full pl-10 rounded-xl h-full border-0 outline-0 bg-inherit" name="industry" id="industry" placeholder="Secteur d'activité" />
            </div>
            <div className="w-full flex items-center justify-between">
                <div onClick={() => props.setNextpage(false)} className="w-2/5 h-[20px] bg-green-400 m-auto text-white rounded-[15px] text-center flex items-center p-4 mt-4 justify-center cursor-pointer">
                    <GrPrevious className="text-sm" /> Precedent
                </div>
                <div onClick={props.handleSubmit}  className={`w-2/5 h-[20px] ${props.loading ? 'bg-gray-400' : 'bg-green-400'} m-auto text-white rounded-[15px] text-center flex items-center p-4 mt-4 justify-center cursor-pointer`}>
                    {props.loading ? <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div> : <div> {'Valider'} </div>}
                </div>
            </div>
            {props.error && <div className="text-red-500 text-sm text-center">{props.error}</div>}

        </div>
    )
}

export default Entreprise