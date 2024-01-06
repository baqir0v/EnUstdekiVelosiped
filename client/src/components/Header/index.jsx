import React, { useState } from 'react'
import "./index.scss"
import Navbar from '../../layout/Navbar'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Header = () => {
    const [img1, setImg1] = useState("https://topbike-store-demo.myshopify.com/cdn/shop/files/slideshow_4.jpg?v=1613575294")
    const [img2, setimg2] = useState("https://topbike-store-demo.myshopify.com/cdn/shop/files/slideshow_3.jpg?v=1613575289")
    const [currentimg, setcurrentimg] = useState(img1)
    const [h1, seth1] = useState("Off Road Bicycle")
    const [h2, seth2] = useState("Sport Bicycle")
    const [text1, settext1] = useState("Here to bring your life style to the next level.")
    const [text2, settext2] = useState("Accompany you to the end of the road")
    const [currentText, setCurrentText] = useState(text1)
    const [currenth1, setCurrenth1] = useState(h1)

    const handleFirstImg = () => {
        setcurrentimg(img1)
        setCurrentText(text1)
        setCurrenth1(h1)
    }
    const handleSecondImg = () => {
        setcurrentimg(img2)
        setCurrentText(text2)
        setCurrenth1(h2)
    }
    const handleLeftArrow = () => {
        if (currentimg === img1) {
            setcurrentimg(img2)
            setCurrentText(text2)
            setCurrenth1(h2)
        }
        else {
            setcurrentimg(img1)
            setCurrentText(text1)
            setCurrenth1(h1)
        }
    }
    const handleRightArrow = () => {
        if (currentimg === img2) {
            setcurrentimg(img1)
            setCurrentText(text1)
            setCurrenth1(h1)
        }
        else {
            setcurrentimg(img2)
            setCurrentText(text2)
            setCurrenth1(h2)
        }
    }

    return (
        <>
            <section id='search'>
                <div className="searchbox">
                    <h3>Start typing and hit Enter</h3>
                    <input type="text" placeholder='Search anything' />
                </div>
            </section>
                <Navbar />
            <header id='header' style={{ backgroundImage: `url(${currentimg})` }}>
                <section id='customslider'>
                    <button className='swipearrow1' onClick={() => handleLeftArrow()}><FaChevronLeft />
                    </button>
                    <button className='swipearrow2' onClick={() => handleRightArrow()}><FaChevronRight /></button>
                    <div className="slidertext">
                        <h3>{currenth1}</h3>
                        <p>{currentText}</p>
                        <button>Shop Now</button>
                    </div>
                    <span className='btns'>
                        <button onClick={handleFirstImg}></button>
                        <button onClick={handleSecondImg}></button>
                    </span>
                </section>
            </header>
        </>
    )
}

export default Header