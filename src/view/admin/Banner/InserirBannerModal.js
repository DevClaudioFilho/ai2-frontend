import { useEffect,useState } from "react";
import Modal from "../../../components/Modal";

import api from "../../../utils/api";

function InserirFilmes() {
  const idEditModal= "insertBannerModal"

  const [bannerTitle, setBannerTitle] = useState("")
  const [bannerImgAlt, setBannerImgAlt] = useState("")
  const [bannerImgUrl, setBannerImgUrl] = useState("")
  const [bannerMessage, setBannerMessage] = useState("")

  async function handlerSubmitValues(event){
    try {
      const data ={
        title: bannerTitle,
        img_alt: bannerImgAlt,
        img_url: bannerImgUrl,
        message: bannerMessage   
      }
      const response =await api.post('/banner/create',data )
      console.log(response.status)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal title="Formulario de Inserção" idModal={idEditModal} confirmFunction={handlerSubmitValues}>
      <form className="text-dark" onSubmit={handlerSubmitValues}>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Titulo</label>
          <input
            required 
            type="text" 
            className="form-control" 
            placeholder="Insira seu titulo..."
            value={bannerTitle}
            onChange={(e) => setBannerTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Insira o texto alternativo da imagem</label>
          <input
            type="text" 
            className="form-control" 
            placeholder="Insira o texto..."
            value={bannerImgAlt}
            onChange={(e) => setBannerImgAlt(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Insira url da imagem</label>
          <input
            required 
            className="form-control"
            placeholder="Insira uma url..."
            value={bannerImgUrl}
            onChange={(e) => setBannerImgUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Mensagem do banner</label>
          <input
            type="text"
            className="form-control" 
            placeholder="Insira a mensagem..."
            value={bannerMessage}
            onChange={(e) => setBannerMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </Modal>
  );
}

export default InserirFilmes;
