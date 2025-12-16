import { FaSpotify,FaToolbox } from "react-icons/fa";
import { MdHomeFilled,MdOutlineDownloadForOffline } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
export default function Header(){
    return(
        <div className="header  fixed  px-2.5 w-full h-18.5 bg-black">
            <div className="row w-full h-16 flex justify-between items-center" >
                <div className="header-left">
                    <div className="app-home-icons items-center flex">
                <a className="spotify-icon flex justify-center items-center w-16 h-16" href="#">
                    <FaSpotify className="text-white text-[32px]" />
                </a>
                <a className="home-icon sign ms-2 flex justify-center items-center w-12 h-12 bg-[#292929] rounded-[50%]" href="#">
                    <MdHomeFilled className="text-white  text-[32px]" />
                </a>
                <div className="search ms-3 flex gap-4 px-1.5 items-center w-118.5  h-12 bg-[#292929] rounded-[999px]">
                    <IoSearch className="text-[#F4F4F4] sign text-[28px]" />
                    <input type="text" className="w-95" placeholder="What do you want to play?" />
                    <div className="tool  w-10 h-6 flex items-center justify-center ">

                        <FaToolbox className="text-[#f4f4f4] sign text-6"  />
                    </div>
                    </div>
            </div>
                </div>
                <div className="header-right flex items-center justify-center">
                    <div className="h-r-p1">
                        <button>Premium</button>
                        <button>Support</button>
                        <button>Download</button>
                    </div>
                    <div className="h-r-p2 font-bold ms-5 flex items-center justify-center gap-7 text-[#b3b3b3]">
                        <div className="flex gap-1 sign items-center justify-center">
                            <MdOutlineDownloadForOffline />
                            <span className="capitalize ">install app</span>
                        </div>
                        <div className="sign-log flex gap-4 items-center justify-center">
                            <button className="capitalize sign">sign up</button>
                            <button className="capitalize log rounded-[999px] bg-white hover:text-black text-black w-27 h-12 ">log in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}