import React, { useState } from "react";
import cleft1 from '../../../assects/cleft1.svg';
import cright1 from '../../../assects/cright1.svg';
import dot1  from '../../../assects/dot1.svg';
import '../../../App.css';

const Imageslider = ({slides}) => {
const [currentimage , setCurrentImage] = useState(0);

const slidestyle = {
    width : "100%",
    height: "550px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentimage].url})`,
}
const sliderstyle ={
    height:"550px",
    position:"relative",
}

const leftArrowstyle ={
    position:"absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "20px",
    fontSize: "40px",
    zIndex: 1,
    cursor: "pointer",
}
const rightArrowstyle ={
    position:"absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "20px",
    fontSize: "40px",
    zIndex: 1,
    cursor: "pointer",
}
 const gotoPrevious = () => {
    const isFristslide = currentimage === 0 ;
    const newimage = isFristslide ? slides.length - 1 : currentimage - 1;
    setCurrentImage(newimage);
 }
 const gotoNext = () => {
    const isLastslide = currentimage === slides.length ;
    const newimage = isLastslide ? 0 : currentimage + 1;
    setCurrentImage(newimage)
 }
 const dotCotainerStyle ={
    display: "flex",
    justifyContent: "center",
    bottom : "20px",
    paddingTop: "460px",
 }

 const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    background: "none",
    fontSize: "20px",
   
 }

return (
    <div style={sliderstyle}>
        <div style={leftArrowstyle} onClick={gotoPrevious}><img src={cleft1} /></div>
        <div style={rightArrowstyle} onClick={gotoNext}><img src={cright1} /></div>
        <div style={slidestyle} className="slidestyle"> 
        <div style={dotCotainerStyle}>
            { slides.map((slide , slideIndex) => {
                return (
                <div key={slideIndex} style={dotStyle}><img src={dot1} /></div>
                );
            })};
        </div>
        </div>
       
    </div>
);
}
export default Imageslider;

//<img src={dot1} />