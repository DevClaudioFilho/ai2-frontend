import { useEffect,useState } from "react";
import Modal from "../../../components/Modal";

import api from "../../../utils/api";

function EditarBook({id}) {
  const idEditModal= "editBookModal"

  const [bookTitle, setBookTitle] = useState("")
  const [bookShortDescription, setBookShortDescription] = useState("")
  const [bookDescription, setBookDescription] = useState("")
  const [bookBannerImage, setBookBannerImage] = useState("")
  const [bookLinkUrl, setBookLinkUrl] = useState("")
  const [bookSystemId, setBookSystemId] = useState()

  async function handlerSubmitValues(){
    try {
      const data ={
        title: bookTitle,
        short_description: bookShortDescription,
        description: bookDescription,
        banner_image: bookBannerImage,
        link_url: bookLinkUrl,
        systemId: bookSystemId,        
      }
      await api.put(`/book/update/${id}`,data )
    } catch (error) {
      console.log(error)
    }
  }

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

  // Load book
  useEffect(() =>{ 
    if(id){
      api.get(`/book/get/${id}`).then(response => {
        let res =response.data
        console.log(res.bookId)
        setBookTitle(res.title)
        setBookShortDescription(res.short_description)
        setBookDescription(res.description)
        setBookBannerImage(res.banner_image)
        setBookLinkUrl(res.link_url)
        setBookSystemId(res.systemId)
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
            placeholder={bookTitle}
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Pequena Descrição</label>
          <input
            required 
            type="text" 
            className="form-control" 
            placeholder={bookShortDescription}
            value={bookShortDescription}
            onChange={(e) => setBookShortDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Descrição</label>
          <textarea
            required 
            className="form-control"
            placeholder={bookDescription}
            value={bookDescription}
            onChange={(e) => setBookDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Banner</label>
          <input
            required 
            type="text" 
            className="form-control" 
            placeholder={bookBannerImage}
            value={bookBannerImage}
            onChange={(e) => setBookBannerImage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Link do livro</label>
          <input
            required 
            type="text" 
            className="form-control" 
            placeholder={bookLinkUrl}
            value={bookLinkUrl}
            onChange={(e) => setBookLinkUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">ID do Sistema</label>
          <select 
            className="form-select" 
            aria-label="Default select example"
            onChange={(e) => setBookSystemId(e.target.value)}
          >
            { systems.map((system)=>(
              system.id===bookSystemId?
              <option 
                  key={system.id} 
                  value={system.id}
                  selected
              >
                  {system.title}
              </option>:
              <option key={system.id} value={system.id}>
                {system.title}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </Modal>
  );
}

export default EditarBook;
