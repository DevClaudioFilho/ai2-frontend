import React from 'react';
import { Link } from 'react-router-dom';

function About(){
  return (
    <>
      <img src="https://wallup.net/wp-content/uploads/2018/10/03/963360-diablo-dark-fantasy-warrior-rpg-action-fighting-dungeon.jpg" alt="" className='w-100'                 
        style={{
          height: '70vh',
          objectFit: 'cover',
        }}
      />
      <section className="container mt-4 text-white text-md-start text-center">
          <h1 className="title text-warning">
            Sobre o RPGeek
          </h1>
          <p>
            Bem-vindo ao RPGeek, o ponto de encontro perfeito para amantes de RPG de mesa! Nosso site celebra a cultura do RPG, oferecemos conteúdo para todos os níveis, de iniciantes a veteranos.
            
            Conecte-se com outros jogadores através do nosso sistema de matchmaking, encontre mestres talentosos e use nossas ferramentas interativas, como geradores de personagens e planejadores de campanhas. Junte-se a nós e faça parte desta comunidade acolhedora, onde você pode descobrir, aprender e se conectar. Bem-vindo ao mundo do RPGeek!
          </p>
      </section>
      <section className="container mt-4 text-white text-md-end text-center">

          <div className='d-flex justify-content-between'>
            <img src="https://th.bing.com/th/id/OIP.6SnK3Oqr_DxGwY-EdP1dMAHaHa?rs=1&pid=ImgDetMain" alt="" className='d-none d-md-block'  style={{width:'60%',height:'200px'}}/>
            <div>
              <h1 className="title text-warning">
                Se conecte
              </h1>
              <p className='m-0' >
                Participe de uma comunidade vibrante, troque ideias nos fóruns, e fique por dentro dos eventos de RPG.<br/>
                Conecte-se com outros jogadores através do nosso blog, encontre mestres talentosos e use explore as ferramentas listadas no site, como geradores de personagens e planejadores de campanhas. <br/>
                Junte-se a nós e faça parte desta comunidade acolhedora, onde você pode descobrir, aprender e se conectar.<br/>
              </p>
            </div>
          </div>
      </section>
      <section className="container mt-2 text-white text-center">
          <h1 className="title text-warning">Bem-vindo ao mundo do RPGeek!</h1>
          <Link to="/blog" className="btn btn-outline-light m-4" style={{width:"200px"}}>
            Veja nosso blog
          </Link>
      </section>
    </>
  )
}

export default About;