import api from "../../../utils/api";

import Table from "../../../components/Table";

import { useState } from "react";

import EditarBookModal from "./EditarBookModal";
import InserirBookModal from "./InserirBookModal";

function Book() {
  const idEditModal= "BookModal"
  const idRemoveModal= "removeBookModal"

  const [idToEdit,setIdToEdit] = useState(null)

  async function handleRemoveBook(id){
    try {
      await api.delete(`/book/delete/${id}`)
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <section>
        <button type="button" className="btn btn-outline-light mb-2" data-bs-toggle="modal" data-bs-target="#insertBookModal">
          Inserir Novo Livro
        </button>

        <Table 
          endpoint='/book/list' 
          idSufModal={idEditModal} 
          onClickEdit={(id)=>setIdToEdit(id)}
          idRemoveModal={idRemoveModal}
          onClickRemove={handleRemoveBook}
          />
      </section>

      {/* Modals */}
      <EditarBookModal id={idToEdit}/>
      <InserirBookModal />
    </>
  );
}

export default Book;
