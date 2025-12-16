import { GoPlus } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";
export default function Library(){
    return(
        <>
        <div className="library w-105 bg-[#121212] fixed rounded-lg p-2">
            <div className="lib-head flex justify-between items-center p-4 text-[#f4f4f4]">
                <h1 className="text-white font-bold ">Your Library</h1>
                <GoPlus className="text-[32px]" />
            </div>
            <div className="cyfp-wrapper h-82.75 w-105 hide-scrollbar overflow-y-scroll rounded-lg">
                <div className="cyfp bg-[#1f1f1f] w-101 flex gap-5 flex-col my-2 py-4 px-5  rounded-lg">
                <div className="cyfp-text flex flex-col">
                    <span className="font-bold text-[16px] text-white ">Create your first playlist</span>
                    <span className="font-normal text-[14px] text-[#f4f4f4] " >It’s easy, we’ll help you</span>
                </div>
                <div className="cyfp-btn">
                    <button className="bg-white font-bold text-[14px] text-center rounded-[999px] px-2 py-1">Create Playlist</button>
                </div>
            </div>

            <div className="cyfp bg-[#1f1f1f] w-101 flex gap-5 flex-col my-2 py-4 px-5  rounded-lg">
                <div className="cyfp-text flex flex-col">
                    <span className="font-bold text-[16px] text-white ">Let’s find some podcasts to follow</span>
                    <span className="font-normal text-[14px] text-[#f4f4f4] " >We’ll keep you updated on new episodes</span>
                </div>
                <div className="cyfp-btn">
                    <button className="bg-white font-bold  text-[14px] text-center rounded-[999px] px-2 py-1">Browse podcastes</button>
                </div>
            </div>
            </div>
            <div className="library-footer my-8 text-[#b3b3b3] text-[11px] font-bold flex flex-wrap gap-5 px-6">
                    <div className="lib-foot-info text-[11px] font-bold flex flex-wrap gap-5 ">
                    <a href="#"><span>Legal</span></a>
                    <a href="#"><span>Safety & Privacy Center</span></a>
                    <a href="#"><span>Privacy Policy</span></a>
                    <a href="#"><span>About Ads</span></a>
                    <a href="#"><span>Accessbility</span></a>
                    </div>
                    <div className="lib-foot-btn  rounded-[999px] flex text-[14px] text-white py-1 px-2.5 gap-2">
                        <CiGlobe className="text-[18px] font-bold" />
                        <button>English</button>
                    </div>
            </div>
        </div>
        </>
    )
}