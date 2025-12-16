
import Card from "../components/Card";
import charts from "../public/image/charts.json";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Library from "../components/Library";

export default function ShowArtist() {
  return (
    <>
    <Header/>
            <Library/>
      <div className="w-272.5  home-content rounded-lg bg-[#121212] ms-5 pt-10 pb-20 px-10">
        <div className="content-row gap-20 ">
          <div className="row ">
            <Heading 
            title="Popular Charts" />
            <div className="Showcards  flex flex-wrap  ">
              {charts.map((chart) => (
                <Card 
                  titlefont={"text-3"}
                  font={"font-normal"}
                  key={chart.id}
                  thumbnail={chart.thumbnail}
                  title={chart.title}
                  artist={chart.artist}
                />
              ))}
            </div>
          </div>
          
        </div>
        <Footer/>
      </div>
    </>
  );
}
function Heading(props) {
  return (
    <>
      <div className="heading flex justify-between ">
        <a className=" font-bold text-white text-[24px]" href="#">
          {props.title}
        </a>
        
      </div>
    </>
  );
}
