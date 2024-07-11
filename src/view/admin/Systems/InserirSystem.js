import { useEffect,useState } from "react";
import Modal from "../../../components/Modal";

import api from "../../../utils/api";

function InserirFilmes() {
  const idEditModal= "insertSystemModal"

  const [systemTitle, setSystemTitle] = useState("")
  const [systemShortDescription, setSystemShortDescription] = useState("")
  const [systemDescription, setSystemDescription] = useState("")
  const [systemBannerImage, setSystemBannerImage] = useState("")
  const [systemHowPlayText, setSystemHowPlayText] = useState("")
  const [systemVideoUrl, setSystemVideoUrl] = useState("")

  async function handlerSubmitValues(event){
    try {
      const data ={
        title: systemTitle,
        short_description: systemShortDescription,
        description: systemDescription,
        banner_image: systemBannerImage,
        how_play_text: systemHowPlayText,
        video_url: systemVideoUrl,        
      }
      const response =await api.post('/system/create',data )
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
            value={systemTitle}
            onChange={(e) => setSystemTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Pequena Descrição</label>
          <input
            required 
            type="text" 
            className="form-control" 
            placeholder="Insira seu Descrição..."
            value={systemShortDescription}
            onChange={(e) => setSystemShortDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Descrição</label>
          <textarea
            required 
            className="form-control"
            placeholder="Insira seu Descrição..."
            value={systemDescription}
            onChange={(e) => setSystemDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Banner</label>
          <input
            required 
            type="text" 
            className="form-control" 
            placeholder="Insira seu Banner..."
            value={systemBannerImage}
            onChange={(e) => setSystemBannerImage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Como se joga o sistema</label>
          <textarea
            required 
            className="form-control" 
            placeholder="Insira como se joga o sistema..."
            value={systemHowPlayText}
            onChange={(e) => setSystemHowPlayText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">URL de Video</label>
          <input
            required 
            type="text" 
            className="form-control" 
            placeholder="Insira a url do video..."
            value={systemVideoUrl}
            onChange={(e) => setSystemVideoUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </Modal>
  );
}

export default InserirFilmes;
