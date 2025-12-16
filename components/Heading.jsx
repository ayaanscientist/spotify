import { Link, NavLink } from "react-router-dom";
function Heading({title,path}) {
  return (
    <>
      <div className="heading flex justify-between ">
        <Link className=" font-bold text-white text-[24px]" to={path}>
          {title}
        </Link>
        <Link className="font-bold text-[#b3b3b3] text-[14px]" to={path}>
          Show all
        </Link>
      </div>
    </>
  );
}
export default Heading;