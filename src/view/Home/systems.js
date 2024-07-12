'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from'react-router-dom'
import api from '../../utils/api'
import Card from '../../components/Card'

function System() {
  const {systemId} = useParams()
  const [system, setSystem] = useState()
  const [books, setBooks] = useState([])

  useEffect(() => {
    api.get(`/system/get/${systemId}`)
    .then((res) => {
      setSystem(res.data)
    })
    .catch((err) => {
      console.error(`Error: ${err}` )
    })

    api.get(`/book/filter/${systemId}`)
    .then((res) => {
      console.log(res.data)
      setBooks(res.data)
    })
    .catch((err) => {
      console.error(`Error: ${err}` )
    })
  }, [systemId])

  return (
    <main style={{minHeight:'75vh'}}>
      {system ? 
        (
          <>
            <img src={system.banner_image} alt="" className='w-100'                 
              style={{
                height: '70vh',
                objectFit: 'cover',
              }}
            />
            <section className="container mt-4 text-white text-start">
                <h1 className="title text-warning">
                  Sobre o {system.title}
                </h1>
                <p>{system.description}</p>
            </section>
            <section className="container mt-4 d-flex justify-content-between flex-column-reverse flex-lg-row text-white text-end" style={{gap:"15px"}}>  
                <iframe 
                  src={system.video_url} 
                  title='Youtube iframe'
                  className='bg-secondary w-lg-50 w-100'
                />
                <div className='w-100 w-lg-50'>
                  <h1 className="title text-warning">Como e com o que se joga</h1>
                  <p className='display-linebreak'>{system.how_play_text}</p>
                </div>
            </section>
            <section className="container mt-4 text-white">
              <div>
                <h1 className="title text-start text-warning">
                  Estamos aqui para te ajudar
                </h1>
                <ul
                    className="d-flex justify-content-around flex-wrap gap-3"
                    id="listCardsComponents"
                  >
                    {
                      books.length>0?
                      books.map((book) => (
                        <li key={book.id}>
                          <Card image={book.banner_image} title={book.title} text={book.description} link={book.link_url}/>
                        </li>
                      )):
                      (<p className='text-white m-4'>Nao tem livros cadastrado para esse sistema</p>)
                    }
                  </ul>
              </div>
            </section>
          </>
        ):
        <h1 className="title text-center text-warning mt-4"> 🤨Opa...como voce chegou aqui</h1>
      }
    </main>
  )
}

export default System
