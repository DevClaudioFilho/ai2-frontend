'use client'
import React from 'react'
import './styles.css'

export default function Post({ image,autor,title,text,link }) {
  return (
    <div
      className="bg-secondary border-2 text-white text-center w-100 d-flex justify-content-center justify-content-md-between rounded"
      style={{ minWidthwidth: '100%', height: '350px' }}
    >
      <img src={image} className="img-fluid d-md-block d-none" style={{width:"25%",height:'100%'}} alt="..." />
      <div className="d-flex flex-column justify-content-between p-2 text-center" style={{width:"70%",height:'100%'}}>
        <span>
          <h1 className="text-warning">{title}</h1>
          <p >{autor}</p>
        </span>
       
        <p className="card-text text-center pv-archiveText">
          {text}
        </p>
        <a href={link} className="btn btn-outline-warning w-100">
          Leia mais
        </a>
      </div>
    </div>
  )
}
