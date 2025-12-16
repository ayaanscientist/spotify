import { useRef, useState } from "react";

export default function Slider({ children }) {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const down = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const move = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5;
  };

  return (
    <div className="relative">
      <div className="fade-left" />
      <div className="fade-right" />

      <div
        ref={sliderRef}
        onMouseDown={down}
        onMouseLeave={() => setIsDown(false)}
        onMouseUp={() => setIsDown(false)}
        onMouseMove={move}
        className={`flex gap-4 overflow-x-auto scroll-snap-x cursor-grab hide-scrollbar ${
          isDown ? "cursor-grabbing" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
