import React from "react";

export default function MetterInput({ strength, color }) {
    return (

        <div className="w-full h-max grid grid-cols-5 gap-2 ">
            <div className={`w-full h-2 rounded-full bg-${strength > 0 ? color + '-500' : "[#E3E3E3]"}`} ></div>
            <div className={`w-full h-2 rounded-full bg-${strength > 1 ? color + '-500' : "[#E3E3E3]"}`}></div>
            <div className={`w-full h-2 rounded-full bg-${strength > 2 ? color + '-500' : "[#E3E3E3]"}`}></div>
            <div className={`w-full h-2 rounded-full bg-${strength > 3 ? color + '-500' : "[#E3E3E3]"}`}></div>
            <div className={`w-full h-2 rounded-full bg-${strength > 4 ? color + '-500' : "[#E3E3E3]"}`}></div>
        </div>

    )
}