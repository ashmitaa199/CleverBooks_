import React from "react"
import { SquareArrowRight } from "lucide-react"
export default function Ind1(){
    
    return (
        
        <div className="grid grid-cols-3 w-full gap-6 min-h-24">
            <div className="bg-[#f1e9fc] rounded-2xl text-center flex flex-col items-center justify-center font-sans gap-1 text-base"><span className="font-semibold text-2xl font-customFont bg-gradient-to-r from-[#e98dd0] to-[#d348e2] bg-clip-text text-transparent">upto 95%</span >Demand Fulfilment</div>
            <div className="bg-[#f1e9fc] rounded-2xl text-center flex flex-col items-center justify-center gap-1 font-customFont text-base"><span className="font-semibold text-2xl font-customFont bg-gradient-to-r from-[#e98dd0] to-[#d348e2] bg-clip-text text-transparent">{`< 3%`} <br/></span>Daily Stock-out</div>
            <div className="bg-[#f1e9fc] rounded-2xl text-center flex flex-col justify-center items-center gap-1 cursor-pointer text-base">
                <p>Read story</p>
                <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dd545ea3ebe_Vector.svg" alt="" />
            </div>
        </div>
    )
}