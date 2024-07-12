import {useEffect, useState} from 'react'
import DeleteAlert from './DeleteAlert';
import api from "../../src/utils/api";

function Table({endpoint,idSufModal,onClickEdit,onClickRemove,idRemoveModal,excludeKeys=[]}) { 
  const [data, setData] = useState([])
  const [keys, setKeys] = useState([])
  const [itemToDelete, setItemToDelete] = useState([])
  

  useEffect(() =>{
    api.get(endpoint).then(response => {
      let res =response.data.map(item=>{
        for(var x=0;x<excludeKeys.length;x++){
          delete item[excludeKeys[x]];
        }
        return item;
      })

      res.sort((a,b)=> a.id-b.id)
      setKeys(Object.keys(res[0]))
      setData(res)
    }).catch(error => {
      console.log(error)
    })
  },[endpoint]);

  function renderCell(item,key){
    switch(key){
      case 'id':
        return <th key={`th_${key}_${idSufModal}`} scope="row" className='align-middle'>{item[key]}</th>    
      case 'foto':
        return (
          <td key={`td-${key}_${idSufModal}`} className='align-middle' >
            <div className='rounded' style={{width:'60px',height:'80px',backgroundColor:'#C8C8C8'}}>
              <a href={item[key]} target="_blank" rel="noopener noreferrer" >
                <img src={item[key]}  className="rounded" alt='' style={{width:'60px',height:'80px'}}/>
              </a>
            </div>
          </td>
        )
      default:
        if (item[key] && item[key].length > 50){
          return <td key={`td-${key}_${idSufModal}`} className='align-middle'>{String(item[key]).substring(0,50)}...</td>
        }
        else{
          return <td key={`td-${key}_${idSufModal}`} className='align-middle'>{item[key]}</td>
        }
    }
  }
  
  return (
    <>
      <div className='table-responsive'>
        {data.length > 0 ?
        <table className="table table-striped ">
          <thead className="table-dark">
            <tr>
              {
                keys &&
                keys.map(key =>{
                  return(
                    <th key={`th_${key}_${idSufModal}`} scope="col">{key==='id'? '#': key }</th>
                  )
                })
              }
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              data &&
              data.map((item)=>{
                return(
                  <tr>
                    {
                      keys.map((key) => renderCell(item,key))
                    }
                    <td className='align-middle' >
                      <button 
                        type="button" 
                        className="btn btn-outline-success" 
                        data-bs-toggle="modal" 
                        data-bs-target={`#edit${idSufModal}`}
                        onClick={() =>{onClickEdit(item.id)}}
                      >
                        Edit
                      </button>
                    </td>
                    <td className='align-middle'>
                      <button 
                        type="button" 
                        className="btn btn-outline-danger" 
                        data-bs-toggle="modal" 
                        data-bs-target={`#remove${idSufModal}`}
                        onClick={() =>{setItemToDelete(item.id)}}
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                )
              })
            }    
          </tbody>
        </table>:
          <h1>Ops...Nao a dados carregados </h1>
        }
      </div>

      <DeleteAlert 
        name={idSufModal}
        msg='Tem certeza que quer fazer essa ação?' 
        rmFunction={onClickRemove}
        id={itemToDelete} 
      />
    </>
  );
}
export default Table;
