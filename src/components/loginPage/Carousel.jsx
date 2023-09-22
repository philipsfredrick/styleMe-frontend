import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import "../loginPage/login.css"


const Carousel = ({images, tags}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // const handleNext = () => {
    //     setCurrentIndex((prevIndex) => 
    //         prevIndex + 1 === images.length ? 0 : prevIndex + 1 
    //     );
    // };

    // const handlePrevious = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex - 1 === images.length ? 0 : prevIndex - 1
    //     );
    // };

    const handleButtonClick = (index) => {
        setCurrentIndex(index)
    }
    
    
  return (
    <div>
        <div className="carousel-picture">
            <img key={currentIndex} src={images[currentIndex]}/>
        </div>
        <div className="carousel-overlay">
            <p key={currentIndex} className="carousel-label">
                {tags[currentIndex]}
            </p>
            <div className="carousel-buttons">
                {images.map((image, index) => (
                    <button key={index} 
                            className={`${currentIndex === index ? "active" : "inactive"}`} 
                            onClick={() => handleButtonClick(index)}
                    >

                    </button>
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default Carousel;
