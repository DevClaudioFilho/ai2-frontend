import { useEffect,useState } from "react";
import Modal from "../../../components/Modal";

import api from "../../../utils/api";

function InserirFilmes() {
  const idEditModal= "insertPostAdminModal"

  const [postTitle, setPostAdminTitle] = useState("")
  const [postText, setPostAdminText] = useState("")
  const [postAutor, setPostAdminAutor] = useState("")
  const [postBannerImage, setPostAdminBannerImage] = useState("")

  async function handlerSubmitValues(event){
    try {
      const data ={
        title: postTitle,
        text: postText,
        autor: postAutor,
        banner_image: postBannerImage 
      }
      const response =await api.post('/post/create',data )
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
            value={postTitle}
            onChange={(e) => setPostAdminTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Insira o texto do post</label>
          <textarea
            required
            type="text" 
            className="form-control" 
            placeholder="Insira o texto..."
            value={postText}
            onChange={(e) => setPostAdminText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Insira o nome do autor</label>
          <input
            required 
            className="form-control"
            placeholder="Insira o autor..."
            value={postAutor}
            onChange={(e) => setPostAdminAutor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Insira a imagem do post</label>
          <input
            required
            type="text"
            className="form-control" 
            placeholder="Insira a mensagem..."
            value={postBannerImage}
            onChange={(e) => setPostAdminBannerImage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </Modal>
  );
}

export default InserirFilmes;
