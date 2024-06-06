import React from "react";
function Ind0(){
    return (
        <div className="grid grid-cols-3 w-full gap-8 min-h-24">
            <div className=" rounded-2xl text-center flex flex-col items-center justify-center text-2xl font-semibold bg-gradient-to-r from-[#e98dd0] to-[#d348e2] bg-clip-text text-transparent bg-[#f1e9fc]">
                <p className="bg-gradient-to-r from-[#e98dd0] to-[#d348e2] bg-clip-text text-transparent">Automated</p>
                <p className="bg-gradient-to-r from-[#e98dd0] to-[#d348e2] bg-clip-text text-transparent">Invoice</p>
                <p className="bg-gradient-to-r from-[#e98dd0] to-[#d348e2] bg-clip-text text-transparent">Reconciliation</p>
            </div>
            <div className="  rounded-2xl text-center flex flex-col items-center justify-center text-2xl font-semibold  bg-[#f1e9fc]">
                <p className="bg-gradient-to-r from-[#e98dd0] to-[#d348e2] bg-clip-text text-transparent">Channel wise</p>
                <p className="bg-gradient-to-r from-[#e98dd0] to-[#d348e2] bg-clip-text text-transparent">Sales</p>
                <p className="bg-gradient-to-r from-[#e98dd0] to-[#d348e2] bg-clip-text text-transparent">Classification</p>
            </div>
        </div>
    )
}
export default Ind0;