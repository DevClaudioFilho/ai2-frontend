import { useEffect,useState } from "react";
import Modal from "../../../components/Modal";

import api from "../../../utils/api";

function InserirFilmes() {
  const idEditModal= "insertBookModal"

  const [bookTitle, setBookTitle] = useState("")
  const [bookShortDescription, setBookShortDescription] = useState("")
  const [bookDescription, setBookDescription] = useState("")
  const [bookBannerImage, setBookBannerImage] = useState("")
  const [bookLinkUrl, setBookLinkUrl] = useState("")
  const [bookSystemId, setBookSystemId] = useState("")

  async function handlerSubmitValues(event){
    try {
      const data ={
        title: bookTitle,
        short_description: bookShortDescription,
        description: bookDescription,
        banner_image: bookBannerImage,
        link_url: bookLinkUrl,
        systemId: bookSystemId,        
      }
      const response =await api.post('/book/create',data )
      console.log(response.status)
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
      alert(`Error: ${err}` )
    });
  }, [])

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
            placeholder="Insira seu Descrição..."
            value={bookShortDescription}
            onChange={(e) => setBookShortDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">Descrição</label>
          <textarea
            required 
            className="form-control"
            placeholder="Insira seu Descrição..."
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
            placeholder="Insira seu Banner..."
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
            placeholder="Insira o link do livro..."
            value={bookLinkUrl}
            onChange={(e) => setBookLinkUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="insertFilmesTitulo">ID do Sistema</label>
          <select 
            class="form-select" 
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

export default InserirFilmes;
