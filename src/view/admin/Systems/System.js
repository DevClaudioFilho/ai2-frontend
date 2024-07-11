// import EditarSystem from "./EditarSystem";
import api from "../../../utils/api";

import Table from "../../../components/Table";

import { useState } from "react";

import EditarSystem from "./EditarSystem";
import InserirSystem from "./InserirSystem";

function System() {
  const idEditModal= "System"
  const idRemoveModal= "removeModal"

  const [idToEdit,setIdToEdit] = useState(null)

  async function handleRemoveSystem(id){
    try {
      await api.delete(`/system/delete/${id}`)
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <section>
        <button type="button" className="btn btn-outline-light mb-2" data-bs-toggle="modal" data-bs-target="#insertSystemModal">
          Inserir Novo Sistema
        </button>

        <Table 
          endpoint='/system/list' 
          idSufModal={idEditModal} 
          onClickEdit={(id)=>setIdToEdit(id)}
          idRemoveModal={idRemoveModal}
          onClickRemove={handleRemoveSystem}
          />
      </section>

      {/* Modals */}
      <EditarSystem id={idToEdit}/>
      <InserirSystem />
    </>
  );
}

export default System;
