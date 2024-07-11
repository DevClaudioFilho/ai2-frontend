import api from "../../../utils/api";

import Table from "../../../components/Table";

import { useState } from "react";

import EditarPostAdminModal from "./EditarPostAdminModal";
import InserirPostAdminModal from "./InserirPostModal";

function PostAdmin() {
  const idEditModal= "PostAdminModal"
  const idRemoveModal= "removePostAdminModal"

  const [idToEdit,setIdToEdit] = useState(null)

  async function handleRemovePostAdmin(id){
    try {
      await api.delete(`/post/delete/${id}`)
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <section>
        <button type="button" className="btn btn-outline-light mb-2" data-bs-toggle="modal" data-bs-target="#insertPostAdminModal">
          Inserir Novo PostAdmin
        </button>

        <Table 
          endpoint='/post/list' 
          idSufModal={idEditModal} 
          onClickEdit={(id)=>setIdToEdit(id)}
          idRemoveModal={idRemoveModal}
          onClickRemove={handleRemovePostAdmin}
          />
      </section>

      {/* Modals */}
      <EditarPostAdminModal id={idToEdit}/>
      <InserirPostAdminModal />
    </>
  );
}

export default PostAdmin;
