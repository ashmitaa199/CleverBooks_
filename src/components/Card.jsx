import React from "react"
import cardData from "@/assets/cardData";
function CardComp(props){
    
    return(
       
            
            <div className=" w-full bg-[#f1e9fc] flex flex-col gap-6 py-5 px-8 rounded-xl font-customFont ">
                <img src={props.imgLink} alt="" className="h-1/6 w-1/3" />
               <h1 className="text-xl font-semibold font-customFont">{props.cardHeading}</h1>
                <p className="text-sm font-customFont">{props.cardContent}</p>
            </div>
            
            
    
    )
}
export default CardComp;