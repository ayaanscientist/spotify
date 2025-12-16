import Card from "./Card";
import songs from "../public/image/songs.json";
import artist from "../public/image/artist.json";
import radio from "../public/image/radio.json";
import charts from "../public/image/charts.json";
import albums from "../public/image/albums.json";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <>
    
      <div className="w-272.5 overflow-hidden home-content rounded-lg bg-[#121212] ms-5 pt-10 pb-20 px-10">
        <div className="content-row flex flex-col gap-20 ">
          <div className="row ">
            <Heading 
            
            aim={"/songs"}
            title="Trending songs" />
            <div className="cards flex  ">
              {songs.map((song) => (
                <Card 
                  radius={"rounded-lg"}
                  key={song.id}
                  thumbnail={song.thumbnail}
                  title={song.title}
                  artist={song.artist}
                />
              ))}
            </div>
          </div>
          <div className="row ">
            <Heading 
            aim={"/artist"}
            title="Popular Artists" />
            <div className="cards flex  ">
              {artist.map((artist) => (
                <Card 
                  radius="rounded-[50%]"
                  key={artist.id}
                  thumbnail={artist.thumbnail}
                  title={artist.title}
                  artist={artist.artist}
                />
              ))}
            </div>
          </div>
          <div className="row ">
            <Heading 
            aim={"/albums"}
            title="Popular albums and singles" />
            <div className="cards flex ">
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
          <div className="row ">
            <Heading 
            aim={"/radio"}
            title="Popular Radios" />
            <div className="cards flex ">
              {radio.map((radio) => (
                <Card
                  titlefont={"text-3"}
                  artistfont={"text-3"}
                  font={"font-normal"}
                  key={radio.id}
                  thumbnail={radio.thumbnail}
                  title={radio.title}
                  artist={radio.artist}
                />
              ))}
            </div>
          </div>
          <div className="row ">
            <Heading 
            aim={"/chart"}
            title="Popular Charts" />
            <div className="cards flex ">
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
        <Link className="font-bold text-[#b3b3b3] text-[14px]" to={props.aim}>
          Show all
        </Link>
      </div>
    </>
  );
}
