import { useEffect,useState } from "react";
import Modal from "../../../components/Modal";

import api from "../../../utils/api";

function EditarPostAdmin({id}) {
  const idEditModal= "editPostAdminModal"

  const [postTitle, setPostAdminTitle] = useState("")
  const [postText, setPostAdminText] = useState("")
  const [postAutor, setPostAdminAutor] = useState("")
  const [postBannerImage, setPostAdminBannerImage] = useState("")

  async function handlerSubmitValues(){
    try {
      const data ={
        title: postTitle,
        text: postText,
        autor: postAutor,
        banner_image: postBannerImage
      }
      await api.put(`/post/update/${id}`,data )
    } catch (error) {
      console.log(error)
    }
  }

  // Load post
  useEffect(() =>{ 
    if(id){
      api.get(`/post/get/${id}`).then(response => {
        let res =response.data
        setPostAdminTitle(res.title)
        setPostAdminText(res.text)
        setPostAdminAutor(res.autor)
        setPostAdminBannerImage(res.banner_image)
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
            placeholder={postTitle}
            value={postTitle}
            onChange={(e) => setPostAdminTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Texto</label>
          <textarea
            required 
            type="text" 
            className="form-control" 
            placeholder={postText}
            value={postText}
            onChange={(e) => setPostAdminText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Autor</label>
          <input
            required 
            className="form-control"
            placeholder={postAutor}
            value={postAutor}
            onChange={(e) => setPostAdminAutor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Url imagem</label>
          <input
            required 
            type="text" 
            className="form-control" 
            placeholder={postBannerImage}
            value={postBannerImage}
            onChange={(e) => setPostAdminBannerImage(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </Modal>
  );
}

export default EditarPostAdmin;
