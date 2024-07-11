import { useEffect,useState } from "react";
import Modal from "../../../components/Modal";

import api from "../../../utils/api";

function EditarBanner({id}) {
  const idEditModal= "editBannerModal"

  const [bannerTitle, setBannerTitle] = useState("")
  const [bannerImgUrl, setBannerImgUrl] = useState("")
  const [bannerImgAlt, setBannerImgAlt] = useState("")
  const [bannerMessage, setBannerMessage] = useState("")

  async function handlerSubmitValues(){
    try {
      const data ={
        title: bannerTitle,
        img_alt: bannerImgUrl,
        img_url: bannerImgAlt,
        message: bannerMessage
      }
      await api.put(`/banner/update/${id}`,data )
    } catch (error) {
      console.log(error)
    }
  }

  // Load banner
  useEffect(() =>{ 
    if(id){
      api.get(`/banner/get/${id}`).then(response => {
        let res =response.data
        setBannerTitle(res.title)
        setBannerImgUrl(res.img_alt)
        setBannerImgAlt(res.img_url)
        setBannerMessage(res.message)
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
            placeholder={bannerTitle}
            value={bannerTitle}
            onChange={(e) => setBannerTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Pequena Descrição</label>
          <input
            required 
            type="text" 
            className="form-control" 
            placeholder={bannerImgUrl}
            value={bannerImgUrl}
            onChange={(e) => setBannerImgUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Descrição</label>
          <textarea
            required 
            className="form-control"
            placeholder={bannerImgAlt}
            value={bannerImgAlt}
            onChange={(e) => setBannerImgAlt(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Banner</label>
          <input
            required 
            type="text" 
            className="form-control" 
            placeholder={bannerMessage}
            value={bannerMessage}
            onChange={(e) => setBannerMessage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Link do livro</label>
          <input
            required 
            type="text" 
            className="form-control" 
            placeholder={bannerMessage}
            value={bannerMessage}
            onChange={(e) => setBannerMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </Modal>
  );
}

export default EditarBanner;
