/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react"
import { SliderData } from "./landingdata"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import "./landingTop.css"

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      <BsChevronLeft className="left-arrow" onClick={prevSlide} />
      <BsChevronRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="travel image"
                style={{
                  width: "1409px",
                  height: "800px",
                  padding: "5px",
                  marginLeft: "48px",
                  marginTop: "200px",
                }}
              />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default ImageSlider
