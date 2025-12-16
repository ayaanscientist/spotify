
import Card from "../components/Card";
import albums from "../public/image/albums.json";
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
            title="Popular albums and singles" />
            <div className="Showcards  flex flex-wrap  ">
              {albums.map((album) => (
                <Card 
                  key={album.id}
                  thumbnail={album.thumbnail}
                  title={album.title}
                  artist={album.artist}
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
