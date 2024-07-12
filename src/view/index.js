'use client'

import React, { useState, useEffect } from 'react'
import Carousel from '../components/Carousel'

import json from '../db/index.json'
import Card from '../components/Card'

import { Link } from 'react-router-dom'
import api from '../utils/api'

function Home() {
  const [systems, setSystems] = useState([])

  useEffect(() => {
    api.get('/system/list')
    .then((res) => {
      console.log(res.data)
      setSystems(res.data)
    })
    .catch((err) => {
      console.error(`Error: ${err}` )
    });
  }, [])

  return (
    <>
      <Carousel />
      <section className="container text-white">
        <div className="description_container" id="description_container">
          <h1 className="text-warning">Um universo a se explorar...</h1>
          <p>
            O RPG de mesa, ou RPG de papel e caneta, é um jogo que lembra muito
            os clássicos jogos de tabuleiro, porém com possibilidades mais
            amplas. Do inglês, a sigla RPG significa Role Playing Game, um jogo
            de interpretar papéis. Neste caso o jogador não é apenas um pino
            andando em casas de um tabuleiro, ele interpreta um personagem, com
            emoções, falas e habilidades enquanto atravessa um mundo fantástico.
            Ensinaremos aqui como jogar RPG de mesa.
          </p>
        </div>
      </section>
      <section className="container">
        <div className="system_container" id="system_container">
          <h1 className="title text-end text-warning">
            ...Com diversas sistemas
          </h1>
          <ul
            className="d-flex justify-content-around flex-wrap gap-3"
            id="listCardsComponents"
          >
            {systems.length >= 1 ?
              systems.map((system) => (
                <li key={system.id}>
                  <Card image={system.banner_image} title={system.title} text={system.description} link={`/system/${system.id}`}/>
                </li>
              )):
              (<p className='text-white m-4'>Nao tem sistemas cadastrado</p>)
            }
          </ul>
        </div>
      </section>
      <section className="container ">
        <div className="software_container" id="software_container">
          <h1 className="title text-warning">
            E ferramentas para modelos clássicos ou mais imersivos...
          </h1>
          <ul className='d-flex justify-content-around flex-wrap mx-auto my-4' style={{maxWidth:600}}>
            <li>
              <Link to="https://discord.com/" className='hover_ligth'>
                <img src="assets/discord-mark-blue.svg" alt="" style={{width:60,height:60}} />
              </Link>
            </li>
            <li>
              <Link to="https://roll20.net/" className='hover_ligth'>
                <img src="assets/rool20.ico" alt="" style={{width:60,height:60}} />
              </Link>
            </li>
            <li>
              <Link to="https://firecast.app/pt_br/features/" className='hover_ligth'>
                <img src="assets/firecast.png" alt="" style={{width:60,height:60}} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="container">
        <div>
          <h1 className="title text-end text-warning">
            Estamos aqui para te ajudar
          </h1>
          <div className="d-flex flex-column flex-md-row " style={{gap:'15px'}}>
            <form className='w-md-50 w-100 d-flex flex-column justify-content-center' style={{gap:'10px'}}>
              <div className="form-group">
                <label for="exampleInputName" className='text-warning'>Nome:</label>
                <input type="name" className="form-control bg-dark border-white text-white input-dark" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name" required/>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1" className='text-warning'>Email address:</label>
                <input type="email" className="form-control bg-dark border-white text-white input-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1" className='text-warning' >Mensagem:</label>
                <textarea className="form-control bg-dark border-white text-white input-dark" id="exampleFormControlTextarea1" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn btn-outline-warning w-100 mt-2">Submit</button>
            </form>
            
            <img
              src="https://www.rederpg.com.br/wp/wp-content/uploads/2021/01/fantasy-sowingrumors-864x467.jpg"
              alt=""
              className='d-md-block w-50 d-none'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
