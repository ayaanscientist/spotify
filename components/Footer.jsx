import { FaInstagram } from "react-icons/fa6";
import { FaTwitter,FaFacebook  } from "react-icons/fa";
export default function Footer(){
    return(
        <>
        
        <div className="footer-main  text-white flex w-273.25 mt-10">
            <div className="foot-p-l  flex">
                <div className="p-l-c me-6 mb-8  w-[175.2px]  flex flex-col">
                    <div className="plc-heading">
                        <p>Company</p>
                    </div>
                    <div className="plc-items  flex flex-col ">
                        <a href="#">About</a>
                        <a href="#">Jobs</a>
                        <a href="#">For the Record</a>
                    </div>
                </div>
                <div className="p-l-c me-6 mb-8 w-[175.2px]">
                    <div className="plc-heading">
                        <p>Comminuties</p>
                    </div>
                    <div className="plc-items  flex flex-col ">
                        <a href="#">For Artists</a>
                        <a href="#">Developers</a>
                        <a href="#">Advertising</a>
                        <a href="#">Investors</a>
                        <a href="#">Vendors</a>
                    </div>
                </div>
                <div className="p-l-c me-6 mb-8 w-[175.2px]">
                    <div className="plc-heading">
                        <p>Usefull Links</p>
                    </div>
                    <div className="plc-items  flex flex-col ">
                        <a href="#">Support</a>
                        <a href="#">Free Mobile App</a>
                        <a href="#">Popular by Country</a>
                        <a href="#">Import Your Music</a>
                    </div>
                </div>
                <div className="p-l-c me-6 mb-8 w-[175.2px]">
                    <div className="plc-heading">
                        <p>Spotify Plans</p>
                    </div>
                    <div className="plc-items  flex flex-col ">
                        <a href="#">Premium Lite </a>
                        <a href="#">Premium Standard</a>
                        <a href="#">Premium Platinum</a>
                        <a href="#">Premium Student</a>
                        <a href="#">Premium Free</a>
                    </div>
                </div>
            </div>
            <div className="foot-p-r ms-20">
                <div className="foot-socials flex">
                    <div>
                        <FaInstagram/>
                    </div>
                    <div>
                        <FaTwitter/>
                    </div>
                    <div>
                        <FaFacebook />
                    </div>
                </div>
            </div>
            
        </div>
        <div className="copyright mt-4 text-[14px] text-[#b3b3b3]">
                © 2025 Spotify AB
            </div>
        </>
    )
}