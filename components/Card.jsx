import { FaPlay } from "react-icons/fa";
export default function Card({thumbnail,title,artist,radius,titlefont,artistfont,font}){
    return(
        <>
        <div className="card w-[195.5px] min-h-[250.44px] rounded-lg ">
            
            <div className="hover-layer w-full hover:bg-[#1a1a1a] rounded-lg flex gap-4 h-[full] ">
                <div className="p-[9.75px] flex flex-col gap-2.5 ">
                    <div className="thumbnail w-[171.5px]   rounded-lg">
                        <PlayBtn/>
                    <div className={`thumbnail w-[171.5px] h-[171.5px] overflow-hidden ${radius}`}>
                    <img className="w-full h-full" src={thumbnail} alt="" />
                    
                </div>
                </div>
                <div className="title-artist w-[171.5px] flex flex-col gy-1">
                    <div className={`title  ${titlefont} text-white ${font} `}>{title}</div>
                    <div className={`artist ${artistfont} text-[#b3b3b3] `} >{artist}</div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
function PlayBtn(){
    return(
        <div className="playbtn">
            <FaPlay/>
        </div>
    )
}