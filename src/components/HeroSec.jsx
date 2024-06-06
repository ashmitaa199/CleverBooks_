import React from "react"
import "./navbar.css"
import bgImage from "../assets/bgImage.png"
function HeroSec(){
return (
    <div className={` w-full h-full  flex flex-col `}>
        <img src={bgImage} alt=""  className="z-[-10] relative h-screen w-full object-fill"/>
        <div className="absolute flex  md:flex-row items-center flex-col gap-8">
<div className="w-full h-full  pl-16 flex flex-col gap-4 md:gap-11 ">
            <h1 className="text-3xl lg:text-6xl text-white font-customFont mt-8 lg:mt-12">
           Every order <br></br> fulfilled, <span className="text-fuchsia-600">on time</span> </h1>
           <p className="text-lg text-[#fff] font-normal font-customFont">
           Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.
           </p>
           <div className="flex flex-row">
           <button className="mr-auto text-white transition duration-150 hover:bg-black-600   bg-[#FFFFFF]  rounded-full text-sm text-center px-2 py-1 md:px-4 md:py-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-gradient-to-r from-[salmon] to-[purple] pr-0 min-w-52 max-h-10 font-customFont">Get started with Crest</button>
           <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg" alt="" className="ml-0 mr-auto "/>
           </div>
</div>
           <div   className="w-full md:mt-20">
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" alt="" className="hero-img-containter ml-auto w-2/3 md:w-full"/>
        </div>
           </div>
        
    </div>
)
}
export default HeroSec