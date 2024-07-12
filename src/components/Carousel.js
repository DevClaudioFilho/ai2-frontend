'use client'
import React, { useState, useEffect, useCallback } from 'react'
import api from '../utils/api'


export default function Carousel() {
  const [index, setIndex] = useState(0)
  const [images, setImages] = useState([])

  const handleNext = useCallback(() => {
    const nextIndex = index < images.length - 1 ? index + 1 : 0
    setIndex(nextIndex)
  }, [index])

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(timer)
  }, [handleNext, index])

  useEffect(() => {
    api.get('/banner/list')
    .then((res) => {
      setImages(res.data)
    })
    .catch((err) => {
      console.error(err)
    });
  }, [])

  const handlePrev = () => {
    const nextIndex = index > 0 ? index - 1 : images.length - 1
    setIndex(nextIndex)
  }

  return (
    <>
      {
        images.length >= 1 ? (
          <div className="Carousel mb-5 ">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                {Array.from(Array(images.length).keys()).map((buttonIndex) => (
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={`${buttonIndex}`}
                    className={`${buttonIndex === index ? 'active' : ''}`}
                    aria-current="true"
                    aria-label={`Slide ${buttonIndex + 1}`}
                    onClick={() => setIndex(buttonIndex)}
                    key={buttonIndex}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {images.map(({ img_url, img_alt, id, title,message }, imageIndex) => (
                  <div
                    className={`carousel-item${imageIndex === index ? 'active' : ''}`}
                    key={id}
                  >
                    <img
                      src={img_url}
                      className="d-block w-100 h-100"
                      style={{
                        minHeight: '70vh',
                        maxHeight: '70vh',
                        objectFit: 'cover',
                      }}
                      alt={img_alt}
                    />
                    {title!=="" && (
                      <div className="carousel-caption d-md-block rounded" style={{background:"rgba(0,0,0,0.6)"}}>
                        <h5>{title}</h5>
                        <p>{message}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
                onClick={handlePrev}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
                onClick={handleNext}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        ):
        (
          <img
          src="https://i.kinja-img.com/gawker-media/image/upload/s--PU9GLemx--/c_scale,fl_progressive,q_80,w_800/193xtz1nptnaljpg.jpg"
          className="d-block w-100 h-100"
          style={{
            minHeight: '70vh',
            maxHeight: '70vh',
            objectFit: 'cover',
          }}
          alt="uma imagem ai"
        />
        )

      }
      
    </>

  )
}
