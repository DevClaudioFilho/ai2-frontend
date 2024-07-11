import { useEffect,useState } from "react";
import Modal from "../../../components/Modal";

import api from "../../../utils/api";

function EditarSystem({id}) {
  const idEditModal= "editSystem"

  const [systemTitle, setSystemTitle] = useState("")
  const [systemShortDescription, setSystemShortDescription] = useState("")
  const [systemDescription, setSystemDescription] = useState("")
  const [systemBannerImage, setSystemBannerImage] = useState("")
  const [systemHowPlayText, setSystemHowPlayText] = useState("")
  const [systemVideoUrl, setSystemVideoUrl] = useState("")

  async function handlerSubmitValues(){
    try {
      const data ={
        title: systemTitle,
        short_description: systemShortDescription,
        description: systemDescription,
        banner_image: systemBannerImage,
        how_play_text: systemHowPlayText,
        video_url: systemVideoUrl,        
      }
      await api.put(`/system/update/${id}`,data )
    } catch (error) {
      console.log(error)
    }
  }

  // Load movies
  useEffect(() =>{ 
    if(id){
      api.get(`/system/get/${id}`).then(response => {
        let res =response.data
        
        setSystemTitle(res.title)
        setSystemShortDescription(res.short_description)
        setSystemDescription(res.description)
        setSystemBannerImage(res.banner_image)
        setSystemHowPlayText(res.how_play_text)
        setSystemVideoUrl(res.video_url)
      }).catch(error => {
        console.log(error)
      })
    }
  },[id]);

  return (
    <Modal title="Formulario de Edição" idModal={idEditModal} confirmFunction={handlerSubmitValues}>
      <form  onSubmit={handlerSubmitValues} className="text-dark">
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Titulo</label>
          <input
            required 
            type="text" 
            className="form-control" 
            placeholder={systemTitle}
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
            placeholder={systemShortDescription}
            value={systemShortDescription}
            onChange={(e) => setSystemShortDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Descrição</label>
          <textarea
            required 
            className="form-control"
            placeholder={systemDescription}
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
            placeholder={systemBannerImage}
            value={systemBannerImage}
            onChange={(e) => setSystemBannerImage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Como se joga o sistema</label>
          <textarea
            required 
            className="form-control" 
            placeholder={systemHowPlayText}
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
            placeholder={systemVideoUrl}
            value={systemVideoUrl}
            onChange={(e) => setSystemVideoUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </Modal>
  );
}

export default EditarSystem;
