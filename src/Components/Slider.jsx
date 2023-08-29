import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../Styling/Slider.css";
import Image1 from "../Images/alberthall.jpg";
import Image2 from "../Images/amer.jpg";
import Image3 from "../Images/nahargarh.jpg";
import Image4 from "../Images/elephent.jpg";
import Image5 from "../Images/jalmahal.jpg";

const Slider = () => {
  const slideRef = useRef(null);
//   const [loadingProgress, setLoadingProgress] = useState(0);

   const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };
  


  const data = [
    {
      id: 1,
      imgUrl:`${Image1}`,
      desc: "Discover the Majesty of Jaipur, A Timeless Gem.",
      name: "EXPLORE NATURE",
    },
    {
      id: 2,
      imgUrl:`${Image2}`,
      desc: "Discover the Majesty of Jaipur, A Timeless Gem.",
      name: "WELCOME TO JAIPUR",
    },
    {
      id: 3,
      imgUrl:
      `${Image3}`,
      desc: "Discover the Majesty of Jaipur, A Timeless Gem.",
      name: "JAIPUR NIGHTS",
    },
    {
      id: 4,
      imgUrl: `${Image4}`,
      desc: "Discover the Majesty of Jaipur, A Timeless Gem.",
      name: "EXPLORE ROYAL TRAILS",
    },
    {
      id: 5,
      imgUrl:
      `${Image5}`,
      desc: "Discover the Majesty of Jaipur, A Timeless Gem.",
      name: "EXPLORE NATURE",
    },
  ];

  return (
    <div className="SliderContainer">
      {/* <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div> */}
      <div id="slide" ref={slideRef} >
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={handleClickNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
