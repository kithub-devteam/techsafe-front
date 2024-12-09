import React from "react";

export default function MetterInput({ strength, color }) {
    return (

        <div className="w-full h-max grid grid-cols-5 gap-2 ">
            <div className={`w-full h-2 rounded-full transition-all duration-300` } style={{ backgroundColor: strength > 0 ? 'red' : '#E3E3E3' }}></div>
            <div className={`w-full h-2 rounded-full transition-all duration-300` } style={{ backgroundColor: strength > 1 ? 'red' : '#E3E3E3' }}></div>
            <div className={`w-full h-2 rounded-full transition-all duration-300` } style={{ backgroundColor: strength > 2 ? 'yellow' : '#E3E3E3' }}></div>
            <div className={`w-full h-2 rounded-full transition-all duration-300` } style={{ backgroundColor: strength > 3 ? 'blue' : '#E3E3E3' }}></div>
            <div className={`w-full h-2 rounded-full transition-all duration-300` } style={{ backgroundColor: strength > 4 ? 'green' : '#E3E3E3' }}></div>
        </div>

    )
}