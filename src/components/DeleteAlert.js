import Modal from "./Modal";

function DeleteAlert({name,msg,id,rmFunction}) {
  const idRemoveModal=`remove${name}`

  return (
    <Modal title="Alerta de exclusão" idModal={idRemoveModal}>
        <p className="text-dark">{msg}</p>
        <div className="inline">
          <button type="button" className="btn btn-secondary" style={{marginRight:'15px'}} data-bs-dismiss="modal">Fechar</button>
          <button type="submit" className="btn btn-primary" onClick={()=>rmFunction(id)}>Confirmar</button>
        </div>
    </Modal>
  );
}

export default DeleteAlert;
