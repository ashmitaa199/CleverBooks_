import React from "react";
function Footer(){
    return(
        <div className="flex flex-col w-full justify-center items-center bg-black mt-6">
            <div className="w-full px-24 py-10 pt-20 ">
                <div className=" bg-gradient-to-r from-[salmon] to-[purple] flex flex-col justify-center items-center text-center rounded-2xl py-5 gap-10 text-white background-animate">
                    <h1 className="text-5xl font-semibold font-customFont">You can grow faster than you think!</h1>
                    <div className="flex max-w-[50%] items-center justify-center">
                    <p className="text-sm font-customFont">Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.</p>
                    </div>
                    <button type="button" class="
        transition duration-150 hover:bg-black-600  text-white bg-black font-medium rounded-full text-sm text-center  px-4 py-2 font-customFont">Get started with Creast</button>
                </div>
            </div>
            <div className="w-full text-white flex-col flex sm:flex-row px-24 gap-5 pt-40 pb-10">
                <div className="w-2/5 flex flex-col gap-3">
                <h1 class="text-3xl text-slate-300 font-customFont">Clever Books</h1>
                <p className="hidden sm:block font-customFont">Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</p>
                </div>
                <div className="w-1/5 flex flex-col gap-3">
                    <h1 className="text-base font-semibold font-customFont">Explore</h1>
                    <a href="" className=" font-customFont">Product</a>
                    <a href="" className="font-customFont">Pricing</a>
                    <a href="" className="font-customFont">Coustomer Stories</a>
                    <a href="" className="font-customFont">Career</a>
                </div>
                <div className="w-1/5 flex flex-col gap-3">
                    <h1 className="text-base font-semibold">Learn</h1>
                    <a href="" className="font-customFont">About us</a>
                    <a href="" className="font-customFont">Blog</a>
                </div>
                <div className="w-1/5 flex flex-col gap-3">
                    <h1 className="text-base font-semibold">Contact Crest</h1>
                    <a href="" className="font-customFont">sales@getcrest.ai</a>
                    <p className="font-customFont">Registered Office:1507, Incubex, 11th cross road19thMain Road, Bengaluru India.560102</p>
                    <p className="font-customFont">Corporate Office: 291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR Layout, Bengaluru, India. 560102</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;