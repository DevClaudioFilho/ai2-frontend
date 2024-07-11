import api from "../../../utils/api";

import Table from "../../../components/Table";

import { useState } from "react";

import EditarBannerModal from "./EditarBannerModal";
import InserirBannerModal from "./InserirBannerModal";

function Banner() {
  const idEditModal= "BannerModal"
  const idRemoveModal= "removeBannerModal"

  const [idToEdit,setIdToEdit] = useState(null)

  async function handleRemoveBanner(id){
    try {
      await api.delete(`/banner/delete/${id}`)
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <section>
        <button type="button" className="btn btn-outline-light mb-2" data-bs-toggle="modal" data-bs-target="#insertBannerModal">
          Inserir Novo Banner
        </button>

        <Table 
          endpoint='/banner/list' 
          idSufModal={idEditModal} 
          onClickEdit={(id)=>setIdToEdit(id)}
          idRemoveModal={idRemoveModal}
          onClickRemove={handleRemoveBanner}
          />
      </section>

      {/* Modals */}
      <EditarBannerModal id={idToEdit}/>
      <InserirBannerModal />
    </>
  );
}

export default Banner;
