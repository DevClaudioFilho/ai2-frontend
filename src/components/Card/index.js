'use client'
import React from 'react'

import './styles.css'

export default function Card({ image,title,text,link }) {
  return (
    <div
      className="card bg-secondary border-2 text-white text-center"
      style={{ width: '18rem', height: '400px' }}
    >
      <img src={image} className="card-img-top img-fluid" style={{height:'30%'}} alt="..." />
      <div className="card-body d-flex flex-column justify-content-between" style={{height:'100%'}}>
        <h5 className="card-title text-warning">{title}</h5>
        <p className="card-text text-center pv-archiveText">
          {text}
        </p>
        <a href={link} className="btn btn-outline-warning w-100">
          Veja mais
        </a>
      </div>
    </div>
  )
}
