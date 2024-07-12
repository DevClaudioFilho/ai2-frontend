import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';
import authHeader from '../../utils/auth/auth.header';

function Perfil(){
  const [user, setUser] = useState()

  useEffect(() => {
    api.get(`/user/current`, {headers: authHeader()})
    .then((res) => {
      if(res.data.success===false){
        return
      }
      else{
        setUser(res.data)
      }
    })
    .catch((err) => {
      console.error(`Error: ${err}` )
    })

  }, [])

  return (
    <main>
      {user &&
        <div className="container mt-4 text-white text-md-start text-center">
          <div className='d-flex'>
            <img src={!!user.avatar?user.avatar:"https://th.bing.com/th/id/OIP.PT_eYfdZc55ShZAIiFn9jAHaEK?w=324&h=182&c=7&r=0&o=5&pid=1.7"} alt=""  className="bg-primary " width={250} height={250} style={{borderRadius:"50%"}}/>
            <span>
              <h1 className="title text-warning">
                {user.name}
              </h1>
              <p>
                Email: {user.email}
              </p>
              <p>
                Administrador: {`${user.is_admin}`}
              </p>

            </span>
          </div>

        </div>
      }
    </main>
  )
}

export default Perfil;