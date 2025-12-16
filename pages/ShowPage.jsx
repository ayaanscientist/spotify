import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import Library from "../components/Library"
export default function Showpage(){
    return(
        <>
        <Header/>
        <Library/>
        <Outlet />
        <Footer/>
        </>

)
}